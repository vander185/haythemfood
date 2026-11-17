# haythemfood
snack resto grill

## Paiement en ligne (Mollie)

Bancontact, Payconiq, cartes, Apple Pay et Google Pay passent par Mollie.
La clé secrète Mollie n'est jamais dans ce dépôt public : elle est gardée par
la fonction Supabase `mollie` (code dans `supabase/functions/mollie/index.ts`,
déjà déployée sur le projet Supabase « Haythemfood.com »).

1. Créer un compte sur mollie.com (TVA BE1030348450, IBAN pour recevoir l'argent),
   activer Bancontact, cartes, Apple Pay… et attendre la validation du compte.
2. Copier la clé API « Live » (commence par `live_`) depuis Mollie → Développeurs → Clés API.
3. Supabase → projet Haythemfood.com → Edge Functions → Secrets : ajouter
   `MOLLIE_KEY` = la clé copiée. (Pour essayer sans vrai argent : la clé `test_…`.)
4. Sur le site : réglages (logo + code PIN) → Options & Paiements → Paiement en ligne →
   « Tester la connexion Mollie », puis « Activé » et Enregistrer.

La commande n'arrive en cuisine que si Mollie confirme le paiement ; l'écran cuisine
revérifie chaque paiement auprès de Mollie (« ✅ Payé en ligne » ou « ⚠ PAIEMENT NON CONFIRMÉ »).

## Écrans séparés

- Site clients : https://haythemfood.com/
- Écran cuisine (code PIN) : https://haythemfood.com/cuisine/
- Écran d'attente clients (TV) : https://haythemfood.com/file/

Chaque écran est une appli à part (installable sur l'écran d'accueil / la TV).
`cuisine/index.html` et `file/index.html` sont des copies d'`index.html` avec
`window.HF_SCREEN` : si `index.html` change, refaire ces deux copies.
