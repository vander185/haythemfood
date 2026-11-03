-- Haythem Food : commandes partagées entre le site, l'écran cuisine et l'écran clients
-- À coller dans Supabase > SQL Editor > Run. À lancer UNE SEULE FOIS :
-- il remplace le script précédent et efface les anciennes tables (vides) avant de les recréer.

drop table if exists public.board cascade;
drop table if exists public.orders cascade;
drop function if exists public.suivi_commande(uuid);
drop function if exists public.create_order(jsonb);
drop function if exists public.update_order_pay(text, text, int);
drop function if exists public.sync_board();

-- Toutes les commandes (accessible seulement à la cuisine connectée)
create table public.orders (
  id text primary key check (id ~ '^\w{1,40}$'),
  no int not null,
  u bigint not null,
  data jsonb not null,
  created_at timestamptz not null default now()
);
create index orders_created_idx on public.orders (created_at desc);
create index orders_u_idx on public.orders (u desc);

-- Version publique pour l'écran clients : numéro et statut seulement (aucun nom, aucun détail)
create table public.board (
  id text primary key,
  no int not null,
  st text not null,
  t bigint not null,
  u bigint not null,
  rc bigint not null default 0
);

alter table public.orders enable row level security;
alter table public.board enable row level security;

create policy "cuisine gere les commandes" on public.orders
  for all to authenticated using (true) with check (true);

create policy "tout le monde lit le tableau" on public.board
  for select to anon, authenticated using (true);

revoke all on public.orders from anon;
revoke insert, update, delete on public.board from anon, authenticated;

-- Copie automatique du numéro et du statut vers l'écran clients
create function public.sync_board() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.board (id, no, st, t, u, rc)
  values (new.id, new.no, coalesce(new.data->>'st', 'new'),
          coalesce((new.data->>'t')::bigint, 0), new.u,
          coalesce((new.data->>'rc')::bigint, 0))
  on conflict (id) do update
    set no = excluded.no, st = excluded.st, u = excluded.u, rc = excluded.rc;
  return new;
end $$;

create trigger orders_vers_board after insert or update on public.orders
  for each row execute function public.sync_board();

-- Un client envoie sa commande : le serveur attribue le numéro et l'heure
create function public.create_order(p_order jsonb) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_id text := p_order->>'id';
  v_no int;
  v_last int;
  v_now bigint := (extract(epoch from clock_timestamp()) * 1000)::bigint;
  v_data jsonb;
  v_exist jsonb;
begin
  if v_id is null or v_id !~ '^\w{1,40}$' then
    raise exception 'identifiant invalide';
  end if;
  if jsonb_typeof(p_order->'l') is distinct from 'array'
     or jsonb_array_length(p_order->'l') not between 1 and 60 then
    raise exception 'commande invalide';
  end if;
  if pg_column_size(p_order) > 20000 then
    raise exception 'commande trop volumineuse';
  end if;

  perform pg_advisory_xact_lock(727);

  select data into v_exist from public.orders where id = v_id;
  if found then
    return v_exist;  -- renvoi de la même commande : pas de doublon
  end if;

  select no into v_last from public.orders
    where created_at > now() - interval '24 hours'
    order by created_at desc limit 1;
  v_no := coalesce(v_last, 0) % 99 + 1;
  for i in 1..99 loop
    exit when not exists (
      select 1 from public.orders
      where no = v_no and created_at > now() - interval '24 hours'
        and data->>'st' <> 'done');
    v_no := v_no % 99 + 1;
  end loop;

  v_data := jsonb_build_object(
    'id', v_id, 'no', v_no, 't', v_now, 'u', v_now, 'st', 'new',
    'mode', left(coalesce(p_order->>'mode', ''), 30),
    'pay',  left(coalesce(p_order->>'pay', ''), 30),
    'nom',  left(coalesce(p_order->>'nom', ''), 60),
    'tot',  left(coalesce(p_order->>'tot', ''), 20),
    'l',    p_order->'l');

  insert into public.orders (id, no, u, data) values (v_id, v_no, v_now, v_data);
  return v_data;
end $$;

-- Un client peut seulement corriger le mode de paiement de sa commande récente
create function public.update_order_pay(p_id text, p_pay text, p_unpaid int) returns void
language plpgsql security definer set search_path = public as $$
declare
  v_now bigint := (extract(epoch from clock_timestamp()) * 1000)::bigint;
begin
  update public.orders
     set u = v_now,
         data = data || jsonb_build_object(
           'pay', left(coalesce(p_pay, ''), 30),
           'unpaid', coalesce(p_unpaid, 0),
           'u', v_now)
   where id = p_id
     and created_at > now() - interval '3 hours'
     and data->>'st' = 'new';
end $$;

revoke execute on function public.create_order(jsonb) from public;
revoke execute on function public.update_order_pay(text, text, int) from public;
grant execute on function public.create_order(jsonb) to anon, authenticated;
grant execute on function public.update_order_pay(text, text, int) to anon, authenticated;

-- Temps réel
alter publication supabase_realtime add table public.orders;
alter publication supabase_realtime add table public.board;
