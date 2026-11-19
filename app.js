/* ===== CONFIG & RÉGLAGES DYNAMIQUES — accès aux réglages : 5 clics sur le logo + code ===== */
let CF = {};
try { CF = JSON.parse(localStorage.getItem('hfc') || '{}') || {}; } catch (e) {}
let lang = localStorage.getItem('hflang') || 'fr';

const TR = {
  nl: {
    "Même prix": "Zelfde prijs",
    "🟢 Ouvert · Commandez en ligne": "🟢 Open · Bestel online",
    "🔴 Actuellement fermé": "🔴 Momenteel gesloten",
    "✨ Nos incontournables": "✨ Onze toppers",
    "Voir la carte →": "Bekijk de kaart →",
    "Dürüms": "Dürüms",
    "Tacos": "Taco's",
    "Burgers": "Burgers",
    "Bowls & Salades": "Bowls & salades",
    "Voir la carte": "Bekijk de kaart",
    "Nous sommes fermés": "We zijn gesloten",
    "Ouvre": "Opent",
    "à": "om",
    "Réouverture bientôt": "Binnenkort weer open",
    "Vous pouvez préparer votre commande, l’envoi se fera à la réouverture.": "U kunt uw bestelling al samenstellen; ze wordt verstuurd zodra we open zijn.",
    "aujourd’hui": "vandaag",
    "demain": "morgen",
    "Suppléments au choix": "Extra's naar keuze",
    "Allergènes": "Allergenen",
    "Touchez un plat pour voir sa description, ses ingrédients et ses allergènes.": "Tik op een gerecht voor de beschrijving, ingrediënten en allergenen.",
    "Boisson incluse dans le menu": "Drankje inbegrepen in het menu",
    "En option, payant. Touchez pour ajouter ou retirer.": "Optioneel, betalend. Tik om toe te voegen of te verwijderen.",
    "Le goût est indiqué sous chaque sauce.": "De smaak staat onder elke saus.",
    "peu": "weinig",
    "relevé": "pittig",
    "très piquant": "heel pikant",
    "Votre panier est gardé : revenez à l’ouverture pour l’envoyer.": "Uw mandje blijft bewaard: kom terug bij opening om het te versturen.",
    "Payer": "Betalen",
    "et commander": "en bestellen",
    "Fermé · commande impossible": "Gesloten · bestellen niet mogelijk",
    "Ouverture du paiement…": "Betaling wordt geopend…",
    "Paiement en ligne indisponible : choisissez un autre mode de paiement": "Online betalen niet beschikbaar: kies een andere betaalwijze",
    "Paiement accepté": "Betaling aanvaard",
    "Vérification du paiement…": "Betaling wordt gecontroleerd…",
    "Paiement non abouti : votre panier est gardé": "Betaling niet gelukt: uw mandje blijft bewaard",
    "Préparation de votre commande…": "Uw bestelling wordt voorbereid…",
    "Envoi…": "Verzenden…",
    "Payé en ligne": "Online betaald",
    "Envoyer aussi sur WhatsApp": "Ook via WhatsApp sturen",
    "Nouveau": "Nieuw",
    "Le plus commandé": "Meest besteld",
    "Passez en menu ?": "Maak er een menu van?",
    "Votre plat + des frites": "Uw gerecht + frietjes",
    "boisson au choix": "drankje naar keuze",
    "Oui, en menu": "Ja, als menu",
    "Prête dans environ": "Klaar over ongeveer",
    "Vous êtes le prochain !": "U bent de volgende!",
    "Commande prête": "Bestelling klaar",
    "Venez la récupérer au comptoir": "Haal ze af aan de toonbank",
    "Dürüm": "Dürüm",
    "Maïs": "Maïs",
    "Salades": "Salades",
    'Composer': 'Samenstellen', 'Ajouter': 'Toevoegen', 'Ma commande': 'Mijn bestelling',
    'Sur place': 'Ter plaatse', 'À emporter': 'Meenemen', 'Votre prénom (pour vous appeler)': 'Uw voornaam',
    'Votre panier est vide.': 'Uw mandje is leeg.', 'Total': 'Totaal', 'Valider ma commande': 'Bestelling bevestigen',
    'Paiement au comptoir': 'Betaling aan de toonbank', 'Heure de retrait': 'Afhaaltijd',
    'Dès que possible': 'Zo snel mogelijk', 'Remarque pour la commande': 'Opmerking bij de bestelling',
    'Remarque (ex. sans oignons)': 'Opmerking (bv. zonder ui)', 'Suivant': 'Volgende',
    ' article': ' artikel', ' articles': ' artikels', 'Voir mon panier': 'Mijn mandje',
    'Rechercher un plat…': 'Zoek een gerecht…', 'Cuisine halal': 'Halal keuken',
    'Faite minute': 'Vers bereid', 'Sur place ou à emporter': 'Ter plaatse of meenemen',
    'Appeler': 'Bellen', 'Itinéraire': 'Route', 'Donner un avis': 'Beoordeel ons',
    'Épuisé': 'Uitverkocht', 'Ouvert': 'Open', 'Fermé': 'Gesloten',
    'Commander': 'Bestellen', 'À partir de': 'Vanaf', 'Fermer': 'Sluiten', 'Copier': 'Kopiëren', 'Copié ✔': 'Gekopieerd ✔',
    'Garniture au choix': 'Garnituur naar keuze', 'Sauces au choix': 'Sauzen naar keuze', 'Boisson en option': 'Drankje in optie',
    'Dürüm ou Sandwich': 'Dürüm of Broodje', 'Dürüm ou Sandwich ?': 'Dürüm of broodje?', 'Sandwich': 'Broodje', 'Formule': 'Formule',
    'Livraison à domicile': 'Levering aan huis', 'Prochainement': 'Binnenkort',
    'Bientôt disponible sur :': 'Binnenkort beschikbaar op:',
    'Scannez avec votre app bancaire': 'Scan met uw bank-app', 'Payer en ligne': 'Online betalen',
    'Virement pré-rempli : montant et communication déjà remplis.': 'Vooraf ingevulde overschrijving: bedrag en mededeling al ingevuld.',
    'Vider': 'Leegmaken', 'Vider le panier ?': 'Mandje leegmaken?', 'Modifier': 'Wijzigen', 'Retirer': 'Verwijderen',
    'Enregistrer': 'Bewaren', 'Panier vidé': 'Mandje leeggemaakt',
    'Choisir': 'Kiezen', 'Votre choix': 'Uw keuze', 'Fanta Citron': 'Fanta Citroen',
    'Garniture': 'Garnituur', 'Sauces': 'Sauzen', 'Boisson': 'Drank', 'Ajouter une boisson': 'Voeg een drankje toe',
    'Choisissez vos crudités': 'Kies uw groenten', 'Choisissez vos sauces': 'Kies uw sauzen',
    'Sans sauce': 'Zonder saus', 'Non merci': 'Nee, bedankt', 'Sans crudités': 'Zonder groenten', 'Toutes les crudités': 'Alle groenten',
    'Salade': 'Sla', 'Tomates': 'Tomaten', 'Oignons': 'Uien', 'Concombre': 'Komkommer', 'Carottes': 'Wortelen',
    'Chou blanc': 'Witte kool', 'Olives': 'Olijven', 'Poivrons': 'Paprika', 'Eau': 'Water',
    'Sandwichs': 'Broodjes', 'Menus': 'Menu’s', 'Assiettes': 'Schotels', 'Grillades': 'Grillgerechten',
    'Spécialités': 'Specialiteiten', 'Frites & plus': 'Frieten & meer', 'Suppléments': 'Extra’s', 'Boissons': 'Dranken',
    'Accompagnement : salade composée, frites, sauces': 'Bijgerecht: gemengde salade, frieten, sauzen',
    'Une boisson ou un dessert ?': 'Een drankje of een dessert?', 'Une boisson fraîche avec ça ?': 'Een fris drankje erbij?', 'Un petit dessert pour finir ?': 'Een dessertje als afsluiter?', 'Bien choisi ! Autre chose ?': 'Goede keuze! Nog iets?', 'Juste avant d’envoyer votre commande…': 'Net voor u uw bestelling verstuurt…', 'Non merci, envoyer ma commande': 'Nee bedankt, bestelling versturen', 'Envoyer ma commande': 'Mijn bestelling versturen', 'Recommander ma dernière commande': 'Mijn laatste bestelling opnieuw',
    'Commande envoyée': 'Bestelling verzonden', 'Votre numéro de commande': 'Uw bestelnummer',
    'Reçue': 'Ontvangen', 'En préparation': 'In bereiding', 'Prête': 'Klaar',
    'Votre commande est prête !': 'Uw bestelling is klaar!', 'Présentez ce numéro au comptoir.': 'Toon dit nummer aan de toonbank.',
    'Bon appétit !': 'Smakelijk!', 'Carte de fidélité': 'Klantenkaart', 'Cette commande complète votre carte :': 'Deze bestelling maakt uw kaart vol:',
    'fermé': 'gesloten', 'Lun': 'Ma', 'Mar': 'Di', 'Mer': 'Wo', 'Jeu': 'Do', 'Ven': 'Vr', 'Sam': 'Za', 'Dim': 'Zo',
    'Ouvre à': 'Opent om', 'Payer en ligne': 'Online betalen', 'Titulaire': 'Rekeninghouder', 'Banque': 'Bank',
    'Dürüms, tacos, grillades et tajines. Commandez en ligne, sur place ou à emporter.': "Dürüms, taco's, grill en tajines. Bestel online, ter plaatse of om mee te nemen."
  },
  en: {
    "Même prix": "Same price",
    "🟢 Ouvert · Commandez en ligne": "🟢 Open · Order online",
    "🔴 Actuellement fermé": "🔴 Currently closed",
    "✨ Nos incontournables": "✨ Our must-haves",
    "Voir la carte →": "See the menu →",
    "Dürüms": "Wraps",
    "Tacos": "Tacos",
    "Burgers": "Burgers",
    "Bowls & Salades": "Bowls & salads",
    "Voir la carte": "See the menu",
    "Nous sommes fermés": "We are closed",
    "Ouvre": "Opens",
    "à": "at",
    "Réouverture bientôt": "Reopening soon",
    "Vous pouvez préparer votre commande, l’envoi se fera à la réouverture.": "You can prepare your order now; it will be sent when we reopen.",
    "aujourd’hui": "today",
    "demain": "tomorrow",
    "Suppléments au choix": "Extras of your choice",
    "Allergènes": "Allergens",
    "Touchez un plat pour voir sa description, ses ingrédients et ses allergènes.": "Tap a dish to see its description, ingredients and allergens.",
    "Boisson incluse dans le menu": "Drink included in the meal",
    "En option, payant. Touchez pour ajouter ou retirer.": "Optional, extra charge. Tap to add or remove.",
    "Le goût est indiqué sous chaque sauce.": "The taste is shown under each sauce.",
    "peu": "mild",
    "relevé": "spicy",
    "très piquant": "very hot",
    "Votre panier est gardé : revenez à l’ouverture pour l’envoyer.": "Your basket is saved: come back when we open to send it.",
    "Payer": "Pay",
    "et commander": "and order",
    "Fermé · commande impossible": "Closed · ordering unavailable",
    "Ouverture du paiement…": "Opening payment…",
    "Paiement en ligne indisponible : choisissez un autre mode de paiement": "Online payment unavailable: choose another payment method",
    "Paiement accepté": "Payment accepted",
    "Vérification du paiement…": "Checking payment…",
    "Paiement non abouti : votre panier est gardé": "Payment not completed: your basket is saved",
    "Préparation de votre commande…": "Preparing your order…",
    "Envoi…": "Sending…",
    "Payé en ligne": "Paid online",
    "Envoyer aussi sur WhatsApp": "Also send on WhatsApp",
    "Nouveau": "New",
    "Le plus commandé": "Most ordered",
    "Passez en menu ?": "Make it a meal?",
    "Votre plat + des frites": "Your dish + fries",
    "boisson au choix": "drink of your choice",
    "Oui, en menu": "Yes, make it a meal",
    "Prête dans environ": "Ready in about",
    "Vous êtes le prochain !": "You're next!",
    "Commande prête": "Order ready",
    "Venez la récupérer au comptoir": "Collect it at the counter",
    "Sandwich": "Sandwich",
    "Sauces": "Sauces",
    "Olives": "Olives",
    "Menus": "Meals",
    'Composer': 'Customise', 'Ajouter': 'Add', 'Ma commande': 'My order',
    'Sur place': 'Eat in', 'À emporter': 'Takeaway', 'Votre prénom (pour vous appeler)': 'Your first name',
    'Votre panier est vide.': 'Your basket is empty.', 'Total': 'Total', 'Valider ma commande': 'Confirm my order',
    'Paiement au comptoir': 'Pay at the counter', 'Heure de retrait': 'Pickup time',
    'Dès que possible': 'As soon as possible', 'Remarque pour la commande': 'Note for the order',
    'Remarque (ex. sans oignons)': 'Note (e.g. no onions)', 'Suivant': 'Next',
    ' article': ' item', ' articles': ' items', 'Voir mon panier': 'View my basket',
    'Rechercher un plat…': 'Search a dish…', 'Cuisine halal': 'Halal kitchen',
    'Faite minute': 'Made to order', 'Sur place ou à emporter': 'Eat in or takeaway',
    'Appeler': 'Call', 'Itinéraire': 'Directions', 'Donner un avis': 'Leave a review',
    'Épuisé': 'Sold out', 'Ouvert': 'Open', 'Fermé': 'Closed',
    'Commander': 'Order', 'À partir de': 'From', 'Fermer': 'Close', 'Copier': 'Copy', 'Copié ✔': 'Copied ✔',
    'Garniture au choix': 'Toppings of your choice', 'Sauces au choix': 'Sauces of your choice', 'Boisson en option': 'Optional drink',
    'Dürüm ou Sandwich': 'Wrap or Sandwich', 'Dürüm ou Sandwich ?': 'Wrap or sandwich?', 'Dürüm': 'Wrap', 'Formule': 'Choice',
    'Livraison à domicile': 'Home delivery', 'Prochainement': 'Coming soon',
    'Bientôt disponible sur :': 'Coming soon on:',
    'Scannez avec votre app bancaire': 'Scan with your banking app', 'Payer en ligne': 'Pay online',
    'Virement pré-rempli : montant et communication déjà remplis.': 'Pre-filled transfer: amount and reference already set.',
    'Vider': 'Empty', 'Vider le panier ?': 'Empty the basket?', 'Modifier': 'Edit', 'Retirer': 'Remove',
    'Enregistrer': 'Save', 'Panier vidé': 'Basket emptied',
    'Choisir': 'Choose', 'Votre choix': 'Your choice', 'Fanta Citron': 'Fanta Lemon',
    'Garniture': 'Toppings', 'Boisson': 'Drink', 'Ajouter une boisson': 'Add a drink',
    'Choisissez vos crudités': 'Choose your toppings', 'Choisissez vos sauces': 'Choose your sauces',
    'Sans sauce': 'No sauce', 'Non merci': 'No thanks', 'Sans crudités': 'No salad', 'Toutes les crudités': 'All toppings',
    'Salade': 'Lettuce', 'Tomates': 'Tomatoes', 'Oignons': 'Onions', 'Concombre': 'Cucumber', 'Maïs': 'Sweetcorn', 'Carottes': 'Carrots',
    'Chou blanc': 'White cabbage', 'Poivrons': 'Peppers', 'Eau': 'Water',
    'Sandwichs': 'Sandwiches', 'Assiettes': 'Platters', 'Grillades': 'Grills', 'Salades': 'Salads',
    'Spécialités': 'Specialities', 'Frites & plus': 'Fries & more', 'Suppléments': 'Extras', 'Boissons': 'Drinks',
    'Accompagnement : salade composée, frites, sauces': 'Side: mixed salad, fries, sauces',
    'Une boisson ou un dessert ?': 'A drink or a dessert?', 'Une boisson fraîche avec ça ?': 'A cold drink with that?', 'Un petit dessert pour finir ?': 'A little dessert to finish?', 'Bien choisi ! Autre chose ?': 'Great choice! Anything else?', 'Juste avant d’envoyer votre commande…': 'Just before you send your order…', 'Non merci, envoyer ma commande': 'No thanks, send my order', 'Envoyer ma commande': 'Send my order', 'Recommander ma dernière commande': 'Reorder my last order',
    'Commande envoyée': 'Order sent', 'Votre numéro de commande': 'Your order number',
    'Reçue': 'Received', 'En préparation': 'Being prepared', 'Prête': 'Ready',
    'Votre commande est prête !': 'Your order is ready!', 'Présentez ce numéro au comptoir.': 'Show this number at the counter.',
    'Bon appétit !': 'Enjoy your meal!', 'Carte de fidélité': 'Loyalty card', 'Cette commande complète votre carte :': 'This order completes your card:',
    'fermé': 'closed', 'Lun': 'Mon', 'Mar': 'Tue', 'Mer': 'Wed', 'Jeu': 'Thu', 'Ven': 'Fri', 'Sam': 'Sat', 'Dim': 'Sun',
    'Ouvre à': 'Opens at', 'Payer en ligne': 'Pay online', 'Titulaire': 'Account holder', 'Banque': 'Bank',
    'Dürüms, tacos, grillades et tajines. Commandez en ligne, sur place ou à emporter.': "Dürüms, tacos, grills and tajines. Order online, eat in or take away."
  },
  es: {
    "Même prix": "Mismo precio",
    "🟢 Ouvert · Commandez en ligne": "🟢 Abierto · Pida en línea",
    "🔴 Actuellement fermé": "🔴 Cerrado ahora",
    "✨ Nos incontournables": "✨ Nuestros imprescindibles",
    "Voir la carte →": "Ver la carta →",
    "Dürüms": "Dürüms",
    "Tacos": "Tacos",
    "Burgers": "Hamburguesas",
    "Bowls & Salades": "Bowls y ensaladas",
    "Composer": "Personalizar",
    "Ajouter": "Añadir",
    "Ma commande": "Mi pedido",
    "Sur place": "Para comer aquí",
    "À emporter": "Para llevar",
    "Votre prénom (pour vous appeler)": "Su nombre (para llamarle)",
    "Votre panier est vide.": "Su cesta está vacía.",
    "Total": "Total",
    "Valider ma commande": "Confirmar mi pedido",
    "Paiement au comptoir": "Pago en el mostrador",
    "Heure de retrait": "Hora de recogida",
    "Dès que possible": "Lo antes posible",
    "Remarque pour la commande": "Nota para el pedido",
    "Remarque (ex. sans oignons)": "Nota (p. ej. sin cebolla)",
    "Suivant": "Siguiente",
    " article": " artículo",
    " articles": " artículos",
    "Voir mon panier": "Ver mi cesta",
    "Rechercher un plat…": "Buscar un plato…",
    "Cuisine halal": "Cocina halal",
    "Faite minute": "Hecho al momento",
    "Sur place ou à emporter": "Para comer aquí o para llevar",
    "Appeler": "Llamar",
    "Itinéraire": "Cómo llegar",
    "Donner un avis": "Dejar una reseña",
    "Épuisé": "Agotado",
    "Ouvert": "Abierto",
    "Fermé": "Cerrado",
    "Commander": "Pedir",
    "À partir de": "Desde",
    "Fermer": "Cerrar",
    "Copier": "Copiar",
    "Copié ✔": "Copiado ✔",
    "Garniture au choix": "Verduras a elegir",
    "Sauces au choix": "Salsas a elegir",
    "Boisson en option": "Bebida opcional",
    "Dürüm ou Sandwich": "Dürüm o bocadillo",
    "Dürüm ou Sandwich ?": "¿Dürüm o bocadillo?",
    "Sandwich": "Bocadillo",
    "Dürüm": "Dürüm",
    "Formule": "Fórmula",
    "Livraison à domicile": "Entrega a domicilio",
    "Prochainement": "Próximamente",
    "Bientôt disponible sur :": "Próximamente en:",
    "Scannez avec votre app bancaire": "Escanee con su app bancaria",
    "Payer en ligne": "Pagar en línea",
    "Virement pré-rempli : montant et communication déjà remplis.": "Transferencia prerrellenada: importe y concepto ya indicados.",
    "Vider": "Vaciar",
    "Vider le panier ?": "¿Vaciar la cesta?",
    "Modifier": "Modificar",
    "Retirer": "Quitar",
    "Enregistrer": "Guardar",
    "Panier vidé": "Cesta vaciada",
    "Choisir": "Elegir",
    "Votre choix": "Su elección",
    "Fanta Citron": "Fanta Limón",
    "Garniture": "Verduras",
    "Sauces": "Salsas",
    "Boisson": "Bebida",
    "Ajouter une boisson": "Añadir una bebida",
    "Choisissez vos crudités": "Elija sus verduras",
    "Choisissez vos sauces": "Elija sus salsas",
    "Sans sauce": "Sin salsa",
    "Non merci": "No, gracias",
    "Sans crudités": "Sin verduras",
    "Toutes les crudités": "Todas las verduras",
    "Salade": "Lechuga",
    "Tomates": "Tomates",
    "Oignons": "Cebolla",
    "Concombre": "Pepino",
    "Maïs": "Maíz",
    "Carottes": "Zanahoria",
    "Chou blanc": "Col blanca",
    "Olives": "Aceitunas",
    "Poivrons": "Pimientos",
    "Eau": "Agua",
    "Sandwichs": "Bocadillos",
    "Menus": "Menús",
    "Assiettes": "Platos",
    "Grillades": "Parrilla",
    "Salades": "Ensaladas",
    "Spécialités": "Especialidades",
    "Frites & plus": "Patatas fritas y más",
    "Suppléments": "Extras",
    "Boissons": "Bebidas",
    "Accompagnement : salade composée, frites, sauces": "Acompañamiento: ensalada, patatas fritas, salsas",
    "Une boisson ou un dessert ?": "¿Una bebida o un postre?",
    "Une boisson fraîche avec ça ?": "¿Una bebida fresca con eso?",
    "Un petit dessert pour finir ?": "¿Un postre para terminar?",
    "Bien choisi ! Autre chose ?": "¡Buena elección! ¿Algo más?",
    "Juste avant d’envoyer votre commande…": "Justo antes de enviar su pedido…",
    "Non merci, envoyer ma commande": "No, gracias, enviar mi pedido",
    "Envoyer ma commande": "Enviar mi pedido",
    "Recommander ma dernière commande": "Repetir mi último pedido",
    "Commande envoyée": "Pedido enviado",
    "Votre numéro de commande": "Su número de pedido",
    "Reçue": "Recibido",
    "En préparation": "En preparación",
    "Prête": "Listo",
    "Votre commande est prête !": "¡Su pedido está listo!",
    "Présentez ce numéro au comptoir.": "Muestre este número en el mostrador.",
    "Bon appétit !": "¡Buen provecho!",
    "Carte de fidélité": "Tarjeta de fidelidad",
    "Cette commande complète votre carte :": "Este pedido completa su tarjeta:",
    "fermé": "cerrado",
    "Lun": "Lun",
    "Mar": "Mar",
    "Mer": "Mié",
    "Jeu": "Jue",
    "Ven": "Vie",
    "Sam": "Sáb",
    "Dim": "Dom",
    "Ouvre à": "Abre a las",
    "Titulaire": "Titular",
    "Banque": "Banco",
    "Dürüms, tacos, grillades et tajines. Commandez en ligne, sur place ou à emporter.": "Dürüms, tacos, parrilla y tajines. Pida en línea, para comer aquí o para llevar.",
    "Voir la carte": "Ver la carta",
    "Nous sommes fermés": "Estamos cerrados",
    "Ouvre": "Abre",
    "à": "a las",
    "Réouverture bientôt": "Reabrimos pronto",
    "Vous pouvez préparer votre commande, l’envoi se fera à la réouverture.": "Puede preparar su pedido; se enviará cuando abramos.",
    "aujourd’hui": "hoy",
    "demain": "mañana",
    "Suppléments au choix": "Extras a elegir",
    "Allergènes": "Alérgenos",
    "Touchez un plat pour voir sa description, ses ingrédients et ses allergènes.": "Toque un plato para ver su descripción, ingredientes y alérgenos.",
    "Boisson incluse dans le menu": "Bebida incluida en el menú",
    "En option, payant. Touchez pour ajouter ou retirer.": "Opcional, de pago. Toque para añadir o quitar.",
    "Le goût est indiqué sous chaque sauce.": "El sabor se indica bajo cada salsa.",
    "peu": "poco",
    "relevé": "picante",
    "très piquant": "muy picante",
    "Votre panier est gardé : revenez à l’ouverture pour l’envoyer.": "Su cesta se guarda: vuelva cuando abramos para enviarla.",
    "Payer": "Pagar",
    "et commander": "y pedir",
    "Fermé · commande impossible": "Cerrado · no se puede pedir",
    "Ouverture du paiement…": "Abriendo el pago…",
    "Paiement en ligne indisponible : choisissez un autre mode de paiement": "Pago en línea no disponible: elija otro método",
    "Paiement accepté": "Pago aceptado",
    "Vérification du paiement…": "Comprobando el pago…",
    "Paiement non abouti : votre panier est gardé": "Pago no completado: su cesta se guarda",
    "Préparation de votre commande…": "Preparando su pedido…",
    "Envoi…": "Enviando…",
    "Payé en ligne": "Pagado en línea",
    "Envoyer aussi sur WhatsApp": "Enviar también por WhatsApp",
    "Nouveau": "Nuevo",
    "Le plus commandé": "El más pedido",
    "Passez en menu ?": "¿Lo hacemos menú?",
    "Votre plat + des frites": "Su plato + patatas fritas",
    "boisson au choix": "bebida a elegir",
    "Oui, en menu": "Sí, en menú",
    "Prête dans environ": "Listo en unos",
    "Vous êtes le prochain !": "¡Es el siguiente!",
    "Commande prête": "Pedido listo",
    "Venez la récupérer au comptoir": "Recójalo en el mostrador"
  },
  ar: {
    "Même prix": "نفس السعر",
    "🟢 Ouvert · Commandez en ligne": "🟢 مفتوح · اطلب عبر الإنترنت",
    "🔴 Actuellement fermé": "🔴 مغلق حالياً",
    "✨ Nos incontournables": "✨ أطباقنا المميزة",
    "Voir la carte →": "عرض القائمة ←",
    "Dürüms": "دُروم",
    "Tacos": "تاكوس",
    "Burgers": "برغر",
    "Bowls & Salades": "بولز وسلطات",
    "Composer": "خصّص",
    "Ajouter": "أضف",
    "Ma commande": "طلبي",
    "Sur place": "في المطعم",
    "À emporter": "سفري",
    "Votre prénom (pour vous appeler)": "اسمك (لننادي عليك)",
    "Votre panier est vide.": "سلّتك فارغة.",
    "Total": "المجموع",
    "Valider ma commande": "تأكيد طلبي",
    "Paiement au comptoir": "الدفع عند الكاونتر",
    "Heure de retrait": "وقت الاستلام",
    "Dès que possible": "في أقرب وقت",
    "Remarque pour la commande": "ملاحظة على الطلب",
    "Remarque (ex. sans oignons)": "ملاحظة (مثلاً بدون بصل)",
    "Suivant": "التالي",
    " article": " صنف",
    " articles": " أصناف",
    "Voir mon panier": "عرض سلّتي",
    "Rechercher un plat…": "ابحث عن طبق…",
    "Cuisine halal": "مطبخ حلال",
    "Faite minute": "يُحضَّر فوراً",
    "Sur place ou à emporter": "في المطعم أو سفري",
    "Appeler": "اتصل",
    "Itinéraire": "الاتجاهات",
    "Donner un avis": "اترك تقييماً",
    "Épuisé": "نفد",
    "Ouvert": "مفتوح",
    "Fermé": "مغلق",
    "Commander": "اطلب",
    "À partir de": "ابتداءً من",
    "Fermer": "إغلاق",
    "Copier": "نسخ",
    "Copié ✔": "تم النسخ ✔",
    "Garniture au choix": "خضار حسب اختيارك",
    "Sauces au choix": "صلصات حسب اختيارك",
    "Boisson en option": "مشروب اختياري",
    "Dürüm ou Sandwich": "دُروم أو ساندويتش",
    "Dürüm ou Sandwich ?": "دُروم أو ساندويتش؟",
    "Sandwich": "ساندويتش",
    "Dürüm": "دُروم",
    "Formule": "الاختيار",
    "Livraison à domicile": "التوصيل إلى المنزل",
    "Prochainement": "قريباً",
    "Bientôt disponible sur :": "قريباً على:",
    "Scannez avec votre app bancaire": "امسح بتطبيق البنك",
    "Payer en ligne": "الدفع عبر الإنترنت",
    "Virement pré-rempli : montant et communication déjà remplis.": "تحويل جاهز: المبلغ والمرجع معبّآن مسبقاً.",
    "Vider": "إفراغ",
    "Vider le panier ?": "إفراغ السلّة؟",
    "Modifier": "تعديل",
    "Retirer": "حذف",
    "Enregistrer": "حفظ",
    "Panier vidé": "تم إفراغ السلّة",
    "Choisir": "اختر",
    "Votre choix": "اختيارك",
    "Fanta Citron": "فانتا ليمون",
    "Garniture": "الخضار",
    "Sauces": "الصلصات",
    "Boisson": "المشروب",
    "Ajouter une boisson": "أضف مشروباً",
    "Choisissez vos crudités": "اختر الخضار",
    "Choisissez vos sauces": "اختر الصلصات",
    "Sans sauce": "بدون صلصة",
    "Non merci": "لا، شكراً",
    "Sans crudités": "بدون خضار",
    "Toutes les crudités": "كل الخضار",
    "Salade": "خس",
    "Tomates": "طماطم",
    "Oignons": "بصل",
    "Concombre": "خيار",
    "Maïs": "ذرة",
    "Carottes": "جزر",
    "Chou blanc": "ملفوف أبيض",
    "Olives": "زيتون",
    "Poivrons": "فلفل",
    "Eau": "ماء",
    "Sandwichs": "ساندويتشات",
    "Menus": "وجبات",
    "Assiettes": "أطباق",
    "Grillades": "مشويات",
    "Salades": "سلطات",
    "Spécialités": "أطباق خاصة",
    "Frites & plus": "بطاطا مقلية والمزيد",
    "Suppléments": "إضافات",
    "Boissons": "مشروبات",
    "Accompagnement : salade composée, frites, sauces": "مع: سلطة، بطاطا مقلية، صلصات",
    "Une boisson ou un dessert ?": "مشروب أو حلوى؟",
    "Une boisson fraîche avec ça ?": "مشروب بارد معه؟",
    "Un petit dessert pour finir ?": "حلوى صغيرة للختام؟",
    "Bien choisi ! Autre chose ?": "اختيار موفّق! شيء آخر؟",
    "Juste avant d’envoyer votre commande…": "قبل إرسال طلبك…",
    "Non merci, envoyer ma commande": "لا شكراً، أرسل طلبي",
    "Envoyer ma commande": "أرسل طلبي",
    "Recommander ma dernière commande": "أعد طلبي الأخير",
    "Commande envoyée": "تم إرسال الطلب",
    "Votre numéro de commande": "رقم طلبك",
    "Reçue": "تم الاستلام",
    "En préparation": "قيد التحضير",
    "Prête": "جاهز",
    "Votre commande est prête !": "طلبك جاهز!",
    "Présentez ce numéro au comptoir.": "أظهر هذا الرقم عند الكاونتر.",
    "Bon appétit !": "بالهناء والشفاء!",
    "Carte de fidélité": "بطاقة الوفاء",
    "Cette commande complète votre carte :": "هذا الطلب يكمل بطاقتك:",
    "fermé": "مغلق",
    "Lun": "الإثنين",
    "Mar": "الثلاثاء",
    "Mer": "الأربعاء",
    "Jeu": "الخميس",
    "Ven": "الجمعة",
    "Sam": "السبت",
    "Dim": "الأحد",
    "Ouvre à": "يفتح على الساعة",
    "Titulaire": "صاحب الحساب",
    "Banque": "البنك",
    "Dürüms, tacos, grillades et tajines. Commandez en ligne, sur place ou à emporter.": "دُروم، تاكوس، مشويات وطواجن. اطلب عبر الإنترنت، في المطعم أو سفري.",
    "Voir la carte": "عرض القائمة",
    "Nous sommes fermés": "نحن مغلقون",
    "Ouvre": "يفتح",
    "à": "على الساعة",
    "Réouverture bientôt": "نفتح قريباً",
    "Vous pouvez préparer votre commande, l’envoi se fera à la réouverture.": "يمكنك تحضير طلبك الآن، وسيُرسل عند إعادة الفتح.",
    "aujourd’hui": "اليوم",
    "demain": "غداً",
    "Suppléments au choix": "إضافات حسب اختيارك",
    "Allergènes": "مسببات الحساسية",
    "Touchez un plat pour voir sa description, ses ingrédients et ses allergènes.": "المس طبقاً لرؤية وصفه ومكوناته ومسببات الحساسية.",
    "Boisson incluse dans le menu": "المشروب مشمول في الوجبة",
    "En option, payant. Touchez pour ajouter ou retirer.": "اختياري بمقابل. المس للإضافة أو الحذف.",
    "Le goût est indiqué sous chaque sauce.": "الطعم مكتوب تحت كل صلصة.",
    "peu": "قليلاً",
    "relevé": "حار",
    "très piquant": "حار جداً",
    "Votre panier est gardé : revenez à l’ouverture pour l’envoyer.": "سلّتك محفوظة: عُد عند الفتح لإرسالها.",
    "Payer": "ادفع",
    "et commander": "واطلب",
    "Fermé · commande impossible": "مغلق · لا يمكن الطلب",
    "Ouverture du paiement…": "جارٍ فتح الدفع…",
    "Paiement en ligne indisponible : choisissez un autre mode de paiement": "الدفع عبر الإنترنت غير متاح: اختر طريقة أخرى",
    "Paiement accepté": "تم قبول الدفع",
    "Vérification du paiement…": "جارٍ التحقق من الدفع…",
    "Paiement non abouti : votre panier est gardé": "لم يكتمل الدفع: سلّتك محفوظة",
    "Préparation de votre commande…": "جارٍ تجهيز طلبك…",
    "Envoi…": "جارٍ الإرسال…",
    "Payé en ligne": "مدفوع عبر الإنترنت",
    "Envoyer aussi sur WhatsApp": "أرسل أيضاً عبر واتساب",
    "Nouveau": "جديد",
    "Le plus commandé": "الأكثر طلباً",
    "Passez en menu ?": "تجعلها وجبة؟",
    "Votre plat + des frites": "طبقك + بطاطا مقلية",
    "boisson au choix": "مشروب حسب اختيارك",
    "Oui, en menu": "نعم، كوجبة",
    "Prête dans environ": "جاهز خلال حوالي",
    "Vous êtes le prochain !": "أنت التالي!",
    "Commande prête": "الطلب جاهز",
    "Venez la récupérer au comptoir": "تعال لاستلامه من الكاونتر"
  }
};
const T = s => (TR[lang] || {})[s] || s;
/* langue de la page (lecteurs d'écran, Google) et sens d'écriture : l'arabe se lit de droite à gauche */
function langDir() { try { const h = document.documentElement; h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr'; } catch (e) {} }
langDir();

const DEFAULT_CFG = {
  WA: '32493393983',
  PINH: '0264d3b920ad2381a5c739fae03fdafa8f7ce9e34a9b14b74e5fb8a76604f013',
  DB: 'https://haythemfood-2f2e9-default-rtdb.europe-west1.firebasedatabase.app',
  title: 'Haythem Food',
  sub: 'Dürüms, tacos, grillades et tajines. Commandez en ligne, sur place ou à emporter.',
  badges: 'Cuisine halal, Faite minute, Sur place ou à emporter',
  promo: '',
  openStatus: 'auto',
  openText: '🟢 Ouvert · Commandez en ligne',
  closedText: '🔴 Actuellement fermé',
  tel: '+32493393983',
  maps: 'https://maps.google.com/?q=25A+Chaussee+d+Anvers+1000+Bruxelles',
  review: 'https://search.google.com/local/writereview?placeid=ChIJ9VtNqZzDw0cR3xVjoXyanQw&source=g.page.m._&laa=merchant-review-solicitation',
  footer: '25A Chaussée d’Anvers, 1000 Bruxelles · Cuisine halal · Faite minute',
  galTitle: '✨ Nos incontournables',
  accNote: 'Accompagnement : salade composée, frites, sauces',
  dp: 1.5,
  logoUrl: '',
  heroBg: '',
  bgCol: '#040914',
  cardCol: '#0c1b3e',
  goldCol: '#d4af37',
  hours: '11:30-22:30,11:30-22:30,11:30-22:30,11:30-22:30,11:30-22:30,14:00-22:30,',
  banOn: '1',
  banSec: 5,
  ksound: 'carillon',
  krep: 2,
  cruNo: 'Olives',
  supCat: 'Suppléments',
  supNo: '',
  supTitle: 'Un supplément ?',
  noPre: '',
  noPad: 2,
  noStart: 1,
  noOff: 900,
  algOn: '1',
  algNote: 'Allergènes : demandez-nous, nous vous renseignons plat par plat.',
  algChecked: '0',
  algCross: 'Préparé dans une cuisine où sont manipulés gluten, œufs, lait, sésame, poisson et fruits à coque : une trace est toujours possible.',
  bce: 'BE 1030.348.450',
  mail: '',
  mTypeCat: 'Menus',
  mTypes: 'Dürüm, Sandwich',
  mTypeNo: 'Bicky, Pita, Menu enfant',
  delvOn: '1',
  delvTitle: 'Livraison à domicile',
  delvBadge: 'Prochainement',
  delvText: 'Bientôt disponible sur :',
  delvApps: 'Uber Eats, Takeaway, Deliveroo',
  upOn: '1',
  upTitle: 'Une boisson ou un dessert ?',
  upCats: 'Boissons, Desserts',
  upAsk: '1',
  loyOn: '0',
  loyN: 10,
  loyGift: 'Un dürüm offert',
  payTitle: 'Paiement au comptoir',
  bankHolder: '',
  bankIban: '',
  bankBic: '',
  bankName: '',
  bankNote: 'Communication : votre prénom + le numéro de commande',
  molOn: '0',
  molName: 'Payer en ligne',
  molInfo: 'Bancontact, Payconiq, carte bancaire, Apple Pay ou Google Pay. Paiement 100 % sécurisé : votre commande part en cuisine dès que le paiement est accepté.',
  molFn: 'https://nfdcrufjjqltibqvyprz.supabase.co/functions/v1/mollie'
};

const getCfg = k => (CF.cfg && CF.cfg[k] !== undefined && CF.cfg[k] !== '') ? CF.cfg[k] : DEFAULT_CFG[k];

const DEFAULT_D = `Dürüms|🌯|Dürüm|Chawarma 7.5;Kefta 7.5;Hamburger 7;Poulet 7.5;Poulet pané 8;Merguez 7.5;Fallafels 7.5;Foie 8;Viande 8.5;Poisson 9.5;Dinde 7.5;Tenders 8
Sandwichs|🥖|Sandwich|Chawarma 7.5;Kefta 7.5;Hamburger 7;Poulet 7.5;Poulet pané 8;Merguez 7.5;Fallafels 7.5;Foie 8;Viande 8.5;Poisson 9.5;Dinde 7.5;Tenders 8
Panini|🥪|Panini|Kefta 8;Poulet 8;Merguez 8;Tenders 8.5;Fallafels 8;Fish 8;Pita 8;Dinde 8;Viande 8.5;Mixte 8.5
Tacos|🌮|Tacos|Kefta 9.5;Poulet 9.5;Tenders 9.5;Fallafels 9.5;Dinde 9.5;Viande 9.5;Mixte 10
Kapsalon|🥗|Kapsalon|Poulet 9.5;Fallafels 9.5;Tenders 9.5;Viande 10;Hamburger 9;Dinde 9.5;Merguez 9.5;Mixte 10;Kebda 9.5;Poisson 10.5
Menus|🍽️|Menu|Bicky 8.5;Pita 9;Poulet 9;Tenders 9.5;Dinde 9;Merguez 9;Viande 10;Mixte 10;Hamburger 8.5;Menu enfant 8
Bicky|🍔|Bicky|Hamburger 5;Kefta 5.5;Fish 5.5
Assiettes|🍛|Assiette|Poulet 14;Merguez 14;Falafels 16;Fish 16;Poulet pané 16;Meze maison 18;Hamburger 12;Kefta 14;Brochettes 15.5;Foie 15;Grillade maison 18;Viande 16;Mixte 16
Grillades|🍖||Grillade (shawarma, poulet) 15.5;Grillade maison (merguez, shawarma, poulet) 17;Grillade du chef (kefta, shawarma, brochettes) 17.5;Grillade pacha (kefta, shawarma, poulet, brochettes) 17.5
Salades|🥬|Salade|Caprice 6;Mixte 6.5;Maison 6.5;Poulet 9.5;Viande au choix 9.5
Spécialités|🍲||Tajine kefta 10.5;Tajine poulet légumes 11.5;Tajine poulet citron olives 13;Tajine agneau pruneaux 14;Couscous viande au choix 11.5
Frites & plus|🍟||Frites petite 3.5;Frites moyenne 4;Frites grande 4.5;Ailes de poulet 4.5;Bouchettes viande 6;Poulycroc 3;Boulettes 3;Fricadelles 3
Sauces|🥫|Sauce|Mayonnaise .75;Ketchup .75;Andalouse .75;Algérienne .75;Samouraï .75;Blanche .75;Harissa .75;Américaine .75;Brazil .75;Bicky .75;Mammouth .75;Tartare .75;Cocktail .75;Curry ketchup .75;Sauce à l’ail .75;Barbecue .75;Moutarde .75;Piquante .75;Pili-pili .75;Sweet chili .75;Pita .75
Suppléments|➕|Supplément|Feta 1;Kefta 3.5;Merguez 3.5;Extra sauce .75;Cheddar 1;Poulet 3.5;Côte d’agneau 5
Boissons|🥤||Thé à la menthe 1 pers. 2.5;Thé à la menthe 2 pers. 4.5;Thé à la menthe 5 pers. 8;Café noir 2.5;Café au lait 3;Redbull 3;Freez 3;Softs 0,33 L 2;Caprisun 1
Desserts|🍰||Dame blanche 3.5;Pâtisserie marocaine 3.5;Tiramisu maison 3.5`;

const DEFAULT_OPT = {
  'Dürüms': 'srxb', 'Sandwichs': 'srxb', 'Panini': 'srxb', 'Tacos': 'srxb',
  'Kapsalon': 'srxb', 'Menus': 'srxb', 'Bicky': 'srxb', 'Assiettes': 'sxb',
  'Grillades': 'sxb', 'Salades': 'srxb', 'Frites & plus': 'sxb'
};
const DEFAULT_CRU = ['Salade', 'Tomates', 'Oignons', 'Concombre', 'Maïs', 'Carottes', 'Chou blanc', 'Olives'];
const DEFAULT_DRK = ['Coca-Cola', 'Coca-Cola Zéro', 'Fanta', 'Fanta Citron', 'Sprite', 'Schweppes Lemon', 'Schweppes Agrumes', 'Ice Tea', 'Orangina', 'Caprisun', 'Eau'];
const DEFAULT_PAYS = [
  { on: true, e: '💶', n: 'Espèces' },
  { on: true, e: '🟦', n: 'Bancontact' },
  { on: true, e: '📱', n: 'Payconiq' },
  { on: true, e: '💳', n: 'Visa / Mastercard' },
  { on: false, e: '🏦', n: 'Virement bancaire', bank: true }
];

/* Sous-menus : un plat peut proposer une liste de choix (ex. Softs 0,33 L → les boissons) */
const DEFAULT_VAR = { 'Boissons|Softs 0,33 L': DEFAULT_DRK.map(n => ({ n, p: /capri/i.test(n) ? 1 : '' })) };
const vrs = it => {
  if (!it) return [];
  const k = it.cat + '|' + ((base[it.id] && base[it.id].n) || it.n);
  let v = (CF.var && (CF.var[it.id] || CF.var[k])) || DEFAULT_VAR[k] || [];
  /* Caprisun ajouté aussi aux listes de softs déjà enregistrées (1 €, comme le Caprisun seul) */
  if (Array.isArray(v) && /^Softs/i.test(k.split('|')[1] || '') && !v.some(x => x && /capri/i.test(x.n))) {
    v = v.slice(); const e = v.findIndex(x => x && /^eau$/i.test(x.n)); v.splice(e >= 0 ? e : v.length, 0, { n: 'Caprisun', p: 1 });
  }
  return Array.isArray(v) ? v.filter(x => x && x.n) : [];
};
const vprice = (it, v) => (v && v.p !== '' && v.p != null && !isNaN(+v.p)) ? +v.p : it.p;
const vTxt = vs => vs.map(v => v.n + (v.p !== '' && v.p != null ? ' ' + v.p : '')).join('; ');
const vParse = t => String(t).split(';').map(x => {
  const m = x.trim().match(/^(.*?)\s+(\d*\.?\d+)$/);
  return m ? { n: m[1].trim(), p: +m[2] } : { n: x.trim(), p: '' };
}).filter(v => v.n);

const getCRU = () => ((CF.cru && CF.cru.length) ? CF.cru : DEFAULT_CRU).filter(v => norm(v) !== norm('Poivrons'));
/* « Toutes les crudités » : tout sauf celles listées dans cruNo */
const cruNo = () => String(getCfg('cruNo')).split(',').map(x => norm(x.trim())).filter(Boolean);
const cruAll = () => getCRU().filter(v => !cruNo().includes(norm(v)));
const isAllCru = r => r.length === cruAll().length && cruAll().every(v => r.includes(v));
const getDRK = () => {
  if (!(CF.drk && CF.drk.length)) return DEFAULT_DRK;
  /* Caprisun ajouté aussi à une liste de boissons déjà enregistrée dans les réglages */
  if (CF.drk.some(n => /capri/i.test(n))) return CF.drk;
  const d = CF.drk.slice(), e = d.findIndex(n => /^eau$/i.test(n)); d.splice(e >= 0 ? e : d.length, 0, 'Caprisun'); return d;
};
const getDP = () => +(getCfg('dp') || 1.5);
const molOn = () => String(getCfg('molOn')) === '1' && /^https:\/\//.test(getCfg('molFn'));
const PAYS = () => {
  const ps = CF.pays || DEFAULT_PAYS;
  const r = ps.filter(p => p.on !== false && p.n !== getCfg('molName')).map(p => [p.e || '💳', p.n]);
  return molOn() ? [['⚡', getCfg('molName')], ...r] : r;
};
const isMol = () => molOn() && payOf() === getCfg('molName');

/* ---- QR code (ISO/IEC 18004, mode octet, correction M, versions 1 à 10) ---- */
var QR = (function () {
  var EXP = new Array(512), LOG = new Array(256);
  for (var i = 0, x = 1; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 285; }
  for (var i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  var mul = function (a, b) { return (a && b) ? EXP[LOG[a] + LOG[b]] : 0; };
  var rsPoly = function (n) {
    var p = [1];
    for (var i = 0; i < n; i++) {
      var q = p.concat([0]);
      for (var j = 0; j < p.length; j++) q[j + 1] ^= mul(p[j], EXP[i]);
      p = q;
    }
    return p;
  };
  var rsEnc = function (data, n) {
    var g = rsPoly(n), r = new Array(n).fill(0);
    for (var k = 0; k < data.length; k++) {
      var f = data[k] ^ r[0];
      r.shift(); r.push(0);
      if (f) for (var i = 0; i < n; i++) r[i] ^= mul(g[i + 1], f);
    }
    return r;
  };
  /* [ec par bloc, blocs g1, données g1, blocs g2, données g2] — niveau M, versions 1..10 */
  var EC = [null, [10,1,16,0,0], [16,1,28,0,0], [26,1,44,0,0], [18,2,32,0,0], [24,2,43,0,0],
    [16,4,27,0,0], [18,4,31,0,0], [22,2,38,2,39], [22,3,36,2,37], [26,4,43,1,44]];
  var ALIGN = [null, [], [6,18], [6,22], [6,26], [6,30], [6,34], [6,22,38], [6,24,42], [6,26,46], [6,28,50]];
  var blen = function (x) { var n = 0; while (x) { n++; x >>>= 1; } return n; };
  var bch = function (v, poly, deg) {
    var d = v << deg, pl = blen(poly);
    while (blen(d) >= pl) d ^= poly << (blen(d) - pl);
    return d;
  };
  var bits = function (v, n, out) { for (var i = n - 1; i >= 0; i--) out.push((v >> i) & 1); };

  return function (text) {
    var b = [], j;
    for (j = 0; j < text.length; j++) {
      var c = text.charCodeAt(j);
      if (c < 128) b.push(c);
      else if (c < 2048) b.push(192 | (c >> 6), 128 | (c & 63));
      else { b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63)); }
    }
    var ver = 0;
    for (var v = 1; v <= 10; v++) {
      var e = EC[v], cap = e[1] * e[2] + e[3] * e[4], hdr = 4 + (v < 10 ? 8 : 16);
      if (b.length + Math.ceil(hdr / 8) <= cap) { ver = v; break; }
    }
    if (!ver) return null;
    var e = EC[ver], total = e[1] * e[2] + e[3] * e[4];
    var bs = [];
    bits(4, 4, bs); bits(b.length, ver < 10 ? 8 : 16, bs);
    for (j = 0; j < b.length; j++) bits(b[j], 8, bs);
    for (j = 0; j < 4 && bs.length < total * 8; j++) bs.push(0);
    while (bs.length % 8) bs.push(0);
    var dc = [];
    for (j = 0; j < bs.length; j += 8) { var n = 0; for (var k = 0; k < 8; k++) n = (n << 1) | bs[j + k]; dc.push(n); }
    for (j = 0; dc.length < total; j++) dc.push(j % 2 ? 17 : 236);
    /* découpage en blocs + correction d'erreur */
    var blocks = [], ecs = [], p = 0;
    for (j = 0; j < e[1]; j++) { var d = dc.slice(p, p + e[2]); p += e[2]; blocks.push(d); ecs.push(rsEnc(d, e[0])); }
    for (j = 0; j < e[3]; j++) { var d2 = dc.slice(p, p + e[4]); p += e[4]; blocks.push(d2); ecs.push(rsEnc(d2, e[0])); }
    var out = [], maxD = Math.max(e[2], e[4]);
    for (j = 0; j < maxD; j++) for (k = 0; k < blocks.length; k++) if (j < blocks[k].length) out.push(blocks[k][j]);
    for (j = 0; j < e[0]; j++) for (k = 0; k < ecs.length; k++) out.push(ecs[k][j]);

    /* trame */
    var N = ver * 4 + 17, m = [], fn = [];
    for (j = 0; j < N; j++) { m.push(new Array(N).fill(0)); fn.push(new Array(N).fill(0)); }
    var put = function (r, c, val) { if (r >= 0 && r < N && c >= 0 && c < N) { m[r][c] = val; fn[r][c] = 1; } };
    var finder = function (r, c) {
      for (var dr = -1; dr <= 7; dr++) for (var dc2 = -1; dc2 <= 7; dc2++) {
        var v2 = (dr >= 0 && dr <= 6 && dc2 >= 0 && dc2 <= 6) &&
          (dr === 0 || dr === 6 || dc2 === 0 || dc2 === 6 || (dr >= 2 && dr <= 4 && dc2 >= 2 && dc2 <= 4)) ? 1 : 0;
        put(r + dr, c + dc2, v2);
      }
    };
    finder(0, 0); finder(0, N - 7); finder(N - 7, 0);
    for (j = 8; j < N - 8; j++) { put(6, j, j % 2 === 0 ? 1 : 0); put(j, 6, j % 2 === 0 ? 1 : 0); }
    var al = ALIGN[ver];
    for (j = 0; j < al.length; j++) for (k = 0; k < al.length; k++) {
      var r0 = al[j], c0 = al[k];
      if ((r0 < 8 && c0 < 8) || (r0 < 8 && c0 > N - 9) || (r0 > N - 9 && c0 < 8)) continue;
      for (var dr2 = -2; dr2 <= 2; dr2++) for (var dc3 = -2; dc3 <= 2; dc3++)
        put(r0 + dr2, c0 + dc3, (Math.abs(dr2) === 2 || Math.abs(dc3) === 2 || (dr2 === 0 && dc3 === 0)) ? 1 : 0);
    }
    put(N - 8, 8, 1);
    for (j = 0; j < 15; j++) { /* emplacements du format, remplis plus tard */
      if (j < 6) { fn[8][j] = 1; fn[j][8] = 1; }
      else if (j === 6) { fn[8][7] = 1; fn[7][8] = 1; }
      else if (j === 7) { fn[8][8] = 1; fn[8][N - 8] = 1; }
      else { fn[8][N - 15 + j] = 1; fn[N - 15 + j][8] = 1; }
    }
    fn[8][8] = 1;
    for (j = 0; j < 8; j++) { fn[8][j] = 1; fn[j][8] = 1; fn[8][N - 1 - j] = 1; fn[N - 1 - j][8] = 1; }
    if (ver >= 7) {
      var vi = (ver << 12) | bch(ver, 0x1F25, 12);
      for (j = 0; j < 18; j++) {
        var bit = (vi >> j) & 1, a = Math.floor(j / 3), bb = j % 3;
        put(N - 11 + bb, a, bit); put(a, N - 11 + bb, bit);
      }
    }
    /* données en zigzag */
    var idx = 0, bitIdx = 0, up = true;
    for (var col = N - 1; col >= 0; col -= 2) {
      if (col === 6) col--;
      for (var t = 0; t < N; t++) {
        var row = up ? N - 1 - t : t;
        for (var s = 0; s < 2; s++) {
          var cc = col - s;
          if (fn[row][cc]) continue;
          var bv = idx < out.length ? (out[idx] >> (7 - bitIdx)) & 1 : 0;
          m[row][cc] = bv;
          if (++bitIdx === 8) { bitIdx = 0; idx++; }
        }
      }
      up = !up;
    }
    /* masques */
    var MASK = [
      function (r, c) { return (r + c) % 2 === 0; },
      function (r) { return r % 2 === 0; },
      function (r, c) { return c % 3 === 0; },
      function (r, c) { return (r + c) % 3 === 0; },
      function (r, c) { return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; },
      function (r, c) { return (r * c) % 2 + (r * c) % 3 === 0; },
      function (r, c) { return ((r * c) % 2 + (r * c) % 3) % 2 === 0; },
      function (r, c) { return ((r + c) % 2 + (r * c) % 3) % 2 === 0; }
    ];
    var penalty = function (g) {
      var s = 0, r, c, run, i2;
      for (r = 0; r < N; r++) { run = 1; for (c = 1; c < N; c++) { if (g[r][c] === g[r][c - 1]) run++; else { if (run >= 5) s += run - 2; run = 1; } } if (run >= 5) s += run - 2; }
      for (c = 0; c < N; c++) { run = 1; for (r = 1; r < N; r++) { if (g[r][c] === g[r - 1][c]) run++; else { if (run >= 5) s += run - 2; run = 1; } } if (run >= 5) s += run - 2; }
      for (r = 0; r < N - 1; r++) for (c = 0; c < N - 1; c++) if (g[r][c] === g[r][c + 1] && g[r][c] === g[r + 1][c] && g[r][c] === g[r + 1][c + 1]) s += 3;
      var pat1 = [1,0,1,1,1,0,1,0,0,0,0], pat2 = [0,0,0,0,1,0,1,1,1,0,1];
      var chk = function (arr) {
        for (i2 = 0; i2 + 11 <= arr.length; i2++) {
          var a1 = true, a2 = true;
          for (var z = 0; z < 11; z++) { if (arr[i2 + z] !== pat1[z]) a1 = false; if (arr[i2 + z] !== pat2[z]) a2 = false; }
          if (a1 || a2) s += 40;
        }
      };
      for (r = 0; r < N; r++) chk(g[r]);
      for (c = 0; c < N; c++) { var colArr = []; for (r = 0; r < N; r++) colArr.push(g[r][c]); chk(colArr); }
      var dark = 0;
      for (r = 0; r < N; r++) for (c = 0; c < N; c++) dark += g[r][c];
      s += Math.floor(Math.abs(dark * 100 / (N * N) - 50) / 5) * 10;
      return s;
    };
    var best = null, bestS = Infinity, bestM = 0;
    for (var mk = 0; mk < 8; mk++) {
      var g2 = [];
      for (r = 0; r < N; r++) g2.push(m[r].slice());
      for (var r = 0; r < N; r++) for (var c2 = 0; c2 < N; c2++) if (!fn[r][c2] && MASK[mk](r, c2)) g2[r][c2] ^= 1;
      var fmt = ((0 << 3) | mk);
      var fb = ((fmt << 10) | bch(fmt, 0x537, 10)) ^ 0x5412;
      for (j = 0; j < 15; j++) {
        var bit2 = (fb >> j) & 1;
        if (j < 6) g2[j][8] = bit2;
        else if (j === 6) g2[7][8] = bit2;
        else if (j === 7) g2[8][8] = bit2;
        else if (j === 8) g2[8][7] = bit2;
        else g2[8][14 - j] = bit2;
        if (j < 8) g2[8][N - 1 - j] = bit2;
        else g2[N - 15 + j][8] = bit2;
      }
      g2[N - 8][8] = 1;
      var sc = penalty(g2);
      if (sc < bestS) { bestS = sc; best = g2; bestM = mk; }
    }
    return best;
  };
})();

const qrSvg = (text, px) => {
  let m;
  try { m = QR(text); } catch (e) { m = null; }
  if (!m) return '';
  const n = m.length, q = 2, sz = n + q * 2;
  let d = '';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (m[r][c]) d += 'M' + (c + q) + ' ' + (r + q) + 'h1v1h-1z';
  return `<svg class="qrc" viewBox="0 0 ${sz} ${sz}" width="${px}" height="${px}" shape-rendering="crispEdges" aria-hidden="true"><rect width="${sz}" height="${sz}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
};
/* Virement SEPA pré-rempli (norme EPC069-12), lisible par les applis bancaires */
const epc = (amount, comm) => {
  const iban = String(getCfg('bankIban')).replace(/\s/g, '').toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(iban)) return '';
  const a = +amount;
  if (!(a >= 0.01 && a <= 999999999.99)) return '';
  const cl = t => String(t || '').replace(/[\n\r]/g, ' ').trim();
  return ['BCD', '002', '1', 'SCT', cl(getCfg('bankBic')).replace(/\s/g, '').toUpperCase(),
    cl(getCfg('bankHolder') || getCfg('title')).slice(0, 70), iban, 'EUR' + a.toFixed(2),
    '', '', cl(comm).slice(0, 140)].join('\n');
};

const $ = s => document.querySelector(s);
const eur = n => (+n).toFixed(2).replace('.', ',') + ' €';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const cssu = u => String(u || '').replace(/["'()\\]/g, c => '%' + c.charCodeAt(0).toString(16));
const fk = s => String(s).replace(/[.#$\/\[\]]/g, '_');
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/* Empreinte du code d'accès : le code n'apparaît plus jamais en clair dans le site */
function sha256(str) {
  const K = [], H = [], fr = x => ((x - Math.floor(x)) * 4294967296) | 0;
  for (let n = 2, i = 0; i < 64; n++) {
    let pr = true;
    for (let d = 2; d * d <= n; d++) if (n % d === 0) { pr = false; break; }
    if (pr) { if (i < 8) H[i] = fr(Math.pow(n, .5)); K[i++] = fr(Math.pow(n, 1 / 3)); }
  }
  const b = [...new TextEncoder().encode(str)], l = b.length * 8, r = (x, n) => (x >>> n) | (x << (32 - n)), w = [];
  b.push(128);
  while (b.length % 64 !== 56) b.push(0);
  for (let j = 7; j >= 0; j--) b.push(j > 3 ? 0 : (l >>> (j * 8)) & 255);
  for (let o = 0; o < b.length; o += 64) {
    for (let j = 0; j < 16; j++) w[j] = (b[o + j * 4] << 24) | (b[o + j * 4 + 1] << 16) | (b[o + j * 4 + 2] << 8) | b[o + j * 4 + 3];
    for (let j = 16; j < 64; j++) {
      const x = w[j - 15], y = w[j - 2];
      w[j] = (w[j - 16] + (r(x, 7) ^ r(x, 18) ^ (x >>> 3)) + w[j - 7] + (r(y, 17) ^ r(y, 19) ^ (y >>> 10))) | 0;
    }
    let [a, c, d, e, f, g, h, k] = H;
    for (let j = 0; j < 64; j++) {
      const t1 = (k + (r(f, 6) ^ r(f, 11) ^ r(f, 25)) + ((f & g) ^ (~f & h)) + K[j] + w[j]) | 0;
      const t2 = ((r(a, 2) ^ r(a, 13) ^ r(a, 22)) + ((a & c) ^ (a & d) ^ (c & d))) | 0;
      k = h; h = g; g = f; f = (e + t1) | 0; e = d; d = c; c = a; a = (t1 + t2) | 0;
    }
    [a, c, d, e, f, g, h, k].forEach((v, j) => H[j] = (H[j] + v) | 0);
  }
  return H.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('');
}
const pinHash = p => sha256('hf|' + String(p).trim());
const checkPin = p => {
  const c = CF.cfg || {};
  if (c.PINH) return pinHash(p) === c.PINH;
  if (c.PIN) return String(p).trim() === String(c.PIN);
  return pinHash(p) === DEFAULT_CFG.PINH;
};

let I = {}, cats = [], base = {};

function parseMenu() {
  I = {}; cats = []; base = {};
  const rawD = CF.customD || DEFAULT_D;
  rawD.split('\n').filter(Boolean).forEach((ln, ci) => {
    const [n, e, pre, items] = ln.split('|');
    if (items === undefined) return;
    const co = (CF.cat && CF.cat[ci]) || {};
    const c = { i: ci, n: n.trim(), l: co.l || n.trim(), e: (co.e || e || '🍽️').trim(), pre: (pre || '').trim(), hide: !!co.hide, d: co.d || '', items: [] };
    items.split(';').filter(Boolean).forEach((t, j) => {
      const m = t.trim().match(/^(.*) (\d*\.?\d+)$/);
      if (!m) return;
      const id = ci + '-' + j;
      const origN = m[1].trim(), origP = +m[2];
      base[id] = { n: origN, p: origP, cat: c.n };
      const ov = (CF.ov && CF.ov[id]) || {};
      if (ov.del) return;
      const it = {
        id,
        n: ov.n !== undefined && ov.n !== '' ? ov.n : origN,
        p: ov.p !== undefined && ov.p !== '' ? +ov.p : origP,
        out: !!ov.out,
        d: ov.d || '',
        a: ov.a || '',
        g: ov.g || '',
        cat: c.n,
        pre: c.pre,
        e: c.e
      };
      I[it.id] = it;
      c.items.push(it);
    });
    if (CF.added && CF.added[c.n]) {
      CF.added[c.n].forEach((ad, aj) => {
        if (!ad || ad.del) return;
        const id = 'add-' + ci + '-' + aj;
        base[id] = { n: ad.n, p: +ad.p, cat: c.n };
        const it = { id, n: ad.n, p: +ad.p, out: !!ad.out, d: ad.d || '', a: ad.a || '', g: ad.g || '', cat: c.n, pre: c.pre, e: c.e, isAdded: true, addIdx: aj };
        I[id] = it;
        c.items.push(it);
      });
    }
    cats.push(c);
  });
}
parseMenu();

const PH = window.PH || { d: {}, s: {}, p: {}, u: {}, b: {}, c: {}, o: {} };
const IMG = it => {
  const PH = window.PH || { d: {}, s: {}, p: {}, u: {}, b: {}, c: {}, o: {} };
  const bKey = it.cat + '|' + (base[it.id] ? base[it.id].n : it.n);
  const cKey = it.cat + '|' + it.n;
  if (CF.ph) {
    const cu = CF.ph[it.id] || CF.ph[fk(cKey)] || CF.ph[cKey] || CF.ph[fk(bKey)] || CF.ph[bKey];
    if (cu) return cu;
  }
  const m = (({ 'Dürüms': PH.d, 'Sandwichs': PH.s, 'Panini': PH.p, 'Sauces': PH.u, 'Boissons': PH.b })[it.cat]) || (PH.c && typeof PH.c[it.cat] === 'object' ? PH.c[it.cat] : {}) || {};
  const specific = m[it.n] || m[it.n.replace(/\s*\(.*\)$/, '').trim()];
  if (specific) return specific;
  if (PH.c && typeof PH.c[it.cat] === 'string' && PH.c[it.cat]) return PH.c[it.cat];
  return '';
};
const th = (it, extra) => {
  const u = IMG(it), x = extra || '';
  return u ? `<i class="ph"${bg(u)}>${x}</i>` : `<i class="ph">${it.e}${x}</i>`;
};
/* ---- Chargement paresseux des photos ----
   Les photos ne sont téléchargées qu'au moment où elles approchent de l'écran.
   Chaque élément porte data-bg ; l'observateur pose le fond puis l'oublie. */
const LZOK = new Set();
const bgOn = el => {
  const u = el.getAttribute('data-bg');
  if (!u) return;
  const put = () => {
    el.removeAttribute('data-bg');
    el.style.backgroundImage = "url('" + cssu(u) + "')";
    el.classList.add('lzon');
  };
  /* photo déjà vue : posée tout de suite, sans fondu (pas de clignotement) */
  if (LZOK.has(u)) { put(); return; }
  const im = new Image();
  const done = () => { LZOK.add(u); put(); };
  im.onload = () => (im.decode ? im.decode().catch(() => {}).then(done) : done());
  im.onerror = put;
  im.src = u;
};
const LZ = (() => {
  /* les diapos de la bannière sont empilées : elles se chargent à leur tour, pas ici */
  const skip = el => el.classList.contains('bi') && el.closest('.bs:not(.on)');
  if (!('IntersectionObserver' in window)) return { scan: r => (r || document).querySelectorAll('[data-bg]').forEach(el => skip(el) || bgOn(el)) };
  const io = new IntersectionObserver((es) => es.forEach(e => {
    if (e.isIntersecting) { bgOn(e.target); io.unobserve(e.target); }
  }), { rootMargin: '1200px 400px' });
  return { scan: r => (r || document).querySelectorAll('[data-bg]').forEach(el => skip(el) || io.observe(el)) };
})();
/* fond de photo à poser plus tard ; eager=1 pour les photos tout de suite visibles */
/* version HD d'une photo (agrandie ×4 par IA, jusqu'à 1920 px) pour les grandes vues */
const HDU = u => /^photos\/[^/]+\.webp$/.test(u || '') ? 'photos/hd/' + u.slice(7) : u;
const BIGSCR = () => (innerWidth * (devicePixelRatio || 1)) >= 1400;
const bg = (u, eager) => u ? ((eager || LZOK.has(u)) ? ` style="background-image:url('${cssu(u)}')" class="lzon"` : ` data-bg="${esc(u)}"`) : '';
/* les cadres lumineux ne tournent que pour les plats à l'écran (moins de travail pour le téléphone) */
const VIS = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('vis', e.isIntersecting)), { rootMargin: '100px 0px' }) : null;
const visScan = r => VIS && (r || document).querySelectorAll('.it:not([data-vo]),.gc:not([data-vo])').forEach(x => { x.setAttribute('data-vo', ''); VIS.observe(x); });
addEventListener('DOMContentLoaded', () => {
  if (st('hfpv')) document.body.classList.add('pvseen');
  LZ.scan(); visScan();
  try {
    new MutationObserver(ms => {
      let n = 0;
      ms.forEach(m => m.addedNodes.forEach(x => { if (x.nodeType === 1) n++; }));
      if (n) { LZ.scan(); visScan(); }
    }).observe(document.body, { childList: true, subtree: true });
  } catch (e) {}
});

const getSAU = () => {
  const sc = cats.find(c => c.n === 'Sauces');
  return sc ? sc.items.filter(i => !i.out).map(i => i.n) : [];
};
/* ---- Suppléments payants proposés pendant la composition d'un plat ---- */
const supNo = () => String(getCfg('supNo')).split(',').map(x => norm(x.trim())).filter(Boolean);
const getSUP = () => {
  const sc = cats.find(c => norm(c.n) === norm(getCfg('supCat')));
  if (!sc) return [];
  const no = supNo();
  return sc.items.filter(i => !i.out && !no.includes(norm(i.n))).map(i => ({ n: i.n, p: +i.p || 0, it: i }));
};
const supP = n => { const f = getSUP().find(x => norm(x.n) === norm(n)); return f ? f.p : 0; };
const supTot = a => (a || []).reduce((s, n) => s + supP(n), 0);

/* ---- Allergènes ----
   Arrêté royal du 17 juillet 2014 : l'information doit toujours être disponible
   pour le client, par écrit ou oralement. Par défaut le site affiche la mention
   « demandez-nous » ; dès qu'un plat reçoit des allergènes dans l'admin, ils sont
   affichés sur sa fiche. */
const ALG14 = ['Gluten', 'Crustacés', 'Œufs', 'Poissons', 'Arachides', 'Soja', 'Lait', 'Fruits à coque', 'Céleri', 'Moutarde', 'Sésame', 'Sulfites', 'Lupin', 'Mollusques'];
/* Suggestions de départ, à vérifier et corriger par le restaurant */
/* Allergènes probables, déduits des recettes habituelles : le support
   (pain, panure) plus la garniture. À VÉRIFIER par le restaurant avec
   ses propres recettes et les étiquettes de ses fournisseurs. */
const ALG_CAT = {"Dürüms":"Gluten","Sandwichs":"Gluten","Panini":"Gluten,Lait","Tacos":"Gluten,Lait","Kapsalon":"Lait","Menus":"Gluten","Bicky":"Gluten,Sésame,Œufs,Moutarde","Assiettes":"","Grillades":"","Salades":"Moutarde,Sulfites","Spécialités":"","Frites & plus":"","Suppléments":"","Boissons":"","Desserts":"","Sauces":""};
const ALG_ING = {"Chawarma":"","Viande":"","Viande au choix":"","Poulet":"","Dinde":"","Merguez":"","Foie":"","Kebda":"","Brochettes":"","Kefta":"Gluten,Œufs","Hamburger":"Gluten,Œufs","Poulet pané":"Gluten,Œufs,Lait","Tenders":"Gluten,Œufs,Lait","Fallafels":"Gluten,Sésame","Falafels":"Gluten,Sésame","Poisson":"Poissons,Gluten,Œufs","Fish":"Poissons,Gluten,Œufs","Mixte":"Gluten,Œufs","Pita":"Gluten,Sésame","Bicky":"Gluten,Sésame,Œufs,Moutarde","Meze maison":"Sésame,Gluten","Grillade maison":"","Feta":"Lait","Cheddar":"Lait","Extra sauce":"Œufs,Moutarde","Côte d’agneau":"","Caprice":"","Maison":""};
const ALG_SOLO = {"Menus|Menu enfant":"Gluten","Grillades|Grillade (shawarma, poulet)":"","Grillades|Grillade maison (merguez, shawarma, poulet)":"","Grillades|Grillade du chef (kefta, shawarma, brochettes)":"Gluten,Œufs","Grillades|Grillade pacha (kefta, shawarma, poulet, brochettes)":"Gluten,Œufs","Salades|Caprice":"Moutarde,Sulfites","Salades|Mixte":"Moutarde,Sulfites","Salades|Maison":"Moutarde,Sulfites","Salades|Poulet":"Moutarde,Sulfites","Salades|Viande au choix":"Moutarde,Sulfites","Spécialités|Tajine kefta":"Gluten,Œufs","Spécialités|Tajine poulet légumes":"Céleri","Spécialités|Tajine poulet citron olives":"Céleri","Spécialités|Tajine agneau pruneaux":"Fruits à coque","Spécialités|Couscous viande au choix":"Gluten,Céleri","Frites & plus|Frites petite":"","Frites & plus|Frites moyenne":"","Frites & plus|Frites grande":"","Frites & plus|Ailes de poulet":"","Frites & plus|Bouchettes viande":"Gluten,Œufs,Lait,Moutarde","Frites & plus|Poulycroc":"Gluten,Œufs,Lait","Frites & plus|Boulettes":"Gluten,Œufs,Lait,Moutarde","Frites & plus|Fricadelles":"Gluten,Œufs,Lait,Moutarde,Soja","Boissons|Café au lait":"Lait","Boissons|Thé à la menthe 1 pers.":"","Boissons|Thé à la menthe 2 pers.":"","Boissons|Thé à la menthe 5 pers.":"","Boissons|Café noir":"","Boissons|Redbull":"","Boissons|Freez":"","Boissons|Softs 0,33 L":"","Boissons|Caprisun":"","Desserts|Dame blanche":"Lait,Œufs,Soja","Desserts|Pâtisserie marocaine":"Fruits à coque,Gluten,Œufs,Sésame","Desserts|Tiramisu maison":"Lait,Œufs,Gluten"};
const ALG_SAU = {"Mayonnaise":"Œufs,Moutarde","Ketchup":"","Andalouse":"Œufs,Moutarde","Algérienne":"Œufs,Moutarde","Samouraï":"Œufs,Moutarde","Blanche":"Œufs","Harissa":"","Américaine":"Œufs,Moutarde,Céleri","Brazil":"Œufs,Moutarde","Bicky":"Œufs,Moutarde","Mammouth":"Œufs,Moutarde","Tartare":"Œufs,Moutarde","Cocktail":"Œufs,Moutarde","Curry ketchup":"Céleri,Moutarde","Sauce à l’ail":"Œufs,Moutarde","Barbecue":"Moutarde,Céleri,Sulfites","Moutarde":"Moutarde,Sulfites","Piquante":"Sulfites","Pili-pili":"","Sweet chili":"","Pita":"Lait,Œufs,Moutarde"};
const algSplit = t => String(t || '').split(',').map(x => x.trim()).filter(Boolean);
const algOf = it => String((it && it.a) || '').trim();
const algSug = it => {
  if (!it) return '';
  const n = (base[it.id] && base[it.id].n) || it.n, k = it.cat + '|' + n;
  const a = new Set();
  if (it.cat === 'Sauces') algSplit(ALG_SAU[n] || ALG_SAU[n.replace(/^Sauce /i, '')]).forEach(x => a.add(x));
  else if (ALG_SOLO[k] !== undefined) algSplit(ALG_SOLO[k]).forEach(x => a.add(x));
  else {
    algSplit(ALG_CAT[it.cat]).forEach(x => a.add(x));
    algSplit(ALG_ING[n]).forEach(x => a.add(x));
  }
  return [...a].join(', ');
};
/* Allergènes affichés : ceux saisis dans l'admin, sinon les probables */
const algShow = it => algOf(it) || algSug(it);
const algLine = () => String(getCfg('algOn')) === '0' ? '' : String(getCfg('algNote') || '');

/* ---- Goût des sauces ----
   [force, texte] — force 0 douce, 1 peu relevée, 2 relevée, 3 très piquante.
   Le texte saisi dans l'admin remplace celui-ci. */
const SAU_GOUT = {"Mayonnaise":[0,"Douce"],"Ketchup":[0,"Douce et sucrée"],"Andalouse":[0,"Douce"],"Algérienne":[2,"Relevée"],"Samouraï":[3,"Très piquante"],"Blanche":[0,"Douce"],"Harissa":[3,"Très piquante"],"Américaine":[0,"Douce et acidulée"],"Brazil":[0,"Douce et fruitée"],"Bicky":[1,"Acidulée"],"Mammouth":[2,"Relevée"],"Tartare":[0,"Acidulée"],"Cocktail":[0,"Douce et sucrée"],"Curry ketchup":[1,"Douce et épicée"],"Sauce à l’ail":[0,"Douce, à l’ail"],"Barbecue":[0,"Fumée et sucrée"],"Moutarde":[2,"Piquante"],"Piquante":[2,"Piquante"],"Pili-pili":[3,"Très piquante"],"Sweet chili":[1,"Sucrée et piquante"],"Pita":[0,"Douce, aux herbes"]};
const goutOf = it => {
  if (!it) return null;
  if (it.g) { const m = String(it.g).match(/^([0-3])\s*[|:]\s*(.+)$/); return m ? [+m[1], m[2].trim()] : [0, String(it.g).trim()]; }
  const n = (base[it.id] && base[it.id].n) || it.n;
  return SAU_GOUT[n] || SAU_GOUT[n.replace(/^Sauce /i, '')] || null;
};
/* même chose à partir du seul nom, pour les boutons de l'étape « Sauces » */
const goutN = n => {
  const it = Object.values(I).find(x => x.cat === 'Sauces' && x.n === n);
  return it ? goutOf(it) : (SAU_GOUT[n] || null);
};
const hot = h => h > 0 ? '🌶️'.repeat(Math.min(3, h)) + ' ' : '';
const goutTxt = g => g ? hot(g[0]) + g[1] : '';

/* ---- Descriptions des plats ----
   Un texte est composé à partir de la garniture (DESC_ING) et du support (DESC_CAT) ;
   certains plats ont leur propre texte (DESC_SOLO). La description saisie dans
   l'admin remplace toujours celle-ci. */
const DESC_ING = {"Chawarma": "d’émincé de viande marinée grillée à la broche", "Kefta": "de kefta de bœuf haché aux épices, grillée minute", "Hamburger": "d’un steak haché grillé", "Poulet": "d’émincé de poulet mariné et grillé", "Poulet pané": "de filets de poulet panés et croustillants", "Merguez": "de merguez grillées", "Fallafels": "de falafels de pois chiches frits", "Falafels": "de falafels de pois chiches frits", "Foie": "de foie de bœuf poêlé aux épices", "Kebda": "de foie de bœuf poêlé aux épices", "Viande": "de viande de bœuf au choix, grillée minute", "Viande au choix": "de viande de bœuf au choix, grillée minute", "Poisson": "de filet de poisson pané et frit", "Fish": "de filet de poisson pané et frit", "Dinde": "d’émincé de dinde mariné et grillé", "Tenders": "de tenders de poulet panés, croustillants et moelleux", "Mixte": "d’un mélange de nos viandes grillées", "Pita": "de viande pita à la broche", "Bicky": "d’un burger Bicky, sauce et oignons croquants", "Brochettes": "de brochettes de viande grillées à la braise", "Meze maison": "d’un assortiment de mezze préparés maison", "Grillade maison": "d’un assortiment de merguez, shawarma et poulet grillés", "Côte d’agneau": "de côtes d’agneau grillées", "Feta": "de feta émiettée", "Cheddar": "de cheddar fondu", "Extra sauce": "d’une portion de sauce supplémentaire"};
const DESC_CAT = {"Dürüms": "Galette dürüm chaude garnie {}, crudités fraîches et sauce au choix.", "Sandwichs": "Pain frais garni {}, crudités fraîches et sauce au choix.", "Panini": "Panini pressé et doré, garni {}, crudités et sauce au choix.", "Tacos": "Tacos français roulé et pressé, garni {}, frites, sauce fromagère et sauce au choix.", "Kapsalon": "Barquette de frites maison recouverte {}, de fromage fondu, de crudités et de sauce au choix.", "Menus": "Formule complète : votre dürüm ou sandwich garni {}, accompagné de frites et d’une boisson.", "Bicky": "Le Bicky classique garni {}, avec sa sauce, ses oignons et ses pickles croquants.", "Assiettes": "Assiette généreuse {}, servie avec salade composée, frites et sauces.", "Salades": "Salade fraîche composée {}, servie avec notre vinaigrette maison.", "Suppléments": "Supplément {} à ajouter à votre plat."};
const DESC_SOLO = {"Menus|Menu enfant": "Portion adaptée aux enfants : une petite viande au choix, des frites et une boisson.", "Grillades|Grillade (shawarma, poulet)": "Shawarma et poulet grillés à la braise, servis avec salade composée, frites et sauces.", "Grillades|Grillade maison (merguez, shawarma, poulet)": "Merguez, shawarma et poulet grillés à la braise, servis avec salade composée, frites et sauces.", "Grillades|Grillade du chef (kefta, shawarma, brochettes)": "Kefta, shawarma et brochettes grillés à la braise, servis avec salade composée, frites et sauces.", "Grillades|Grillade pacha (kefta, shawarma, poulet, brochettes)": "Notre plus grand assortiment : kefta, shawarma, poulet et brochettes grillés à la braise, avec salade composée, frites et sauces.", "Salades|Caprice": "Salade fraîche de saison, légère et croquante.", "Salades|Mixte": "Assortiment de crudités fraîches de saison.", "Salades|Maison": "Notre salade composée du moment, préparée chaque jour.", "Spécialités|Tajine kefta": "Tajine mijoté de boulettes de bœuf aux épices, sauce tomate relevée et œuf.", "Spécialités|Tajine poulet légumes": "Poulet mijoté lentement avec ses légumes de saison et ses épices douces.", "Spécialités|Tajine poulet citron olives": "Le classique marocain : poulet mijoté au citron confit et aux olives.", "Spécialités|Tajine agneau pruneaux": "Agneau fondant mijoté aux pruneaux et aux amandes, parfumé à la cannelle.", "Spécialités|Couscous viande au choix": "Semoule roulée, bouillon de légumes et viande au choix.", "Frites & plus|Frites petite": "Petite portion de frites fraîches, croustillantes dehors et fondantes dedans.", "Frites & plus|Frites moyenne": "Portion moyenne de frites fraîches, croustillantes dehors et fondantes dedans.", "Frites & plus|Frites grande": "Grande portion de frites fraîches, croustillantes dehors et fondantes dedans.", "Frites & plus|Ailes de poulet": "Ailes de poulet marinées et grillées, dorées et juteuses.", "Frites & plus|Bouchettes viande": "Brochettes de viande grillées, à partager ou pour soi.", "Frites & plus|Poulycroc": "Beignet de poulet pané, croustillant et doré.", "Frites & plus|Boulettes": "Boulette de viande frite, un classique de la friterie.", "Frites & plus|Fricadelles": "Fricadelle dorée à la friture, un incontournable belge.", "Boissons|Thé à la menthe 1 pers.": "Thé vert à la menthe fraîche, servi bien chaud dans sa théière.", "Boissons|Thé à la menthe 2 pers.": "Théière de thé vert à la menthe fraîche pour deux personnes.", "Boissons|Thé à la menthe 5 pers.": "Grande théière de thé vert à la menthe fraîche, à partager.", "Boissons|Café noir": "Café serré, fraîchement préparé.", "Boissons|Café au lait": "Café allongé de lait chaud.", "Boissons|Redbull": "Canette de boisson énergisante bien fraîche.", "Boissons|Freez": "Boisson glacée et rafraîchissante.", "Boissons|Softs 0,33 L": "Canette de 33 cl au choix parmi nos softs.", "Boissons|Caprisun": "Poche de jus de fruits, format enfant.", "Desserts|Dame blanche": "Glace vanille nappée de chocolat chaud et de crème fouettée.", "Desserts|Pâtisserie marocaine": "Pâtisserie marocaine aux amandes et au miel.", "Desserts|Tiramisu maison": "Tiramisu préparé maison, mascarpone et café."};
const autoDesc = it => {
  if (!it) return '';
  const n = (base[it.id] && base[it.id].n) || it.n, k = it.cat + '|' + n;
  if (DESC_SOLO[k]) return DESC_SOLO[k];
  if (it.cat === 'Sauces') {
    const g = goutOf(it);
    return 'Sauce ' + n.replace(/^Sauce /i, '').toLowerCase() + (g ? ', ' + g[1].toLowerCase() : '') + ', servie en portion individuelle.';
  }
  const c = DESC_CAT[it.cat], g = DESC_ING[n];
  return c && g ? c.replace('{}', g) : '';
};
const descOf = it => it.d || autoDesc(it) || ((cats.find(c => c.n === it.cat) || {}).d) || '';

let L = [], mode = 'Sur place', nom = '', ed = null, pay = '', when = '', gnote = '';
const st = (k, v) => {
  try {
    if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null');
    localStorage.setItem(k, JSON.stringify(v));
  } catch (e) { return null; }
};
L = (st('hfl') || []).filter(l => I[l.id]);

const full = i => i.pre && !i.n.toLowerCase().startsWith(i.pre.toLowerCase()) ? i.pre + ' ' + i.n : i.n;
const mTypes = () => String(getCfg('mTypes')).split(',').map(x => x.trim()).filter(Boolean);
const mTypeNo = () => String(getCfg('mTypeNo')).split(',').map(x => x.trim()).filter(Boolean);
const opt = i => {
  let o = ((CF.opt && CF.opt[i.cat] !== undefined) ? CF.opt[i.cat] : (DEFAULT_OPT[i.cat] || '')).replace(/t/g, '');
  if (i.n && mTypes().length > 1 && norm(i.cat || '') === norm(getCfg('mTypeCat'))
      && !mTypeNo().some(x => norm(i.n).startsWith(norm(x)))) o = 't' + o;
  return o;
};
const unit = l => {
  const it = I[l.id];
  if (!it) return 0;
  const v = l.v && vrs(it).find(z => z.n === l.v);
  return (v ? vprice(it, v) : it.p) + (l.b && !/^menus?$/i.test(norm(it.cat || '')) ? getDP() : 0) + supTot(l.x);
};
const lineN = l => I[l.id] ? full(I[l.id]) + (l.v ? ' · ' + l.v : '') : '';
const cnt = () => L.reduce((n, l) => n + l.q, 0);
const tot = () => L.reduce((s, l) => s + unit(l) * l.q, 0);
const dsc = l => {
  const CRU = getCRU();
  return [
    l.t && 'Formule : ' + l.t,
    l.r && l.r.length ? 'Garniture : ' + (isAllCru(l.r) ? 'toutes les crudités' : l.r.join(', ')) : l.no && l.no.r && 'Garniture : sans crudités',
    l.s && l.s.length ? 'Sauces : ' + l.s.join(', ') : l.no && l.no.s && 'Sauces : sans sauce',
    l.x && l.x.length && 'Suppléments : ' + l.x.map(n => n + ' (+' + eur(supP(n)) + ')').join(', '),
    l.b && 'Boisson : ' + l.b,
    l.nt && 'Remarque : ' + l.nt
  ].filter(Boolean);
};
const toast = m => {
  const t = $('#ts');
  if (!t) return;
  t.textContent = m;
  t.style.display = 'block';
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.style.display = 'none', 2400);
};

/* ---- Application visuelle de tous les réglages du site ---- */
function applySiteSettings() {
  document.documentElement.style.setProperty('--bg', getCfg('bgCol'));
  document.documentElement.style.setProperty('--card', getCfg('cardCol'));
  document.documentElement.style.setProperty('--gold', getCfg('goldCol'));

  const logoEl = $('.hero .logo');
  if (logoEl && getCfg('logoUrl')) logoEl.src = getCfg('logoUrl');

  const h1 = $('.hero h1');
  if (h1) { h1.textContent = getCfg('title'); h1.dataset.t = getCfg('title'); }
  document.title = getCfg('title') + ' · Commande';

  const hp = $('.hero > p');
  if (hp) hp.textContent = T(getCfg('sub'));

  const pr = $('.hero .pr');
  if (pr) {
    const bList = String(getCfg('badges')).split(',').map(s => s.trim()).filter(Boolean);
    pr.innerHTML = bList.map(b => `<span>${esc(T(b))}</span>`).join('');
  }

  let opEl = $('#op');
  if (!opEl && $('.hero')) {
    opEl = document.createElement('div');
    opEl.id = 'op';
    $('.hero').insertBefore(opEl, $('.hero .pr'));
  }
  if (opEl) {
    const o = openNow();
    opEl.className = o.open ? 'on' : '';
    opEl.textContent = o.open ? T(getCfg('openText')) : closedTxt(o);
  }

  /* Bandeau « fermé » bien visible, collé en haut tant que le site est fermé */
  const oNow = openNow();
  let cb = $('#cbar');
  if (!cb) {
    cb = document.createElement('div');
    cb.id = 'cbar';
    document.body.insertBefore(cb, document.body.firstChild);
  }
  cb.hidden = oNow.open;
  document.body.classList.toggle('shut', !oNow.open);
  if (!oNow.open) cb.innerHTML = `<b>${esc(T('Nous sommes fermés'))}</b><span>${esc(oNow.next ? T('Ouvre') + ' ' + (oNow.when ? oNow.when + ' ' : '') + T('à') + ' ' + oNow.next : T('Réouverture bientôt'))} · ${esc(T('Vous pouvez préparer votre commande, l’envoi se fera à la réouverture.'))}</span>`;
  /* la barre des catégories se décale sous le bandeau pour ne pas être cachée */
  const setCbh = () => document.documentElement.style.setProperty('--cbh', (oNow.open ? 0 : cb.offsetHeight) + 'px');
  setCbh();
  requestAnimationFrame(setCbh);
  if (!setCbh.w) { setCbh.w = 1; addEventListener('resize', () => { const c = $('#cbar'); if (c) document.documentElement.style.setProperty('--cbh', (c.hidden ? 0 : c.offsetHeight) + 'px'); }); }

  let lgEl = $('#lg');
  if (!lgEl && $('.hero')) {
    lgEl = document.createElement('div');
    lgEl.id = 'lg';
    $('.hero').appendChild(lgEl);
  }
  if (lgEl) {
    lgEl.innerHTML = ['fr', 'nl', 'en', 'es', 'ar'].map(l => `<button class="${lang === l ? 'on' : ''}" lang="${l}" onclick="setLang('${l}')">${l === 'ar' ? 'عربي' : l.toUpperCase()}</button>`).join('');
  }

  let promoEl = $('#promo');
  if (!promoEl && $('#cl')) {
    promoEl = document.createElement('div');
    promoEl.id = 'promo';
    $('#cl').insertBefore(promoEl, $('.hero'));
  }
  if (promoEl) {
    const ptxt = getCfg('promo');
    promoEl.innerHTML = ptxt ? `<div class="pm"><span>${esc(ptxt)}</span></div>` : '';
  }

  let ctEl = $('#ct-bar');
  if (!ctEl && $('.hero')) {
    ctEl = document.createElement('div');
    ctEl.id = 'ct-bar';
    ctEl.className = 'ct';
    ctEl.style.marginTop = '8px';
    $('.hero').appendChild(ctEl);
  }
  if (ctEl) {
    const btns = [];
    if (getCfg('tel')) btns.push(`<a class="btn g" href="tel:${esc(getCfg('tel'))}">📞 ${esc(T('Appeler'))}</a>`);
    if (getCfg('maps')) btns.push(`<a class="btn g" href="${esc(getCfg('maps'))}" target="_blank" rel="noopener">📍 ${esc(T('Itinéraire'))}</a>`);
    if (getCfg('review')) btns.push(`<a class="btn g" href="${esc(getCfg('review'))}" target="_blank" rel="noopener">⭐ ${esc(T('Donner un avis'))}</a>`);
    if ((st('hflast') || []).some(l => I[l.id] && !I[l.id].out)) btns.push(`<button class="btn g" data-x="re">🔁 ${esc(T('Recommander ma dernière commande'))}</button>`);
    ctEl.innerHTML = btns.join('');
  }

  const galH2 = $('.gal h2');
  if (galH2) galH2.textContent = T(getCfg('galTitle'));

  if (CF.gal && CF.gal.length && $('.gs')) {
    $('.gs').innerHTML = CF.gal.filter(Boolean).map(g => `<div class="gc" role="link" tabindex="0" data-go="${esc(g.go || 'c0')}"${bg(g.img)}><b>${esc(g.title)}</b><small>${esc(g.sub || 'Voir la carte →')}</small></div>`).join('');
  }
  /* textes de la galerie dans la langue choisie (le texte français d'origine est gardé) */
  document.querySelectorAll('.gc b, .gc small').forEach(e => { if (e.dataset.fr == null) e.dataset.fr = e.textContent; e.textContent = T(e.dataset.fr); });
  renderBan();
  renderDelv();

  const heroBg = getCfg('heroBg');
  if (heroBg) {
    $('.hero').style.setProperty('--herop', `url('${cssu(heroBg)}')`);
  } else {
    try {
      const g = $('.gc'), u = g && g.style.backgroundImage;
      if (u) $('.hero').style.setProperty('--herop', u);
    } catch (e) {}
  }

  if ($('#q')) $('#q').placeholder = T('Rechercher un plat…');
  heroBtn();
  const ft = $('.ft');
  if (ft) {
    let fx = ft.querySelector('.ftx');
    if (!fx) {
      [...ft.childNodes].forEach(n => { if (n.nodeType === 3) n.remove(); });
      fx = document.createElement('span');
      fx.className = 'ftx';
      ft.appendChild(fx);
    }
    fx.textContent = getCfg('footer');
    let fh = ft.querySelector('.fth');
    if (!fh) { fh = document.createElement('span'); fh.className = 'fth'; ft.appendChild(fh); }
    fh.textContent = '🕒 ' + hoursTxt();
    /* Mentions légales et allergènes, en bas de page */
    let fl = ft.querySelector('.fml');
    if (!fl) { fl = document.createElement('span'); fl.className = 'fml'; ft.appendChild(fl); }
    const ml = [getCfg('bce') && 'TVA ' + getCfg('bce'), getCfg('tel'), getCfg('mail')].filter(Boolean).join(' · ');
    fl.innerHTML = [ml ? esc(ml) : '', algLine() ? esc(T(algLine())) : ''].filter(Boolean).map(x => '<span>' + x + '</span>').join('');
  }
}

const hoursTxt = () => {
  const hs = String(getCfg('hours')).split(',').map(x => x.trim()), D = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(T), out = [];
  for (let i = 0; i < 7;) {
    let j = i;
    while (j < 6 && (hs[j + 1] || '') === (hs[i] || '')) j++;
    out.push((j > i ? D[i] + '–' + D[j] : D[i]) + ' ' + (hs[i] ? hs[i].replace(/\s*-\s*/g, '–') : T('fermé')));
    i = j + 1;
  }
  return out.join(' · ');
};

/* ---- Horaires : statut « Auto » calculé à l'heure de Bruxelles ---- */
function openNow() {
  const m = getCfg('openStatus');
  if (m === 'closed') return { open: false };
  if (m !== 'auto') return { open: true };
  let d;
  try { d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' })); } catch (e) { d = new Date(); }
  const now = d.getHours() * 60 + d.getMinutes();
  const rg = String(String(getCfg('hours')).split(',')[(d.getDay() + 6) % 7] || '').split('/').map(x => {
    const t = x.trim().match(/^(\d{1,2})[:h.](\d{2})\s*-\s*(\d{1,2})[:h.](\d{2})$/);
    return t ? [+t[1] * 60 + +t[2], +t[3] * 60 + +t[4], t[1].padStart(2, '0') + ':' + t[2]] : null;
  }).filter(Boolean);
  if (rg.some(r => now >= r[0] && now < (r[1] <= r[0] ? r[1] + 1440 : r[1]))) return { open: true };
  const nx = rg.find(r => r[0] > now);
  if (nx) return { open: false, next: nx[2], when: T('aujourd’hui') };
  /* rien d'autre aujourd'hui : on cherche la prochaine ouverture, jusqu'à 7 jours */
  const DJ = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  for (let k = 1; k <= 7; k++) {
    const di = (d.getDay() + 6 + k) % 7;
    const h = String(String(getCfg('hours')).split(',')[di] || '').split('/')[0].trim();
    const t = h.match(/^(\d{1,2})[:h.](\d{2})/);
    if (t) return { open: false, next: t[1].padStart(2, '0') + ':' + t[2], when: k === 1 ? T('demain') : T(DJ[di]).toLowerCase() };
  }
  return { open: false };
}
/* Phrase complète : « Fermé · Ouvre demain à 11:30 » */
const closedTxt = o => T(getCfg('closedText')) + (o.next ? ' · ' + T('Ouvre') + ' ' + (o.when ? o.when + ' ' : '') + T('à') + ' ' + o.next : '');

/* ---- Grande bannière publicitaire animée ---- */
let banT = null, banI = 0;
const domGal = () => [...document.querySelectorAll('.gs .gc')].map(el => ({
  title: el.querySelector('b') ? el.querySelector('b').textContent : '',
  sub: el.querySelector('small') ? el.querySelector('small').textContent : 'Voir la carte →',
  go: el.dataset.go || 'c0',
  img: el.dataset.bg || (el.style.backgroundImage || '').replace(/^url\(["']?/, '').replace(/["']?\)$/, '')
}));
function banSlides() {
  if (CF.ban && CF.ban.length) return CF.ban.filter(Boolean);
  const g = (CF.gal && CF.gal.length) ? CF.gal.filter(Boolean) : domGal();
  return g.filter(x => x.img).map(x => ({ img: x.img, title: x.title, sub: '', tag: '', go: x.go }));
}
const banSub = s => {
  if (s.sub) return s.sub;
  const c = cats.find(c => 'c' + c.i === s.go);
  const ps = c ? c.items.filter(i => !i.out).map(i => i.p) : [];
  return ps.length ? T('À partir de') + ' ' + eur(Math.min(...ps)) : '';
};
function banGo(i) {
  const sl = document.querySelectorAll('#ban .bs');
  if (!sl.length) return;
  banI = (i + sl.length) % sl.length;
  sl.forEach((e, j) => e.classList.toggle('on', j === banI));
  /* on prépare la diapo affichée et la suivante, pas les autres */
  [banI, (banI + 1) % sl.length].forEach(j => {
    const im = sl[j] && sl[j].querySelector('.bi[data-bg]');
    if (im) bgOn(im);
  });
  document.querySelectorAll('#ban .bd button').forEach((e, j) => e.classList.toggle('on', j === banI));
}
function banStart() {
  clearInterval(banT);
  const sec = Math.max(2, +getCfg('banSec') || 5);
  banT = setInterval(() => { if (!document.hidden && !document.body.classList.contains('k') && !document.body.classList.contains('f')) banGo(banI + 1); }, sec * 1000);
}
function renderBan() {
  let el = $('#ban');
  if (!el) {
    if (!$('.hero')) return;
    el = document.createElement('section');
    el.id = 'ban';
    $('.hero').insertAdjacentElement('afterend', el);
    let x0 = null;
    el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) { banGo(banI + (dx < 0 ? 1 : -1)); banStart(); }
    }, { passive: true });
  }
  clearInterval(banT);
  const sl = String(getCfg('banOn')) === '0' ? [] : banSlides().filter(s => s.img);
  el.hidden = !sl.length;
  if (!sl.length) { el.innerHTML = ''; return; }
  banI = 0;
  const sec = Math.max(2, +getCfg('banSec') || 5);
  el.innerHTML = `<div class="bn" style="--bsec:${sec}s">${sl.map((s, i) => {
    const sub = banSub(s);
    return `<div class="bs${i ? '' : ' on'}" role="link" tabindex="0" data-go="${esc(s.go || 'c0')}"><i class="bi"${bg(BIGSCR() ? HDU(s.img) : s.img, !i)}></i><div class="bx">${s.tag ? `<em>${esc(s.tag)}</em>` : ''}<b>${esc(s.title || '')}</b>${sub ? `<span>${esc(sub)}</span>` : ''}<u class="btn">${esc(T('Commander'))} →</u></div><i class="bp"></i></div>`;
  }).join('')}${sl.length > 1 ? `<div class="bd">${sl.map((s, i) => `<button type="button" class="${i ? '' : 'on'}" data-bn="${i}" aria-label="${i + 1}"></button>`).join('')}</div>` : ''}</div>`;
  if (sl.length > 1) banStart();
}

/* ---- Annonce « Livraison à domicile » ---- */
function renderDelv() {
  let el = $('#delv');
  const on = String(getCfg('delvOn')) !== '0';
  const apps = String(getCfg('delvApps')).split(',').map(x => x.trim()).filter(Boolean);
  if (!on || !apps.length) { if (el) el.remove(); return; }
  if (!el) {
    const after = $('#ban') || $('.hero');
    if (!after) return;
    el = document.createElement('section');
    el.id = 'delv';
    after.insertAdjacentElement('afterend', el);
  }
  const badge = getCfg('delvBadge');
  el.innerHTML = `<div class="dv"><i class="dvi">🛵</i><div class="dvb"><b>${esc(T(getCfg('delvTitle')))}${badge ? ` <em>${esc(T(badge))}</em>` : ''}</b>
 <span>${esc(T(getCfg('delvText')))}</span>
 <div class="dva">${apps.map(a => {
    const [n, u] = a.split('|').map(x => (x || '').trim());
    return /^https?:\/\//i.test(u || '') ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)}</a>` : `<span>${esc(n)}</span>`;
  }).join('')}</div></div></div>`;
}

/* ---- Fiche produit : grande photo animée + informations ---- */
function openPV(id) {
  if (!st('hfpv')) { st('hfpv', 1); const t = $('#pvtip'); if (t) { t.classList.add('go'); setTimeout(() => t.remove(), 500); } document.body.classList.add('pvseen'); }
  const it = I[id];
  if (!it) return;
  let el = $('#pv');
  if (!el) {
    el = document.createElement('div');
    el.id = 'pv';
    el.className = 'ov';
    el.addEventListener('click', e => { if (e.target === el) closePV(); });
    document.body.appendChild(el);
  }
  const u = IMG(it), o = opt(it), c = cats.find(c => c.n === it.cat) || {};
  const gt = goutOf(it);
  const feats = [gt && goutTxt(gt), o.includes('r') && T('Garniture au choix'), o.includes('s') && T('Sauces au choix'), o.includes('x') && getSUP().length && T('Suppléments au choix'), o.includes('b') && T('Boisson en option') + ' (+' + eur(getDP()) + ')'].filter(Boolean);
  const desc = descOf(it);
  el.innerHTML = `<div class="pvc"><button class="pvx" data-x="pvc" aria-label="${esc(T('Fermer'))}">✕</button>
<div class="pvi">${u ? `<i${bg(HDU(u), 1)}></i>` : `<span>${it.e}</span>`}<small>${c.e || ''} ${esc(T(c.l || it.cat))}</small></div>
<div class="pvb"><h3>${esc(full(it))}</h3><div class="pvp">${eur(it.p)}</div>${desc ? `<p>${esc(desc)}</p>` : ''}
${feats.length ? `<div class="pvf">${feats.map(f => `<span>✦ ${esc(f)}</span>`).join('')}</div>` : ''}${o ? `<p class="nt">${esc(T(getCfg('accNote')))}</p>` : ''}
${(() => {
  const a = algShow(it), ck = String(getCfg('algChecked')) === '1';
  if (!a) return algLine() ? `<p class="alg">${esc(T(algLine()))}</p>` : '';
  return `<p class="alg">⚠️ <b>${esc(T('Allergènes'))}</b> : ${esc(a)}<em>${esc(T(ck ? getCfg('algCross') : 'Liste indicative : en cas d’allergie, confirmez avec nous avant de commander.'))}</em></p>`;
})()}
${it.out ? `<span class="so">${esc(T('Épuisé'))}</span>` : `<button class="btn" style="width:100%" data-x="pva|${id}">${vrs(it).length ? T('Choisir') : o ? T('Composer') : T('Ajouter')} · ${eur(it.p)}</button>`}</div></div>`;
  requestAnimationFrame(() => el.classList.add('on'));
}
const closePV = () => { const el = $('#pv'); if (el) el.classList.remove('on'); };
addEventListener('keydown', e => { if (e.key === 'Escape') closePV(); });

window.setLang = l => {
  lang = l;
  localStorage.setItem('hflang', l);
  langDir();
  build();
  upd();
};

/* ---- Construction de la Carte ---- */
function build() {
  parseMenu();
  applySiteSettings();
  const vis = cats.filter(c => !c.hide && c.items.length);
  $('#chips').innerHTML = vis.map(c => `<button class="chip" data-k="c${c.i}">${c.e} ${esc(T(c.l))}</button>`).join('');
  trkDraw();
  $('#carte').innerHTML = (st('hfpv') ? '' : `<p class="tip" id="pvtip">${esc(T('Touchez un plat pour voir sa description, ses ingrédients et ses allergènes.'))}</p>`) + vis.map(c => `<section id="c${c.i}"><h2>${c.e} ${esc(T(c.l))}</h2>${c.d ? `<p class="nt">${esc(c.d)}</p>` : ''}${opt(c.items[0]) ? `<p class="nt">${esc(T(getCfg('accNote')))}</p>` : ''}<div class="grid">${c.items.map(it => `<div class="it v ${it.out ? 'out' : ''}" data-s="${esc(norm(c.n + ' ' + c.l + ' ' + T(c.l) + ' ' + full(it) + ' ' + vrs(it).map(v => v.n).join(' ')))}"><div class="m" data-pv="${it.id}">${th(it)}<div><b>${esc(full(it))}</b><span class="prow"><small>${eur(it.p)}</small><i class="pvb" aria-hidden="true">i</i></span></div></div><div class="ctl" data-c="${it.id}"></div></div>`).join('')}</div></section>`).join('');
}

const ctl = id => {
  const it = I[id];
  if (!it) return '';
  if (it.out) return `<span class="so">${esc(T('Épuisé'))}</span>`;
  const q = L.reduce((n, l) => n + (l.id === id ? l.q : 0), 0);
  if (vrs(it).length) return `<button class="add" data-x="vo|${id}">${q ? q + ' ·' : ''} ${T('Choisir')}</button>`;
  if (opt(it)) return `<button class="add" data-x="open|${id}">${q ? q + ' ·' : ''} ${T('Composer')}</button>`;
  return q ? `<button data-x="dec|${id}">−</button><b>${q}</b><button data-x="inc|${id}">+</button>` : `<button class="add" data-x="inc|${id}">${T('Ajouter')}</button>`;
};

/* Bouton du haut : « Voir la carte » tant que le panier est vide, « Voir mon panier » ensuite */
function heroBtn() {
  const hb = $('.hero p .btn');
  if (hb) hb.textContent = (typeof L !== 'undefined' && L.length) ? T('Voir mon panier') : '🍽️ ' + T('Voir la carte');
}
window.heroGo = () => {
  if (typeof L !== 'undefined' && L.length) { openD(); return; }
  const n = $('.nav') || $('#carte');
  if (n) n.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
function upd() {
  heroBtn();
  L = L.filter(l => I[l.id] && !I[l.id].out);
  document.querySelectorAll('.ctl[data-c]').forEach(e => e.innerHTML = ctl(e.dataset.c));
  $('#bar').classList.toggle('on', cnt() > 0);
  $('#bc').textContent = cnt() + T(cnt() > 1 ? ' articles' : ' article');
  $('#bt').textContent = eur(tot());
  const b = $('#bar');
  b.classList.remove('pop');
  void b.offsetWidth;
  b.classList.add('pop');
  st('hfl', L);
  if (!L.length) { upAsk = 0; upKeep = []; }
  if ($('#dr').classList.contains('on')) draw();
  if ($('#sh').classList.contains('on') && $('#shk .upsh')) upDraw();
}

const lkey = o => JSON.stringify([o.id, o.s || [], o.r || [], o.b || '', o.nt || '', o.v || '', o.t || '', o.x || []]);
function addLine(o) {
  const k = lkey(o);
  const f = L.find(l => lkey(l) === k);
  f ? f.q++ : L.push({ ...o, q: 1 });
  upd();
}
/* Remplace la ligne i (après modification) en gardant sa quantité */
function setLine(i, o) {
  const q = (L[i] && L[i].q) || 1;
  L.splice(i, 1);
  const k = lkey(o), f = L.find(l => lkey(l) === k);
  if (f) f.q += q; else L.splice(Math.min(i, L.length), 0, { ...o, q });
  upd();
}

/* ---- Personnalisation d'un plat ---- */
const oUrl = (g, v) => {
  const customPh = CF.ph && (CF.ph['Sauces|' + v] || CF.ph[fk('Sauces|' + v)] || CF.ph['opt|' + v]);
  if (customPh) return customPh;
  if (g === 't') {
    const m = /sandw|broodje/i.test(v) ? PH.s : PH.d;
    return (m && (m['Chawarma'] || Object.values(m)[0])) || '';
  }
  if (g === 'x') {
    const f = getSUP().find(z => z.n === v);
    return (f && IMG(f.it)) || '';
  }
  return (g === 's' ? (PH.u && PH.u[v]) : (PH.o && PH.o[v])) || '';
};
const oi = (g, v) => {
  const u = oUrl(g, v);
  return u ? `<i class="pi" style="background-image:url('${cssu(u)}')"></i>` : `<i class="pi">${v.startsWith('Sans') || v === 'Non merci' ? '🚫' : g === 's' ? '🥫' : g === 'r' ? '🥗' : g === 'x' ? '➕' : '🥤'}</i>`;
};

function sheet() {
  const x = I[ed.id], SUP = getSUP();
  const ks = [...'trsxb'].filter(k => opt(x).includes(k) && (k !== 'x' || SUP.length)), k = Math.min(ed.k, ks.length - 1), g = ks[k], last = k === ks.length - 1;
  const CRU = getCRU(), SAU = getSAU(), DRK = getDRK();
  const N = { t: T('Dürüm ou Sandwich'), r: T('Garniture'), s: T('Sauces'), x: T('Suppléments'), b: T('Boisson') };
  const list = g === 't' ? mTypes() : g === 's' ? ['Sans sauce', ...SAU] : g === 'x' ? ['Non merci', ...SUP.map(z => z.n)] : g === 'r' ? ['Sans crudités', 'Toutes les crudités', ...CRU] : ['Non merci', ...DRK];
  const isOn = v => v === 'Non merci' || v === 'Sans sauce' || v === 'Sans crudités' ? !!(ed.no && ed.no[g]) : sel.includes(v);
  const sel = g === 't' ? [ed.t] : g === 'b' ? [ed.b] : g === 'x' ? (ed.x || []) : g === 'r' ? [...ed.r, ...(isAllCru(ed.r) ? ['Toutes les crudités'] : [])] : ed.s;
  const px = v => {
    if (v === 'Non merci') return '';
    if (g === 'x') return `<em>+${eur(supP(v))}</em>`;
    if (g === 's') { const z = goutN(v); return z ? `<em class="h${z[0]}">${esc(hot(z[0]))}${esc(T(z[1]))}</em>` : ''; }
    return '';
  };
  const ttl = g === 't' ? T('Dürüm ou Sandwich ?') : g === 'b' ? (/^menus?$/i.test(norm(x.cat || '')) ? T('Boisson incluse dans le menu') : T('Ajouter une boisson') + ' (+' + eur(getDP()) + ')')
    : g === 'x' ? T(getCfg('supTitle')) : g === 'r' ? T('Choisissez vos crudités') : T('Choisissez vos sauces');
  const sup = supTot(ed.x);
  $('#shk').innerHTML = `<div class="th"><h3>${esc(full(x))}</h3><button class="chip" data-x="shut">✕</button></div>
 <div class="chips" style="margin:12px 0 0">${ks.map((s, j) => `<button class="chip ${j === k ? 'on' + (ed.mv ? ' mv' : '') : j < k ? 'dn' + (ed.mv && j === ed.pk ? ' jd' : '') : ''}" data-x="stp|${j}">${N[s]}</button>`).join('')}</div>
 ${ks.length > 1 ? (() => { const p = Math.round((k + 1) / ks.length * 100), p0 = window._lpE === ed && window._lp != null ? window._lp : 0; window._lpE = ed; window._lp = p; return `<div class="spb" style="--p0:${p0}%;--p:${p}%"><i></i></div>`; })() : ''}
 <div class="stepw${ed.mv ? ' mv-' + ed.mv : ''}"><h4>${ttl}</h4>${g === 'x' ? `<p class="nt" style="margin:-4px 0 8px">${esc(T('En option, payant. Touchez pour ajouter ou retirer.'))}${sup ? ' · <b>+' + eur(sup) + '</b>' : ''}</p>` : ''}${g === 's' ? `<p class="nt" style="margin:-4px 0 8px">${esc(T('Le goût est indiqué sous chaque sauce.'))} 🌶️ ${esc(T('peu'))} · 🌶️🌶️ ${esc(T('relevé'))} · 🌶️🌶️🌶️ ${esc(T('très piquant'))}</p>` : ''}
 <div class="opts og${g === 'x' ? ' ox' : ''}">${list.map(v => `<button class="${isOn(v) ? 'on' : ''}${v === 'Non merci' ? ' nox' : ''}" data-x="tg|${g}|${esc(v)}">${oi(g, v)}<span>${esc(T(v))}${px(v)}</span></button>`).join('')}</div></div>
 ${last ? `<textarea rows="2" placeholder="${T('Remarque (ex. sans oignons)')}" oninput="ed.nt=this.value">${esc(ed.nt || '')}</textarea>` : ''}<div class="shf"><button class="btn" style="width:100%" data-x="${last ? 'done' : 'nxt'}">${last ? (ed.ei !== undefined ? T('Enregistrer') : T('Ajouter')) + ' · ' + eur(unit(ed)) : T('Suivant')}</button></div>`;
  $('#sh').classList.add('on');
  if (ed.mv) { ed.mv = ''; $('#shk').scrollTop = 0; }
}
function vsheet() {
  const x = I[ed.id], vs = vrs(x);
  $('#shk').innerHTML = `<div class="th"><h3>${esc(full(x))}</h3><button class="chip" data-x="shut">✕</button></div>
 <h4>${esc(T('Votre choix'))}</h4>
 <div class="grid vgl">${vs.map(v => {
    const u = oUrl('b', v.n);
    return `<div class="it" data-x="vp|${ed.id}|${esc(v.n)}"><div class="m">${u ? `<i class="ph"${bg(u)}></i>` : `<i class="ph">🥤</i>`}<div><b>${esc(T(v.n))}</b><small>${eur(vprice(x, v))}</small></div></div><div class="ctl"><button class="add">${esc(T('Ajouter'))}</button></div></div>`;
  }).join('')}</div>`;
  const els = $('#shk').querySelectorAll('.it');
  requestAnimationFrame(() => els.forEach((e, i) => {
    e.style.transitionDelay = Math.min(i, 11) * 45 + 'ms';
    e.classList.add('v');
    setTimeout(() => { e.style.transitionDelay = ''; }, 1200);
  }));
  $('#sh').classList.add('on');
}
const shut = () => { $('#sh').classList.remove('on'); ed = null; };
function tg(g, v) {
  const CRU = getCRU();
  if (g === 'x' || g === 'b') {
    ed.no = ed.no || {};
    if (v === 'Non merci') {
      if (g === 'x') ed.x = []; else ed.b = '';
      ed.no[g] = true;
      const x = I[ed.id], n = [...'trsxb'].filter(k => opt(x).includes(k) && (k !== 'x' || getSUP().length)).length;
      if (ed.k < n - 1) { ed.mv = 'fw'; ed.pk = ed.k; ed.k++; }
      sheet();
      return;
    }
    ed.no[g] = false;
  }
  if (g === 't') ed.t = v;
  else if (g === 'x') { ed.x = ed.x || []; ed.x = ed.x.includes(v) ? ed.x.filter(a => a !== v) : [...ed.x, v]; }
  else if (g === 'b') ed.b = ed.b === v ? '' : v;
  else if (g === 's') {
    ed.no = ed.no || {};
    if (v === 'Sans sauce') { ed.s = []; ed.no.s = true; return stepFwd(); }
    ed.no.s = false;
    ed.s = ed.s.includes(v) ? ed.s.filter(a => a !== v) : [...ed.s, v];
  } else {
    ed.no = ed.no || {};
    if (v === 'Sans crudités') { ed.r = []; ed.no.r = true; return stepFwd(); }
    ed.no.r = false;
    if (v === 'Toutes les crudités') ed.r = isAllCru(ed.r) ? [] : [...cruAll()];
    else ed.r = ed.r.includes(v) ? ed.r.filter(a => a !== v) : [...ed.r, v];
  }
  sheet();
}
/* « Sans … » choisi : on passe tout seul à l'étape suivante */
function stepFwd() {
  const x = I[ed.id], n = [...'trsxb'].filter(k => opt(x).includes(k) && (k !== 'x' || getSUP().length)).length;
  if (ed.k < n - 1) { ed.mv = 'fw'; ed.pk = ed.k; ed.k++; }
  sheet();
}
/* Garniture et sauces : le client doit choisir (ou dire « Sans ») avant de continuer */
function stepMissing(onlyCur) {
  if (!ed) return -1;
  const x = I[ed.id], ks = [...'trsxb'].filter(k => opt(x).includes(k) && (k !== 'x' || getSUP().length));
  const miss = k => (k === 's' && !ed.s.length && !(ed.no && ed.no.s)) || (k === 'r' && !ed.r.length && !(ed.no && ed.no.r));
  if (onlyCur) { const k = Math.min(ed.k, ks.length - 1); return miss(ks[k]) ? k : -1; }
  return ks.findIndex(miss);
}
function stepAsk(i) {
  const x = I[ed.id], ks = [...'trsxb'].filter(k => opt(x).includes(k) && (k !== 'x' || getSUP().length)), g = ks[i];
  if (ed.k !== i) { ed.pk = ed.k; ed.mv = i > ed.k ? 'fw' : 'bk'; ed.k = i; sheet(); }
  toast('👉 ' + (g === 's' ? T('Choisissez vos sauces') + ' · ' + T('Sans sauce') : T('Choisissez vos crudités') + ' · ' + T('Sans crudités')));
  const o = $('#shk .opts'); if (o) { o.classList.remove('need'); void o.offsetWidth; o.classList.add('need'); }
}

/* ---- Panier + WhatsApp ---- */
function orderText(no) {
  return `🧾 *Commande ${getCfg('title')}* n°${no}\n${mode}${nom ? ' · ' + nom : ''}\n💳 ${payOf()}${PAID ? ` ✅ PAYÉ EN LIGNE ${eur(PAID.a)} (${PAID.id})` : ''}\n🕒 ${whenL()}\n\n${L.map(l => `${l.q}× ${lineN(l)} · ${eur(unit(l) * l.q)}` + dsc(l).map(d => '\n   ' + d).join('')).join('\n')}${gnote ? '\n\n📝 ' + gnote : ''}\n\n*Total : ${eur(tot())}*`;
}
/* Heure de fermeture d'aujourd'hui en minutes (heure de Bruxelles), ou null */
function closeMin() {
  let d;
  try { d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' })); } catch (e) { d = new Date(); }
  const now = d.getHours() * 60 + d.getMinutes();
  const rg = String(String(getCfg('hours')).split(',')[(d.getDay() + 6) % 7] || '').split('/').map(x => {
    const t = x.trim().match(/^(\d{1,2})[:h.](\d{2})\s*-\s*(\d{1,2})[:h.](\d{2})$/);
    if (!t) return null;
    const a = +t[1] * 60 + +t[2], b = +t[3] * 60 + +t[4];
    return [a, b <= a ? b + 1440 : b];
  }).filter(Boolean);
  const cur = rg.find(r => now >= r[0] && now < r[1]);
  return cur ? { now, end: cur[1] } : null;
}
/* Heures de retrait proposées : jamais après la fermeture */
const WL = () => {
  const a = [T('Dès que possible')], c = getCfg('openStatus') === 'auto' ? closeMin() : null;
  [15, 30, 45, 60].forEach(m => {
    const d = new Date(Date.now() + m * 6e4);
    d.setMinutes(Math.ceil(d.getMinutes() / 5) * 5);
    if (c) {
      let bx;
      try { bx = new Date(d.toLocaleString('en-US', { timeZone: 'Europe/Brussels' })); } catch (e) { bx = d; }
      let mm = bx.getHours() * 60 + bx.getMinutes();
      if (mm < c.now) mm += 1440;
      if (mm > c.end - 5) return;
    }
    const v = d.toLocaleTimeString('fr-BE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Brussels' });
    if (!a.includes(v)) a.push(v);
  });
  return a;
};
const whenL = () => when || T('Dès que possible');
const payOf = () => pay || (PAYS()[0] || [0, 'Au comptoir'])[1];
/* ---- Numéro de commande ----
   Un seul compteur par jour, partagé par tous les clients via Firebase (/q/<date>).
   Le numéro est pris au moment où le client valide : aucun numéro n'est perdu
   quand quelqu'un ouvre son panier sans commander. Remis à zéro chaque nuit.
   Hors ligne : série locale distincte (900, 901…) pour que la cuisine le voie. */
const bday = () => { try { return new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Brussels' }); } catch (e) { return new Date().toISOString().slice(0, 10); } };
const noCfg = () => ({
  pre: String(getCfg('noPre') || '').trim(),
  pad: Math.min(4, Math.max(1, Math.round(+getCfg('noPad')) || 1)),
  start: Math.max(1, Math.round(+getCfg('noStart')) || 1),
  off: Math.max(1, Math.round(+getCfg('noOff')) || 900)
});
const noFmt = n => { const c = noCfg(); return c.pre + String(n).padStart(c.pad, '0'); };
/* Prend le numéro suivant du jour. Renvoie null si Firebase est injoignable. */
async function takeNo() {
  const DB = getDB(), d = bday();
  if (!DB) return null;
  try {
    const r = await fetch(DB + '/q/' + d + '.json', { method: 'POST', body: JSON.stringify({ '.sv': 'timestamp' }) });
    if (!r.ok) throw 1;
    const k = (await r.json()).name;
    const all = await (await fetch(DB + '/q/' + d + '.json?shallow=true')).json();
    const i = Object.keys(all || {}).sort().indexOf(k);
    return i > -1 ? noCfg().start + i : null;
  } catch (e) { return null; }
}
/* Secours hors ligne : compteur gardé sur le téléphone du client */
function localNo() {
  const d = bday(), s = st('hfno'), c = noCfg();
  const n = (s && s.d === d && s.n >= c.off ? s.n : c.off - 1) + 1;
  st('hfno', { d, n });
  return n;
}
/* Combien de numéros ont déjà été donnés aujourd'hui */
async function noToday() {
  const DB = getDB();
  if (!DB) return null;
  try {
    const all = await (await fetch(DB + '/q/' + bday() + '.json?shallow=true')).json();
    return Object.keys(all || {}).length;
  } catch (e) { return null; }
}
/* Ménage : on ne garde que les 7 derniers jours de compteurs */
async function noClean() {
  const DB = getDB();
  if (!DB || noClean.b) return;
  noClean.b = 1;
  try {
    const all = await (await fetch(DB + '/q.json?shallow=true')).json();
    const keep = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
    for (const d of Object.keys(all || {})) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(d) && d < keep) await fetch(DB + '/q/' + d + '.json', { method: 'DELETE' });
    }
  } catch (e) {}
}
function toOrder(n, off) {
  return { no: noFmt(n), nn: n, off: off ? 1 : 0, mode, pay: payOf(), w: when || 'Dès que possible', g: gnote, nom, t: Date.now(), st: 0, ...(PAID ? { pd: { id: PAID.id, a: PAID.a } } : {}), l: L.map(l => ({ q: l.q, n: lineN(l), d: dsc(l), p: unit(l) * l.q })) };
}
function draw() {
  $('#tk').innerHTML = `<div class="th"><h3>${T('Ma commande')}</h3><div style="display:flex;gap:8px">${L.length ? `<button class="chip clr" data-x="clr">🗑 ${esc(T('Vider'))}</button>` : ''}<button class="chip" data-x="cld">✕</button></div></div>
<div class="seg"><button class="${mode === 'Sur place' ? 'on' : ''}" data-x="mode|Sur place">${T('Sur place')}</button><button class="${mode === 'À emporter' ? 'on' : ''}" data-x="mode|À emporter">${T('À emporter')}</button></div><h4>${T('Heure de retrait')}</h4><div class="opts">${WL().map(w => `<button class="${whenL() === w ? 'on' : ''}" data-x="wh|${w}">${w}</button>`).join('')}</div>
<input id="nm" placeholder="${T('Votre prénom (pour vous appeler)')}" value="${esc(nom)}" oninput="nom=this.value">
${L.length ? L.map((l, i) => `<div class="ln"><span>${esc(lineN(l))}<em>${esc(dsc(l).join(' · '))}</em><b>${eur(unit(l) * l.q)}</b></span><div class="ctl">${(opt(I[l.id]) || vrs(I[l.id]).length) ? `<button class="lnx" data-x="ced|${i}" title="${esc(T('Modifier'))}" aria-label="${esc(T('Modifier'))}">✏️</button>` : ''}<button class="lnx" data-x="crm|${i}" title="${esc(T('Retirer'))}" aria-label="${esc(T('Retirer'))}">🗑</button><button data-x="ln|${i}|-1">−</button><b>${l.q}</b><button data-x="ln|${i}|1">+</button></div></div>`).join('') : `<p class="nt">${T('Votre panier est vide.')}</p>${(st('hflast') || []).some(l => I[l.id] && !I[l.id].out) ? `<button class="btn g" style="width:100%;margin-bottom:10px" data-x="re">🔁 ${esc(T('Recommander ma dernière commande'))}</button>` : ''}`}
${upsell()}${loyLine()}<textarea id="gn" rows="2" placeholder="${T('Remarque pour la commande')}" oninput="gnote=this.value">${esc(gnote)}</textarea><div class="tot"><span>${T('Total')}</span><span>${eur(tot())}</span></div>
${(() => { const o = openNow(); return o.open ? '' : `<p class="shutn">🔴 <b>${esc(T('Nous sommes fermés'))}</b> · ${esc(o.next ? T('Ouvre') + ' ' + (o.when ? o.when + ' ' : '') + T('à') + ' ' + o.next : T('Réouverture bientôt'))}<em>${esc(T('Votre panier est gardé : revenez à l’ouverture pour l’envoyer.'))}</em></p>`; })()}
<h4>${esc(T(getCfg('payTitle')))}</h4><div class="opts">${PAYS().map(p => `<button class="${payOf() === p[1] ? 'on' : ''}" data-x="pay|${esc(p[1])}">${esc(p[0])} ${esc(p[1])}</button>`).join('')}</div>${payBox()}
<button class="btn" style="width:100%;margin-top:12px" data-x="send" ${L.length && openNow().open ? '' : 'disabled'}>${openNow().open ? (isMol() && L.length ? '⚡ ' + T('Payer') + ' ' + eur(tot()) + ' ' + T('et commander') : T('Valider ma commande')) : T('Fermé · commande impossible')}</button>`;
}
/* Détails du mode de paiement choisi (message, lien, compte bancaire) */
function payBox() {
  if (isMol()) return `<div class="pb"><p>🔒 ${esc(T(getCfg('molInfo')))}</p></div>`;
  const p = (CF.pays || DEFAULT_PAYS).filter(Boolean).find(x => x.on !== false && x.n === payOf());
  if (!p) return '';
  const r = [];
  const line = (k, v) => `<div class="ib"><span>${esc(k)}</span><code>${esc(v)}</code><button type="button" data-x="cp|${esc(v)}">${esc(T('Copier'))}</button></div>`;
  if (p.info) r.push(`<p>${esc(p.info)}</p>`);
  if (p.bank && getCfg('bankIban')) {
    if (getCfg('bankHolder')) r.push(line(T('Titulaire'), getCfg('bankHolder')));
    r.push(line('IBAN', getCfg('bankIban')));
    if (getCfg('bankBic')) r.push(line('BIC', getCfg('bankBic')));
    if (getCfg('bankName')) r.push(`<div class="ib"><span>${esc(T('Banque'))}</span><code>${esc(getCfg('bankName'))}</code></div>`);
    if (getCfg('bankNote')) r.push(`<p class="nt" style="margin:8px 0 0">${esc(getCfg('bankNote'))}</p>`);
  }
  if (p.bank && getCfg('bankIban')) {
    const q = epc(tot(), (nom ? nom + ' - ' : '') + getCfg('title'));
    const sv = q ? qrSvg(q, 190) : '';
    if (sv) r.push(`<div class="pq">${sv}<span>📱 ${esc(T('Scannez avec votre app bancaire'))}<em>${esc(T('Virement pré-rempli : montant et communication déjà remplis.'))}</em></span></div>`);
  }
  if (p.link && /^https?:\/\//i.test(p.link)) {
    r.push(`<a class="btn g" style="margin-top:8px;width:100%" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.e || '💳')} ${esc(T('Payer en ligne'))}</a>`);
    if (p.qr) {
      const sv = qrSvg(p.link, 190);
      if (sv) r.push(`<div class="pq">${sv}<span>📱 ${esc(T('Scannez avec votre app bancaire'))}</span></div>`);
    }
  }
  return r.length ? `<div class="pb">${r.join('')}</div>` : '';
}
function copyTxt(v) {
  const ok = () => toast(T('Copié ✔'));
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(v).then(ok, () => {}); return; }
  } catch (e) {}
  try {
    const t = document.createElement('textarea');
    t.value = v; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); ok();
  } catch (e) {}
}
/* ---- Suggestions boisson / dessert ----
   1) dans le panier : une rangée de photos à toucher (+ / −), qui reste affichée après un ajout ;
   2) juste avant l'envoi : une petite fenêtre, une seule fois par commande, s'il manque encore
      une boisson ou un dessert. Les boissons d'un menu comptent comme boisson. */
let upKeep = [], upAsk = 0, upBmp = '';
const upCatsL = () => {
  const names = String(getCfg('upCats')).split(',').map(x => norm(x.trim())).filter(Boolean);
  return cats.filter(c => !c.hide && (names.includes(norm(c.n)) || names.includes(norm(c.l))));
};
const upDrink = c => /boisson|drank|drink|soft/.test(norm(c.n));
const upMiss = () => upCatsL().filter(c => !L.some(l => I[l.id] && I[l.id].cat === c.n) && !(upDrink(c) && L.some(l => l.b)));
/* une suggestion = un plat simple, ou une boisson précise d'un sous-menu (ex. Coca-Cola dans « Softs 0,33 L ») */
function upPick(c, n) {
  const r = [];
  c.items.filter(i => !i.out && !opt(i)).forEach(i => {
    const vs = vrs(i);
    if (vs.length) vs.forEach(v => r.push({ id: i.id, v: v.n, n: T(v.n), p: vprice(i, v), u: oUrl('b', v.n) || IMG(i), e: i.e }));
    else r.push({ id: i.id, v: '', n: full(i), p: i.p, u: IMG(i), e: i.e });
  });
  /* d'abord les petits prix (achat « coup de cœur »), une seule fois la même photo, les photos avant les icônes */
  const seen = new Set(), u = [];
  r.sort((x, y) => (!!y.v - !!x.v) || (x.p - y.p)).forEach(x => { if (!x.u || !seen.has(x.u)) { if (x.u) seen.add(x.u); u.push(x); } });
  return [...u.filter(x => x.u), ...u.filter(x => !x.u)].slice(0, n);
}
function upItems(cs, n) {
  if (!cs.length) return [];
  const ls = cs.map(c => upPick(c, upDrink(c) ? Math.ceil(n * .6) : n)), r = [];
  for (let k = 0; r.length < n && ls.some(x => x[k]); k++) ls.forEach(x => { if (x[k] && r.length < n) r.push(x[k]); });
  return r;
}
const upTtl = cs => !cs.length ? '✨ ' + T('Bien choisi ! Autre chose ?')
  : cs.length > 1 ? T(getCfg('upTitle')) : upDrink(cs[0]) ? '🥤 ' + T('Une boisson fraîche avec ça ?') : '🍰 ' + T('Un petit dessert pour finir ?');
const upQ = x => L.filter(l => l.id === x.id && (l.v || '') === x.v).reduce((s, l) => s + l.q, 0);
const upCard = (x, k) => {
  const q = upQ(x), a = 'upa|' + x.id + '|' + esc(x.v), d = 'upd|' + x.id + '|' + esc(x.v);
  return `<div class="upc${q ? ' in' : ''}${upBmp === x.id + '|' + x.v ? ' bmp' : ''}" style="--k:${k}"><button class="upb" data-x="${a}" aria-label="${esc(T('Ajouter'))} : ${esc(x.n)}"><i class="upi"${bg(x.u, 1)}>${x.u ? '' : x.e}</i><span class="upn">${esc(x.n)}</span><b class="upp">${eur(x.p)}</b></button>${q
    ? `<div class="upq"><button data-x="${d}" aria-label="−">−</button><b>${q}</b><button data-x="${a}" aria-label="+">+</button></div>`
    : `<button class="upplus" data-x="${a}" tabindex="-1" aria-hidden="true">+</button>`}</div>`;
};
function upsell() {
  if (!L.length || String(getCfg('upOn')) === '0') return '';
  upMiss().forEach(c => upKeep.includes(c.n) || upKeep.push(c.n));
  const its = upItems(upCatsL().filter(c => upKeep.includes(c.n)), 8);
  return its.length ? `<div class="ups2"><h4>${esc(upTtl(upMiss()))}</h4><div class="uprow">${its.map(upCard).join('')}</div></div>` : '';
}
/* fenêtre « juste avant d'envoyer » */
const upNeed = () => !upAsk && L.length && String(getCfg('upOn')) !== '0' && String(getCfg('upAsk')) !== '0' && upItems(upMiss(), 1).length;
function upSheet() {
  upKeep = [];
  upMiss().forEach(c => upKeep.push(c.n));
  upDraw();
  $('#sh').classList.add('on');
}
function upDraw() {
  const its = upItems(upCatsL().filter(c => upKeep.includes(c.n)), 6), added = L.some(l => upKeep.includes((I[l.id] || {}).cat));
  $('#shk').innerHTML = `<div class="upsh"><div class="th"><h3>${esc(upTtl(upMiss()))}</h3><button class="chip" data-x="shut">✕</button></div>
<p class="nt">${esc(T('Juste avant d’envoyer votre commande…'))}</p>
<div class="upgrid">${its.map(upCard).join('')}</div>
<div class="tot"><span>${T('Total')}</span><span>${eur(tot())}</span></div>
<button class="btn${added ? '' : ' g'}" style="width:100%" data-x="upgo">${esc(T(added ? 'Envoyer ma commande' : 'Non merci, envoyer ma commande'))}</button></div>`;
}
/* Carte de fidélité (comptée sur le téléphone du client) */
const loyN = () => Math.max(2, Math.round(+getCfg('loyN')) || 10);
function loyLine() {
  if (!L.length || String(getCfg('loyOn')) !== '1') return '';
  const c = (+st('hfloy') || 0) + 1, N = loyN();
  return `<p class="loy">${c >= N ? '🎉 ' + esc(T('Cette commande complète votre carte :')) + ' <b>' + esc(getCfg('loyGift')) + '</b>' : '🎁 ' + esc(T('Carte de fidélité')) + ' : <b>' + c + '/' + N + '</b> · ' + esc(getCfg('loyGift'))}</p>`;
}
/* ---- Paiement en ligne (Mollie) ----
   1) le panier est gardé sur le téléphone, le client part sur la page sécurisée Mollie ;
   2) au retour, le site demande à Mollie si c'est payé ;
   3) payé → la commande part en cuisine avec « ✅ Payé en ligne » ; annulé → le panier revient. */
let PAID = null;
const orderGo = () => isMol() ? payGo() : send();
async function payGo() {
  if (!L.length || payGo.b) return;
  payGo.b = 1;
  await opnTick(1);
  if (!openNow().open) { payGo.b = 0; toast('🔴 ' + T('Nous sommes fermés')); draw(); return; }
  const bt = $('#tk [data-x="send"]');
  if (bt) { bt.disabled = true; bt.textContent = T('Ouverture du paiement…'); }
  const keep = { L: L.map(l => ({ ...l })), mode, nom, pay, when, gnote, a: +tot().toFixed(2), t: Date.now() };
  try {
    const ret = location.origin + location.pathname + '?pay=1';
    const r = await fetch(getCfg('molFn'), { method: 'POST', headers: { 'Content-Type': 'application/json' },
      /* la commande part avec le paiement : elle sera envoyée en cuisine dès que Mollie confirme,
         même si le client ferme la page après avoir payé */
      body: JSON.stringify({ amount: keep.a, desc: getCfg('title') + (nom ? ' · ' + nom : ''), ret, o: toOrder(0, 0), nc: noCfg(), day: bday() }) });
    const j = await r.json();
    if (!r.ok || !j.url) throw j.error || 1;
    keep.id = j.id;
    st('hfpay', keep);
    location.href = j.url;
  } catch (e) {
    payGo.b = 0;
    toast('⚠ ' + T('Paiement en ligne indisponible : choisissez un autre mode de paiement'));
    draw();
  }
}
async function payBack(n) {
  const k = st('hfpay');
  if (!k || !k.id) return;
  if (Date.now() - k.t > 36e5) { st('hfpay', null); return; }
  if (/[?&]pay=1/.test(location.search)) try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) {}
  let r = null;
  try { r = await (await fetch(getCfg('molFn') + '?id=' + encodeURIComponent(k.id))).json(); } catch (e) {}
  if (st('hfpay')?.id !== k.id) return;
  const back = () => { L = k.L; mode = k.mode; nom = k.nom; pay = k.pay; when = k.when; gnote = k.gnote; };
  if (r && r.paid && r.k) {
    /* payé et déjà envoyé en cuisine par le service de paiement : on affiche le numéro */
    st('hfpay', null);
    back();
    const lines = toOrder(0, 0).l;
    const wa = 'https://wa.me/' + getCfg('WA') + '?text=' + encodeURIComponent(orderText(r.no));
    if (window.hfPopBump) try { hfPopBump(lines); } catch (e) {}
    st('hflast', L.map(l => ({ ...l })));
    st('hfo', { k: r.k, no: r.no, t: Date.now(), st: 0, wa, pd: { id: k.id, a: r.amount }, loy: '' });
    L = []; when = ''; gnote = ''; upd(); closeD(); applySiteSettings(); ocDraw();
    toast('✅ ' + T('Paiement accepté') + ' · ' + eur(r.amount));
  } else if (r && r.paid && r.known === false) {
    /* ancien paiement (avant la mise à jour) : envoi depuis le téléphone comme avant */
    st('hfpay', null);
    back();
    PAID = { id: k.id, a: r.amount };
    upd();
    toast('✅ ' + T('Paiement accepté') + ' · ' + eur(r.amount));
    send();
  } else if (r && r.paid) {
    /* payé : la commande est en train de partir en cuisine, on attend son numéro */
    if ((n || 0) < 40) { if ((n || 0) === 0) toast('✅ ' + T('Paiement accepté') + ' · ' + T('Envoi…')); setTimeout(() => payBack((n || 0) + 1), 3000); }
    else toast('✅ ' + T('Paiement accepté') + ' · la commande arrive en cuisine. Montrez la confirmation Mollie au comptoir.');
  } else if (r && ['open', 'pending', 'authorized'].includes(r.status) || !r) {
    if ((n || 0) < 40) { if ((n || 0) === 0) toast('⏳ ' + T('Vérification du paiement…')); setTimeout(() => payBack((n || 0) + 1), 4000); }
  } else {
    st('hfpay', null);
    back();
    upd();
    toast('❌ ' + T('Paiement non abouti : votre panier est gardé'));
    openD();
  }
}
setTimeout(payBack, 600);
/* Cuisine : chaque paiement en ligne est revérifié auprès de Mollie (montant compris) */
const KPAY = {};
function kPaid(o) {
  const id = o.pd.id, v = KPAY[id];
  if (v === undefined) {
    KPAY[id] = null;
    fetch(getCfg('molFn') + '?id=' + encodeURIComponent(id)).then(r => r.json()).then(j => { KPAY[id] = j; kdraw(); }).catch(() => { delete KPAY[id]; });
  }
  const ok = v && v.paid && Math.abs(v.amount - o.l.reduce((s, l) => s + (+l.p || 0), 0)) < 0.02;
  const bad = v && (!v.paid || !ok);
  return `<span class="km" style="background:${bad ? '#e5484d' : ok ? '#1f9d55' : '#555'}">${bad ? '⚠ ' + esc('PAIEMENT NON CONFIRMÉ') : ok ? '✅ Payé en ligne ' + esc(eur(v.amount)) + (v.test ? ' (test)' : '') : '⏳ Vérif. paiement'}</span>`;
}
window.molTest = async () => {
  const u = ($('#c_molFn') && $('#c_molFn').value.trim()) || getCfg('molFn');
  try {
    const r = await fetch(u + '?id=tr_test0000');
    const j = await r.json();
    toast(j.error === 'nokey' ? '⚠ Service en ligne, mais la clé Mollie n’est pas encore mise dans Supabase' : j.code === 401 ? '⚠ Clé Mollie refusée : vérifiez-la dans Supabase' : '✅ Connexion Mollie OK');
  } catch (e) { toast('⚠ Service de paiement injoignable'); }
};
/* ---- Ouvert / Fermé en un geste ----
   Boutons sur l'écran cuisine (protégé par le code PIN) et dans les réglages.
   Les clients n'y ont pas accès ; leur page se met à jour toute seule. */
const opnCur = () => { const m = getCfg('openStatus'); return m === 'auto' || m === 'closed' ? m : 'open'; };
const opnSeg = () => `<div class="seg opq" style="grid-template-columns:1fr 1fr 1fr">${[['auto', '🕒 Auto'], ['open', '🟢 Ouvert'], ['closed', '🔴 Fermé']].map(([v, t]) => `<button type="button" class="${opnCur() === v ? 'on' : ''}" onclick="setOpen('${v}')">${t}</button>`).join('')}</div>`;
function opnDraw() {
  const bar = document.querySelector('#kt .kbar');
  if (bar) {
    let k = $('#kopn');
    if (!k) { k = document.createElement('div'); k.id = 'kopn'; bar.insertBefore(k, bar.querySelector('h2').nextSibling); }
    const o = openNow();
    k.innerHTML = `<span class="kos ${o.open ? 'on' : ''}">${o.open ? '🟢 Site ouvert' : '🔴 Site fermé'}</span>${opnSeg()}`;
  }
  const a = $('#adm-opn');
  if (a) a.innerHTML = opnSeg();
}
window.setOpen = v => {
  setCfg('openStatus', v);
  Store.saveConfig(CF);
  applySiteSettings();
  if ($('#dr') && $('#dr').classList.contains('on')) draw();
  opnDraw();
  toast(v === 'closed' ? '🔴 Site fermé : commandes bloquées' : v === 'open' ? '🟢 Site ouvert' : '🕒 Automatique selon les horaires');
};
/* Ouvert / Fermé côté clients : branché en direct sur Firebase (changement visible en moins d'une seconde),
   avec une vérification de secours toutes les 10 s si la connexion directe est coupée. */
function opnSet(v) {
  const before = openNow().open;
  if (typeof v === 'string' && v !== getCfg('openStatus')) { CF.cfg = CF.cfg || {}; CF.cfg.openStatus = v; st('hfc', CF); }
  if (document.body.classList.contains('k')) { opnDraw(); return; }
  if (openNow().open !== before) { applySiteSettings(); if ($('#dr') && $('#dr').classList.contains('on')) draw(); }
}
async function opnTick(force) {
  if (document.hidden) return;
  if (!force && opnES && opnES.readyState === 1) { opnSet(); return; } /* le direct fonctionne : on recalcule juste l'horaire « Auto » */
  const DB = getDB();
  let v;
  if (DB) try {
    const r = await fetch(DB + '/site_config/cfg/openStatus.json', { cache: 'no-store' });
    if (r.ok) v = await r.json();
  } catch (e) {}
  opnSet(v);
}
let opnES = null;
function opnLive() {
  const DB = getDB();
  if (opnES || document.hidden || !DB || !window.EventSource) return;
  try {
    const es = new EventSource(DB + '/site_config/cfg/openStatus.json');
    opnES = es;
    const h = e => { try { const j = JSON.parse(e.data); if (j && j.path === '/' && typeof j.data === 'string') opnSet(j.data); } catch (_) {} };
    es.addEventListener('put', h); es.addEventListener('patch', h);
  } catch (e) { opnES = null; }
}
function opnOff() { try { if (opnES) opnES.close(); } catch (e) {} opnES = null; }
setInterval(() => opnTick(), 10000);
addEventListener('visibilitychange', () => { if (document.hidden) opnOff(); else { opnLive(); opnTick(1); } });
setTimeout(opnLive, 1200);
async function send() {
  if (!L.length || send.b) return;
  if (!PAID && !openNow().open) { toast('🔴 ' + T('Nous sommes fermés')); draw(); return; }
  send.b = 1;
  const paid = !!PAID;
  /* La fenêtre WhatsApp est ouverte tout de suite, pendant que le clic du client
     est encore « frais » : sinon le navigateur la bloquerait après l'attente réseau. */
  let w = null;
  if (!paid) try { w = window.open('', '_blank'); if (w) w.document.write('<title>' + esc(getCfg('title')) + '</title><body style="margin:0;display:grid;place-items:center;height:100vh;background:#040914;color:#f9e29c;font:600 17px system-ui">' + esc(T('Préparation de votre commande…')) + '</body>'); } catch (e) {}
  const bt = $('#tk [data-x="send"]');
  if (bt) { bt.disabled = true; bt.textContent = T('Envoi…'); }
  if (!paid) { await opnTick(1); if (!openNow().open) { try { if (w) w.close(); } catch (e) {} send.b = 0; toast('🔴 ' + T('Nous sommes fermés')); draw(); return; } }
  let n = await takeNo(), off = 0;
  if (n == null) { n = localNo(); off = 1; }
  const o = toOrder(n, off);
  const lon = String(getCfg('loyOn')) === '1', N = loyN();
  let c = (+st('hfloy') || 0) + 1, gift = '';
  if (lon && c >= N) { gift = '🎁 Carte de fidélité complète : ' + getCfg('loyGift'); c = 0; }
  if (gift) o.g = (o.g ? o.g + ' · ' : '') + gift;
  const txt = orderText(o.no) + (gift ? '\n\n' + gift : '');
  const wa = 'https://wa.me/' + getCfg('WA') + '?text=' + encodeURIComponent(txt);
  if (!paid) try { if (w && !w.closed) w.location.href = wa; else window.open(wa, '_blank'); } catch (e) {}
  let k = '';
  try { k = (await Store.push(o)) || ''; if (window.hfPopBump) hfPopBump(o.l); } catch (e) { const p = st('hfp') || []; p.push(o); st('hfp', p); toast('Réseau faible : nouvel essai automatique'); }
  /* après un paiement en ligne, le navigateur bloque l'ouverture automatique de WhatsApp :
     la commande est déjà en cuisine, un bouton WhatsApp est proposé dans la confirmation */
  if (paid) { try { if (!window.open(wa, '_blank')) throw 0; } catch (e) {} }
  PAID = null;
  if (lon) st('hfloy', c);
  st('hflast', L.map(l => ({ ...l })));
  st('hfo', { k, no: o.no, t: o.t, st: 0, ...(paid ? { wa, pd: o.pd } : {}), loy: !lon ? '' : gift || '🎁 ' + T('Carte de fidélité') + ' : ' + c + '/' + N + ' · ' + getCfg('loyGift') });
  L = []; when = ''; gnote = ''; upd(); closeD(); applySiteSettings(); ocDraw();
  send.b = 0;
}

/* ---- Confirmation + suivi de la commande côté client ---- */
const STL = () => [T('Reçue'), T('En préparation'), T('Prête')];
function trkDraw() {
  const o = st('hfo');
  let p = $('#trk');
  if (!o) { if (p) p.remove(); return; }
  if (!p) { p = document.createElement('button'); p.id = 'trk'; p.type = 'button'; p.dataset.x = 'oco'; document.body.appendChild(p); }
  const s = o.done ? 3 : (o.st || 0);
  p.className = s >= 2 ? 'rdy' : '';
  p.textContent = '🧾 N° ' + o.no + ' · ' + (s === 3 ? T('Bon appétit !') : STL()[s]);
  if ($('#oc') && $('#oc').classList.contains('on')) ocDraw();
}
function ocDraw() {
  const o = st('hfo');
  let el = $('#oc');
  if (!o) { if (el) el.classList.remove('on'); return; }
  if (!el) {
    el = document.createElement('div');
    el.id = 'oc';
    el.className = 'ov';
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('on'); });
    document.body.appendChild(el);
  }
  const s = o.done ? 3 : (o.st || 0), rv = getCfg('review');
  el.innerHTML = `<div class="occ"><button class="pvx" data-x="occ" aria-label="${esc(T('Fermer'))}">✕</button>
<small>✔ ${esc(T('Commande envoyée'))}</small><p class="ocl">${esc(T('Votre numéro de commande'))}</p><div class="ocn${s >= 2 ? ' rdy' : ''}">${o.no}</div>
${o.k ? `<div class="ocs">${STL().map((t, i) => `<span class="${i <= s ? 'on' : ''}">${['📨', '👨‍🍳', '✅'][i]} ${esc(t)}</span>`).join('')}</div>` : ''}
<p>${esc(s === 3 ? T('Bon appétit !') : s === 2 ? T('Votre commande est prête !') : T('Présentez ce numéro au comptoir.'))}</p>
${o.pd ? `<p class="loy">✅ ${esc(T('Payé en ligne'))} · <b>${eur(o.pd.a)}</b></p>` : ''}${o.loy ? `<p class="loy">${esc(o.loy)}</p>` : ''}
${o.wa && s < 2 ? `<a class="btn g" style="width:100%;margin-bottom:8px" href="${esc(o.wa)}" target="_blank" rel="noopener">📲 ${esc(T('Envoyer aussi sur WhatsApp'))}</a>` : ''}
${s >= 2 && /^https?:\/\//i.test(rv) ? `<a class="btn g" style="width:100%;margin-bottom:8px" href="${esc(rv)}" target="_blank" rel="noopener">⭐ ${esc(T('Donner un avis'))}</a>` : ''}
<button class="btn" style="width:100%" data-x="occ">OK</button></div>`;
  requestAnimationFrame(() => el.classList.add('on'));
  trkDrawPill();
}
const trkDrawPill = () => { const oc = $('#oc'), on = oc && oc.classList.contains('on'); if (on) oc.classList.remove('on'); trkDraw(); if (on) oc.classList.add('on'); };
async function trkTick() {
  const o = st('hfo');
  if (!o) return;
  if (Date.now() - o.t > 108e5 || (o.done && Date.now() - o.done > 6e5)) { st('hfo', null); trkDraw(); return; }
  if (o.done || !o.k || document.hidden || document.body.classList.contains('k') || document.body.classList.contains('f')) return;
  let r;
  try {
    const DB = getDB();
    if (DB) { const q = await fetch(DB + '/orders/' + o.k + '.json'); if (!q.ok) return; r = await q.json(); }
    else r = (st('hfq') || []).find(x => x.no + '-' + x.t === o.k) || null;
  } catch (e) { return; }
  const cur = st('hfo');
  if (!cur || cur.k !== o.k) return;
  if (r === null) { if (Date.now() - cur.t < 20000) return; cur.done = Date.now(); }
  else {
    const ns = r.st || 0;
    if (ns === (cur.st || 0)) return;
    cur.st = ns;
    if (ns === 2) { try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {} toast('✅ N° ' + cur.no + ' · ' + T('Votre commande est prête !')); }
  }
  st('hfo', cur);
  if (cur.st === 2 && !cur.done) ocDraw(); else trkDraw();
}
setInterval(trkTick, 6000);
function reorder() {
  const last = (st('hflast') || []).filter(l => I[l.id] && !I[l.id].out);
  if (!last.length) return;
  L = last.map(l => ({ ...l }));
  upd();
  openD();
}
const openD = () => { draw(); $('#dr').classList.add('on'); opnTick(1); }, closeD = () => $('#dr').classList.remove('on');

/* ---- Gestion des clics ---- */
document.addEventListener('click', e => {
  const x = e.target.closest('[data-x]');
  if (x) {
    const [a, b, c] = x.dataset.x.split('|');
    if (a === 'pvc') closePV();
    else if (a === 're') reorder();
    else if (a === 'occ') $('#oc').classList.remove('on');
    else if (a === 'oco') ocDraw();
    else if (a === 'pva') { closePV(); if (I[b] && vrs(I[b]).length) { ed = { id: b }; vsheet(); } else if (I[b] && opt(I[b])) { ed = { id: b, s: [], r: [], x: [], b: '', nt: '', k: 0, t: opt(I[b]).includes('t') ? mTypes()[0] : '' }; sheet(); } else addLine({ id: b, s: [], r: [], b: '' }); }
    else if (a === 'vo') { ed = { id: b }; vsheet(); }
    else if (a === 'vp') { const o = ed; shut(); const n = { id: b, s: [], r: [], b: '', v: c }; if (o && o.ei !== undefined) setLine(o.ei, n); else addLine(n); }
    else if (a === 'crm') { L.splice(+b, 1); upd(); }
    else if (a === 'clr') { if (L.length && confirm(T('Vider le panier ?'))) { L = []; upd(); toast(T('Panier vidé')); } }
    else if (a === 'ced') {
      const l = L[+b];
      if (!l || !I[l.id]) return;
      ed = { id: l.id, s: [...(l.s || [])], r: [...(l.r || [])], x: [...(l.x || [])], b: l.b || '', nt: l.nt || '', t: l.t || '', k: 0, ei: +b, no: { ...(l.no || {}), ...(l.b ? {} : { b: true }) } };
      vrs(I[l.id]).length ? vsheet() : sheet();
    }
    else if (a === 'cp') copyTxt(x.dataset.x.slice(3));
    else if (a === 'inc') addLine({ id: b, s: [], r: [], b: '' });
    else if (a === 'dec') { const i = L.findLastIndex(l => l.id === b); if (i > -1) { L[i].q--; if (!L[i].q) L.splice(i, 1); } upd(); }
    else if (a === 'open') { ed = { id: b, s: [], r: [], x: [], b: '', nt: '', k: 0, t: opt(I[b]).includes('t') ? mTypes()[0] : '' }; sheet(); }
    else if (a === 'shut') shut();
    else if (a === 'stp') { ed.mv = +b < ed.k ? 'bk' : 'fw'; ed.pk = ed.k; ed.k = +b; sheet(); }
    else if (a === 'nxt') { const m = stepMissing(1); if (m > -1) stepAsk(m); else { ed.mv = 'fw'; ed.pk = ed.k; ed.k++; sheet(); } }
    else if (a === 'tg') tg(b, c);
    else if (a === 'done') { const m = stepMissing(); if (m > -1) { stepAsk(m); return; } const o = ed; shut(); const n = { id: o.id, s: o.s, r: o.r, x: o.x || [], b: o.b, nt: o.nt, t: o.t, ...(o.no && (o.no.s || o.no.r) ? { no: { s: !!o.no.s, r: !!o.no.r } } : {}) }; if (o.ei !== undefined) setLine(o.ei, n); else { if (window.hfMoDone) hfMoDone(o); addLine(n); if (window.hfMenuOffer) hfMenuOffer(n); } }
    else if (a === 'mode') { mode = b; draw(); }
    else if (a === 'pay') { pay = b; draw(); }
    else if (a === 'wh') { when = b; draw(); }
    else if (a === 'ln') { L[+b].q += +c; if (L[+b].q < 1) L.splice(+b, 1); upd(); }
    else if (a === 'cld') closeD();
    else if (a === 'send') { if (upNeed()) { upAsk = 1; upSheet(); } else orderGo(); }
    else if (a === 'upgo') { shut(); orderGo(); }
    else if (a === 'upa') { upBmp = b + '|' + (c || ''); addLine({ id: b, s: [], r: [], b: '', ...(c ? { v: c } : {}) }); upBmp = ''; }
    else if (a === 'upd') { const i = L.findLastIndex(l => l.id === b && (l.v || '') === (c || '')); if (i > -1) { L[i].q--; if (!L[i].q) L.splice(i, 1); } upd(); }
    return;
  }
  const pv = e.target.closest('[data-pv]');
  if (pv) { openPV(pv.dataset.pv); return; }
  const bn = e.target.closest('[data-bn]');
  if (bn) { banGo(+bn.dataset.bn); banStart(); return; }
  const ch = e.target.closest('.chip[data-k]');
  if (ch) {
    const sec = document.getElementById(ch.dataset.k);
    if (sec) {
      sec.scrollIntoView({ behavior: 'smooth' });
      sec.classList.remove('hit'); void sec.offsetWidth; sec.classList.add('hit');
      setTimeout(() => sec.classList.remove('hit'), 1600);
    }
    document.querySelectorAll('.chip[data-k]').forEach(c => c.classList.toggle('on', c === ch));
  }
  const g = e.target.closest('[data-go]');
  if (g) {
    const sec = document.getElementById(g.dataset.go);
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }
  const v = e.target.closest('[data-v]');
  if (v) location.hash = v.dataset.v;
});

$('#q').addEventListener('input', e => {
  const q = norm(e.target.value).trim();
  document.querySelectorAll('.it').forEach(i => i.hidden = q && !i.dataset.s.includes(q));
  document.querySelectorAll('main section').forEach(s => s.hidden = !!q && ![...s.querySelectorAll('.it')].some(i => !i.hidden));
});

/* ---- Stockage partagé (Firebase) ou local ---- */
const getDB = () => String(getCfg('DB') || '').replace(/\/$/, '');
const WK = () => st('hfwk') || '';
const wkHash = p => sha256('hfw|' + String(p).trim());
const proof = k => ({ k: k || '-', t: { '.sv': 'timestamp' } });
const rootPatch = async obj => (await fetch(getDB() + '/.json', { method: 'PATCH', body: JSON.stringify(obj) })).status;
const same = (a, b) => a.no === b.no && a.t === b.t;
/* réponse de Firebase à un changement de la cuisine : refus = mot de passe manquant sur cet appareil */
const kw = code => { if (code === 401 || code === 403) { const e = new Error('lock'); e.lock = 1; throw e; } if (code !== 200) throw new Error('net'); };
const KLOCK = '🔒 Refusé : entrez le mot de passe Firebase sur cet appareil (Réglages → Sécurité)';
const Store = {
  async push(o) {
    const DB = getDB();
    if (DB) { const r = await fetch(DB + '/orders.json', { method: 'POST', body: JSON.stringify(o) }); if (!r.ok) throw 1; const j = await r.json().catch(() => null); return j && j.name; }
    else { const q = st('hfq') || []; q.push(o); st('hfq', q); try { new BroadcastChannel('hf').postMessage(1); } catch (e) {} return o.no + '-' + o.t; }
  },
  async list() {
    const DB = getDB();
    if (DB) { const r = (await (await fetch(DB + '/orders.json')).json()) || {}; return Object.entries(r).map(([k, v]) => ({ ...v, k })); }
    return (st('hfq') || []).map(o => ({ ...o, k: o.no + '-' + o.t }));
  },
  /* Les changements de la cuisine (lancer, prête, servie, annulée) passent avec le mot de passe Firebase
     de l'appareil : sans lui, personne ne peut modifier ou effacer une commande. */
  async set(o, p) {
    const DB = getDB();
    if (DB) { const u = { proof: proof(WK()) }; Object.keys(p).forEach(f => { u['orders/' + o.k + '/' + f] = p[f]; }); kw(await rootPatch(u)); }
    else { const q = st('hfq') || []; q.forEach(x => { if (same(x, o)) Object.assign(x, p); }); st('hfq', q); }
  },
  async restore(o) {
    const DB = getDB(), { k, ...v } = o;
    if (DB) kw(await rootPatch({ ['orders/' + k]: v, proof: proof(WK()) }));
    else { const q = st('hfq') || []; if (!q.some(x => same(x, o))) q.push(v); st('hfq', q); }
  },
  async del(o) {
    const DB = getDB();
    if (DB) kw(await rootPatch({ ['orders/' + o.k]: null, proof: proof(WK()) }));
    else st('hfq', (st('hfq') || []).filter(x => !same(x, o)));
  },
  async saveConfig(cfgObj) {
    if (cfgObj.cfg && cfgObj.cfg.PIN) { cfgObj.cfg.PINH = pinHash(cfgObj.cfg.PIN); delete cfgObj.cfg.PIN; }
    st('hfc', cfgObj);
    const DB = getDB();
    if (DB) {
      try {
        const code = WK() ? await rootPatch({ site_config: cfgObj, proof: proof(WK()) })
          : (await fetch(DB + '/site_config.json', { method: 'PUT', body: JSON.stringify(cfgObj) })).status;
        if (code === 401 || code === 403) { toast('🔒 Refusé par Firebase : entrez le mot de passe Firebase (onglet Sécurité)'); return; }
        if (code !== 200) throw 1;
      } catch (e) { toast('⚠ Enregistré sur cet appareil seulement (synchronisation impossible)'); }
    }
  },
  async loadConfig() {
    const DB = getDB();
    if (!DB) return;
    try {
      const r = await (await fetch(DB + '/site_config.json')).json();
      if (r && typeof r === 'object') {
        CF = r;
        st('hfc', CF);
        build();
        upd();
      }
    } catch (e) {}
  }
};
Store.loadConfig();

async function retry() {
  const p = st('hfp') || []; if (!p.length) return;
  const r = []; for (const o of p) { try { await Store.push(o); } catch (e) { r.push(o); } }
  st('hfp', r);
}
setInterval(retry, 5000); addEventListener('online', retry);

/* ---- Cuisine ---- */
let AC, KO = [], seen = new Set(), first = true, kok = false;
const audio = () => { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); AC.resume(); } catch (e) {} };
const tone = (f, t0, dur, vol, type) => {
  const o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + t0;
  o.type = type || 'sine';
  o.frequency.setValueAtTime(f, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(.0002, vol), t + .014);
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  o.connect(g); g.connect(AC.destination);
  o.start(t); o.stop(t + dur + .03);
};
const SOUNDS = {
  carillon: t0 => {                                   /* carillon doré, clair et joyeux */
    [[1046.5, 0], [1318.5, .11], [1568, .22], [2093, .33]].forEach(([f, d]) => {
      tone(f, t0 + d, 1.1, .3); tone(f * 2, t0 + d, .5, .07); tone(f * 2.76, t0 + d, .32, .035);
    });
    tone(523.25, t0, 1.4, .12);
  },
  cloche: t0 => {                                     /* grande cloche profonde */
    [0, .5].forEach(d => {
      tone(659.25, t0 + d, 1.9, .3); tone(659.25 * 2.76, t0 + d, .8, .07);
      tone(659.25 * 5.4, t0 + d, .35, .03); tone(329.6, t0 + d, 2.2, .1);
    });
  },
  sonnerie: t0 => {                                   /* ding-dong de comptoir */
    [[987.77, 0], [783.99, .34]].forEach(([f, d]) => {
      tone(f, t0 + d, 1.3, .32); tone(f * 2, t0 + d, .6, .08); tone(f * 3, t0 + d, .3, .03);
    });
  },
  alerte: t0 => {                                     /* alerte nette, bien audible */
    [1046.5, 1396.9, 1760].forEach((f, i) => { tone(f, t0 + i * .16, .17, .3, 'triangle'); tone(f / 2, t0 + i * .16, .17, .12, 'sine'); });
  },
  bip: t0 => { [880, 1175, 880].forEach((f, i) => tone(f, t0 + i * .22, .17, .25, 'sine')); }
};
const beep = () => {
  audio();
  try {
    const fn = SOUNDS[getCfg('ksound')] || SOUNDS.carillon;
    const n = Math.min(4, Math.max(1, Math.round(+getCfg('krep')) || 2));
    for (let i = 0; i < n; i++) fn(i * 1.7);
  } catch (e) {}
};
document.addEventListener('click', audio);
const mins = o => Math.max(0, Math.floor((Date.now() - o.t) / 60000));
function kstat(ok) {
  let b = document.getElementById('kst');
  if (!b) {
    b = document.createElement('span'); b.id = 'kst';
    b.style.cssText = 'padding:6px 12px;border-radius:999px;font-weight:700;font-size:14px';
    const c = document.getElementById('kclk'); c.parentNode.insertBefore(b, c);
  }
  const DB = getDB();
  b.textContent = !DB ? '⚠ Mode local' : ok ? '● En ligne' : '● Hors ligne';
  b.style.background = !DB ? '#e5484d' : ok ? '#1f9d55' : '#e5484d'; b.style.color = '#fff';
}
async function kload() {
  try { KO = await Store.list(); kstat(1); } catch (e) { kstat(0); return; }
  const fr = KO.filter(o => !seen.has(o.k)); fr.forEach(o => seen.add(o.k));
  if (!first && fr.some(o => !o.st)) beep(); first = false; kdraw();
  if (!noClean.done) { noClean.done = 1; noClean(); }
}
let KSIG = '';
function kdraw(force) {
  /* rappel visible si cet appareil n'a pas le mot de passe Firebase (boutons refusés une fois le verrou actif) */
  try {
    const kb = $('#kt .kbar'); let w = $('#kwk');
    if (kb && !WK()) { if (!w) { w = document.createElement('button'); w.id = 'kwk'; w.type = 'button'; w.className = 'chip'; w.style.cssText = 'background:#e5484d;color:#fff;border:0;font-weight:700'; w.textContent = '🔒 Mot de passe Firebase manquant'; w.onclick = () => toast(KLOCK); kb.appendChild(w); } }
    else if (w) w.remove();
  } catch (e) {}
  const q = KO.filter(o => o.t > Date.now() - 864e5).sort((a, b) => a.t - b.t);
  /* on ne redessine que si une commande a changé (ou chaque minute pour les chronos) :
     sinon un bouton touché pendant le rafraîchissement (toutes les 2,5 s) pouvait être perdu */
  const sig = Math.floor(Date.now() / 60000) + '|' + q.map(o => o.k + ':' + (o.st || 0) + ':' + (o.pd ? JSON.stringify(KPAY[o.pd.id] || 0) : '')).join(',');
  if (!force && sig === KSIG && $('#k0').childElementCount) return;
  KSIG = sig;
  [0, 1, 2].forEach(s => {
    const a = q.filter(o => (o.st || 0) === s);
    $('#n' + s).textContent = a.length;
    $('#k' + s).innerHTML = a.length ? a.map(o => {
      const m = mins(o), cl = ['', 'prep', 'rdy'][s];
      return `<div class="kd ${cl} ${s < 2 && m >= 20 ? 'late' : s < 2 && m >= 10 ? 'warn' : ''}"><div class="kh"><span class="kn">${esc(String(o.no))}</span>${o.src === 'borne' ? '<span class="km" style="background:#0e7490">🖥️ Borne</span>' : ''}${o.off ? `<span class="km" style="background:#e5484d" title="Numéro donné hors ligne : à vérifier">📵 ${esc('hors ligne')}</span>` : ''}<span class="km ${o.mode === 'À emporter' ? 'em' : ''}">${esc(o.mode || 'Sur place')}</span>${o.pd ? kPaid(o) : o.pay ? `<span class="km" style="background:#1f9d55">💳 ${esc(o.pay)}</span>` : ''}${o.w ? `<span class="km" style="background:#7a4fd0">🕒 ${esc(o.w)}</span>` : ''}<time>${m} min</time></div>${o.nom ? `<div style="color:var(--mu)">${esc(o.nom)}</div>` : ''}${(o.l || []).map(l => `<div class="kli"><b>${esc(String(l.q))}×</b><div>${esc(l.n)}${l.d && l.d.length ? `<em>${esc(l.d.join(' · '))}</em>` : ''}</div></div>`).join('')}${o.g ? `<div class="kli"><b>📝</b><div>${esc(o.g)}</div></div>` : ''}<div class="ka"><button class="btn g kbk" title="Imprimer le ticket" aria-label="Imprimer le ticket" onclick="kprint('${o.k}')">🖨</button>${s < 2 ? `<button class="btn g kbk kx" title="Annuler la commande" aria-label="Annuler la commande" onclick="kcancel('${o.k}')">✕</button>` : ''}${s ? `<button class="btn g kbk" title="Revenir à l’étape précédente" aria-label="Revenir à l’étape précédente" onclick="mv('${o.k}',${s - 1},this)">↩</button>` : ''}<button class="btn" onclick="mv('${o.k}',${s + 1},this)">${['Lancer ▶', 'Prête ✔', 'Servie'][s]}</button></div></div>`;
    }).join('') : '<div class="emp">Aucune commande</div>';
  });
  $('#kclk').textContent = new Date().toLocaleTimeString('fr-BE', { hour: '2-digit', minute: '2-digit' });
}
let KUNDO = null;
function kundo(o) {
  let u = $('#kun');
  if (!u) { u = document.createElement('div'); u.id = 'kun'; document.body.appendChild(u); }
  KUNDO = o;
  u.innerHTML = `<span>Commande ${esc(String(o.no))} servie</span><button type="button" class="btn g" onclick="kundoGo()">↩ Annuler</button>`;
  u.classList.add('on'); clearTimeout(kundo.t); kundo.t = setTimeout(() => { u.classList.remove('on'); KUNDO = null; }, 8000);
}
async function kundoGo() {
  const o = KUNDO; KUNDO = null; const u = $('#kun'); if (u) u.classList.remove('on');
  if (!o) return;
  try { await Store.restore(o); if (!KO.some(x => x.k === o.k)) KO.push(o); seen.add(o.k); kdraw(1); toast('Commande ' + o.no + ' remise en « Prêtes »'); } catch (e) { toast(e && e.lock ? KLOCK : 'Erreur réseau'); }
}
/* Annuler une commande (client parti, erreur…) : retirée de l'écran et des statistiques */
async function kcancel(k) {
  const o = KO.find(x => x.k === k); if (!o) return;
  if (!confirm('Annuler la commande ' + o.no + ' ?\nElle sera retirée de l’écran et des statistiques.')) return;
  try {
    await Store.del(o); KO = KO.filter(x => x.k !== k);
    try { if (window.hfStatDel) hfStatDel(k); else { const s = JSON.parse(localStorage.getItem('hfstat')) || {}; delete s[k]; localStorage.setItem('hfstat', JSON.stringify(s)); } } catch (e) {}
    try { const c = JSON.parse(localStorage.getItem('hfcanc')) || {}; c[k] = Date.now(); localStorage.setItem('hfcanc', JSON.stringify(c)); } catch (e) {}
    toast('Commande ' + o.no + ' annulée');
  } catch (e) { toast(e && e.lock ? KLOCK : 'Erreur réseau'); }
  kdraw(1);
}
/* Imprimer le ticket (imprimante de cuisine 80 mm ou imprimante normale) */
function kprint(k) {
  const o = KO.find(x => x.k === k); if (!o) return;
  let p = $('#kprint'); if (!p) { p = document.createElement('div'); p.id = 'kprint'; document.body.appendChild(p); }
  const tot = (o.l || []).reduce((a, l) => a + (+l.p || 0), 0);
  p.innerHTML = `<h1>${esc(getCfg('title'))}</h1><p class="c">${new Date(o.t).toLocaleString('fr-BE', { dateStyle: 'short', timeStyle: 'short' })}</p>
<div class="no">N° ${esc(String(o.no))}</div><p class="c"><b>${esc(o.mode || 'Sur place')}</b>${o.w ? ' · ' + esc(o.w) : ''}${o.src === 'borne' ? ' · Borne' : ''}</p>${o.nom ? `<p class="c">${esc(o.nom)}</p>` : ''}
<hr>${(o.l || []).map(l => `<div class="l"><b>${esc(String(l.q))}×</b><span>${esc(l.n)}${l.d && l.d.length ? `<small>${esc(l.d.join(' · '))}</small>` : ''}</span><i>${l.p ? eur(+l.p) : ''}</i></div>`).join('')}
${o.g ? `<hr><p>📝 ${esc(o.g)}</p>` : ''}<hr><div class="l"><b></b><span><b>TOTAL</b></span><i><b>${eur(tot)}</b></i></div><p class="c">${o.pd ? 'Payé en ligne' : esc(o.pay || '')}</p>`;
  document.body.classList.add('kpr');
  const done = () => { document.body.classList.remove('kpr'); removeEventListener('afterprint', done); };
  addEventListener('afterprint', done);
  setTimeout(() => { window.print(); setTimeout(done, 1500); }, 50);
}
/* Alerte : commande en attente depuis trop longtemps (15 min par défaut, réglage kLate) */
const KLATE = new Set();
function klate() {
  if (!document.body.classList.contains('k')) return;
  const lim = Math.max(5, +getCfg('kLate') || 15);
  const late = KO.filter(o => (o.st || 0) < 2 && mins(o) >= lim && o.t > Date.now() - 864e5 && !KLATE.has(o.k));
  if (!late.length) return;
  late.forEach(o => KLATE.add(o.k));
  try { audio(); SOUNDS.alerte(0); SOUNDS.alerte(.7); } catch (e) {}
  toast('⏰ En attente depuis plus de ' + lim + ' min : n° ' + late.map(o => o.no).join(', '));
}
setInterval(klate, 30000);
async function mv(k, s, btn) {
  const o = KO.find(x => x.k === k); if (!o || mv.b) return;
  mv.b = 1; if (btn) btn.disabled = true;
  try {
    if (s > 2) { await Store.del(o); KO = KO.filter(x => x.k !== k); kundo(o); }
    else { await Store.set(o, { st: s }); o.st = s; }
  } catch (e) { toast(e && e.lock ? KLOCK : 'Erreur réseau'); }
  mv.b = 0; kdraw(1);
}

/* ---- Écran d'attente clients (#file) ---- */
let FV = false, FA = false, fprev = null, aq = [];
(() => {
  const s = document.createElement('style');
  s.textContent = `#fs{display:none;position:fixed;inset:0;z-index:70;flex-direction:column;gap:14px;padding:calc(env(safe-area-inset-top,0px) + 14px) 18px 14px;background:radial-gradient(circle at 20% 0,#132a5e,#0c1b3e 50%,#040914);color:#f9e29c}
body.f #fs{display:flex}body.f{overflow:hidden}body.f #bar{display:none}
#fs .fh{display:flex;align-items:center;gap:12px;flex-wrap:wrap}#fs .fh h2{margin:0;flex:1;font-size:clamp(24px,4vw,44px);color:#d4af37;font-family:Cinzel,Georgia,serif}
#fs .fg{flex:1;min-height:0;display:grid;grid-template-columns:1fr 1fr;gap:16px}
#fs .fc{display:flex;flex-direction:column;min-height:0;background:linear-gradient(160deg,#0c1b3e,#040914);border-radius:22px;padding:16px;border:2px solid #d4af3766}
#fs .fc.r{background:#0c3b2a;border-color:#3ecf6e}
#fs .fc h3{margin:0 0 12px;font-size:clamp(20px,3.2vw,36px)}
#fs .fl{flex:1;overflow:hidden;display:flex;flex-wrap:wrap;align-content:flex-start;gap:12px;padding:8px}
#fs #fv.off{animation:fvP 1.6s ease-in-out infinite;border-color:#f9e29c}@keyframes fvP{50%{box-shadow:0 0 0 6px #f9e29c55}}
#fs .fn{min-width:2.2em;text-align:center;padding:6px 18px;border-radius:18px;background:#132a5e;border:1px solid #d4af3766;font:700 clamp(36px,7vw,84px)/1.1 Cinzel,Georgia,serif;color:#f9e29c}
#fs .fn small{display:block;font:600 clamp(12px,1.6vw,20px) system-ui;opacity:.85}
#fs .fc.r .fn{background:#1f9d55;color:#fff;animation:fpop 1s ease-in-out infinite}
#fs .fc.r .fn{font-size:clamp(44px,7.5vw,150px)}#fs .fc.r .fn small{font-size:clamp(13px,1.8vw,30px)}
@keyframes fpop{50%{transform:scale(1.06)}}
@media(max-width:700px){#fs .fg{grid-template-columns:1fr}}`;
  document.head.appendChild(s);
  const d = document.createElement('div'); d.id = 'fs';
  d.innerHTML = `<div class="fh"><h2>🍽️ ${esc(getCfg('title'))} · Vos commandes</h2><span id="fclk" style="font:700 clamp(22px,3vw,36px) Georgia,serif"></span><button class="btn g off" id="fv" onclick="fvoice()">🔊 Activer la voix</button><select id="fvs" class="fvs" title="Choisir la voix des annonces" onchange="fvPick(this.value)" style="display:none"></select>${window.HF_SCREEN === 'file' ? '' : `<button class="btn g" onclick="go('')">⬅ Retour</button>`}</div><div class="fg"><div class="fc"><h3>⏳ En préparation</h3><div class="fl" id="fp"></div></div><div class="fc r"><h3>✅ Prêtes · venez les récupérer</h3><div class="fl" id="fr"></div></div></div>`;
  document.body.appendChild(d);
  setTimeout(fvList, 300); setTimeout(fvList, 1500);
})();

/* Voix des annonces : on prend la voix française la plus naturelle disponible sur l'appareil
   (voix « Natural / Online » de Microsoft Edge, voix Google réseau, voix « Premium / Enhanced » d'Apple…),
   ou celle choisie dans la liste en haut de l'écran d'attente. */
function frVoices() {
  let v = [];
  try { v = (speechSynthesis.getVoices() || []).filter(x => /^fr/i.test(x.lang)); } catch (e) {}
  const sc = x => (/natural|neural/i.test(x.name) ? 50 : 0) + (/online|network|réseau/i.test(x.name) ? 20 : 0) + (/premium|enhanced|améliorée/i.test(x.name) ? 25 : 0)
    + (/google/i.test(x.name) ? 12 : 0) + (/fr[-_]fr/i.test(x.lang) ? 4 : /fr[-_]be/i.test(x.lang) ? 3 : 0) + (/denise|vivienne|eloise|remy|henri|amelie|thomas|audrey/i.test(x.name) ? 3 : 0)
    - (/espeak|compact|eloquence/i.test(x.name) ? 40 : 0);
  return v.sort((a, b) => sc(b) - sc(a));
}
function bestVoice() {
  const all = frVoices(); let k = '';
  try { k = localStorage.getItem('hfvoice') || ''; } catch (e) {}
  return all.find(v => v.name === k) || all[0] || null;
}
function fvList() {
  const s = $('#fvs'); if (!s) return;
  const all = frVoices(), cur = bestVoice();
  if (!all.length) { s.style.display = 'none'; return; }
  s.innerHTML = all.map(v => `<option value="${esc(v.name)}" ${cur && cur.name === v.name ? 'selected' : ''}>🗣 ${esc(v.name.replace(/^Microsoft\s+/, '').replace(/\s*-\s*(French|Français).*$/i, ''))}</option>`).join('');
  s.style.display = '';
}
function fvPick(n) { try { localStorage.setItem('hfvoice', n); } catch (e) {} FA = true; audio(); $('#fv').textContent = '🔊 Voix activée'; $('#fv').classList.remove('off'); speechSynthesis.cancel(); say('Commande numéro 12, votre commande est prête.'); }
try { speechSynthesis.addEventListener('voiceschanged', fvList); } catch (e) {}
function say(t) { try { const u = new SpeechSynthesisUtterance(t), v = bestVoice(); u.lang = v ? v.lang : 'fr-FR'; if (v) u.voice = v; u.rate = v && /natural|neural|online|premium|enhanced/i.test(v.name) ? 1 : .92; u.pitch = 1; speechSynthesis.speak(u); } catch (e) {} }
function fvoice() { FA = true; audio(); $('#fv').textContent = '🔊 Voix activée'; $('#fv').classList.remove('off'); say('La voix est activée.'); }
function pump() { const o = aq.shift(); if (!o) { pump.b = 0; return; } pump.b = 1; beep(); setTimeout(() => { const t = 'Commande numéro ' + (o.nn != null ? o.nn : o.no) + (o.nom ? ', ' + o.nom : '') + ', votre commande est prête.'; say(t); say(t); }, 700); setTimeout(pump, 7000); }
function announce(o) { if (!FA) return; aq.push(o); if (!pump.b) pump(); }
function fdraw() {
  const q = KO.filter(o => o.t > Date.now() - 72e5).sort((a, b) => a.t - b.t);
  const box = a => a.length ? a.map(o => `<div class="fn">${esc(String(o.no))}${o.nom ? `<small>${esc(o.nom)}</small>` : ''}</div>`).join('') : '<div style="opacity:.5;font-size:28px">—</div>';
  $('#fp').innerHTML = box(q.filter(o => (o.st || 0) < 2)); $('#fr').innerHTML = box(q.filter(o => (o.st || 0) === 2));
  $('#fclk').textContent = new Date().toLocaleTimeString('fr-BE', { hour: '2-digit', minute: '2-digit' });
}
async function fload() {
  let r; try { r = await Store.list(); } catch (e) { return; } KO = r;
  const cur = {}; KO.forEach(o => cur[o.k] = o.st || 0);
  if (fprev) KO.forEach(o => { if ((o.st || 0) === 2 && (fprev[o.k] === undefined || fprev[o.k] < 2)) announce(o); });
  fprev = cur; fdraw();
}

/* =====================================================================
   PANNEAU D'ADMINISTRATION COMPLET (TOUS LES RÉGLAGES, PRIX, PHOTOS)
   ===================================================================== */
/* ---- Fenêtre du code d'accès (remplace l'ancienne boîte du navigateur) ---- */
function askPin(title) {
  return new Promise(res => {
    const old = $('#pin');
    if (old) old.remove();
    const el = document.createElement('div');
    el.id = 'pin';
    el.className = 'ov on';
    el.innerHTML = `<form class="pnc" autocomplete="off"><h3>🔒 ${esc(title)}</h3>
      <input id="pin_i" type="password" inputmode="numeric" autocomplete="off" maxlength="12" placeholder="••••" aria-label="${esc(title)}">
      <p id="pin_m" class="nt"></p>
      <div class="seg"><button type="button" id="pin_c">Annuler</button><button type="submit" class="on">Valider</button></div></form>`;
    document.body.appendChild(el);
    const inp = el.querySelector('#pin_i'), msg = el.querySelector('#pin_m'), box = el.querySelector('.pnc');
    const done = v => { el.remove(); res(v); };
    el.addEventListener('click', e => { if (e.target === el) done(false); });
    el.querySelector('#pin_c').addEventListener('click', () => done(false));
    el.addEventListener('keydown', e => { if (e.key === 'Escape') done(false); });
    inp.addEventListener('input', () => {
      if (Date.now() >= +(st('hfpl') || 0) && checkPin(inp.value)) { st('hfpf', 0); done(true); }
    });
    box.addEventListener('submit', e => {
      e.preventDefault();
      const lock = +(st('hfpl') || 0);
      if (Date.now() < lock) { msg.textContent = 'Trop d’essais. Réessayez dans ' + Math.ceil((lock - Date.now()) / 1000) + ' s.'; return; }
      if (checkPin(inp.value)) { st('hfpf', 0); done(true); return; }
      const n = (+(st('hfpf') || 0)) + 1;
      st('hfpf', n >= 5 ? 0 : n);
      if (n >= 5) st('hfpl', Date.now() + 30000);
      msg.textContent = n >= 5 ? 'Trop d’essais. Réessayez dans 30 s.' : 'Code incorrect';
      inp.value = '';
      box.classList.remove('bad'); void box.offsetWidth; box.classList.add('bad');
      inp.focus();
    });
    setTimeout(() => inp.focus(), 60);
  });
}

/* =====================================================================
   PANNEAU D'ADMINISTRATION (5 clics sur le logo + code) : tout est modifiable
   ===================================================================== */
function setupAdminPanel() {
  const adm = $('#adm');
  if (!adm) return;
  const tk = adm.querySelector('.tk');
  tk.classList.add('big');
  tk.innerHTML = `
    <div class="th">
      <h3>⚙️ Administration du site</h3>
      <button class="chip" onclick="$('#adm').classList.remove('on')">✕</button>
    </div>
    <div class="chips" style="margin:12px 0" id="adm-tabs">
      <button class="chip on" onclick="showAdmTab('nav', this)">🚀 Écrans</button>
      <button class="chip" onclick="showAdmTab('gen', this)">🏪 Infos & Horaires</button>
      <button class="chip" onclick="showAdmTab('menu', this)">🍔 Carte, Prix & Photos</button>
      <button class="chip" onclick="showAdmTab('gal', this)">🎞️ Bannière & Design</button>
      <button class="chip" onclick="showAdmTab('opt', this)">💳 Options & Paiements</button>
      <button class="chip" onclick="showAdmTab('bak', this)">🔒 Sécurité & Sauvegarde</button>
    </div>
    <div id="adm-body"></div>
  `;
}

window.openAdmin = async () => {
  if (kok || await askPin('Code administrateur')) {
    kok = true;
    setupAdminPanel();
    showAdmTab('gen', $('#adm-tabs button:nth-child(2)'));
    $('#adm').classList.add('on');
  }
};

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const catSel = (val, on) => `<select onchange="${on}" style="margin:0">${cats.map(c => `<option value="c${c.i}" ${val === 'c' + c.i ? 'selected' : ''}>${c.e} ${esc(c.l)}</option>`).join('')}</select>`;
const banE = () => (CF.ban = (CF.ban && CF.ban.length) ? CF.ban : banSlides().map(s => ({ ...s })));
const setCfg = (k, v) => { CF.cfg = CF.cfg || {}; CF.cfg[k] = v; };

window.showAdmTab = (tab, btn) => {
  if (btn) {
    document.querySelectorAll('#adm-tabs .chip').forEach(b => b.classList.toggle('on', b === btn));
  }
  const b = $('#adm-body');
  if (!b) return;

  if (tab === 'nav') {
    b.innerHTML = `
      <div style="display:grid;gap:10px;margin-top:10px">
        <button class="btn" onclick="go('cuisine')">👨‍🍳 Écran cuisine</button>
        <button class="btn g" onclick="go('file')">📺 Écran d'attente clients (TV)</button>
        <button class="btn g" onclick="go('')">🛍️ Écran client</button>
      </div>
      <label class="pl" style="margin-top:12px"><input type="checkbox" ${st('hfkiosk') !== 0 ? 'checked' : ''} onchange="st('hfkiosk', this.checked ? 1 : 0); kioskSync()"> 🔒 Mode kiosque sur l'écran cuisine et l'écran d'attente (plein écran, écran toujours allumé, code PIN pour sortir)</label>
      <p class="nt">Réglage propre à cet appareil. Sur iPhone/iPad, utilisez en plus l'« Accès guidé » (Réglages → Accessibilité).</p>
      <h4>🔔 Son d'arrivée d'une commande (écran cuisine)</h4>
      <div class="opts">
        ${[['carillon', '✨ Carillon'], ['cloche', '🔔 Cloche'], ['sonnerie', '🛎️ Ding-dong'], ['alerte', '🚨 Alerte'], ['bip', '📟 Bips']]
          .map(([k, l]) => `<button type="button" class="${getCfg('ksound') === k ? 'on' : ''}" onclick="setCfg('ksound','${k}');Store.saveConfig(CF);showAdmTab('nav');beep()">${l}</button>`).join('')}
      </div>
      <label>Nombre de répétitions à chaque commande</label>
      <input type="number" min="1" max="4" value="${esc(getCfg('krep'))}" onchange="setCfg('krep',Math.min(4,Math.max(1,Math.round(+this.value)||2)));Store.saveConfig(CF)">
      <button class="btn g" style="width:100%;margin-top:8px" onclick="beep()">▶️ Écouter</button>`;
  } else if (tab === 'gen') {
    const hs = String(getCfg('hours')).split(',');
    const sm = getCfg('openStatus');
    b.innerHTML = `
      <h4>🏪 Identité & Accueil</h4>
      <label>Nom du restaurant</label>
      <input id="c_title" value="${esc(getCfg('title'))}">
      <label>Texte d'accroche sous le titre</label>
      <textarea id="c_sub" rows="2">${esc(getCfg('sub'))}</textarea>
      <label>Pastilles sous le titre (séparées par une virgule)</label>
      <input id="c_badges" value="${esc(getCfg('badges'))}">
      <label>Bandeau promotionnel défilant tout en haut (laisser vide pour masquer)</label>
      <input id="c_promo" placeholder="Ex: 🔥 -10% sur tous les Tacos ce soir !" value="${esc(getCfg('promo'))}">

      <h4>🟢 Ouverture & Horaires</h4>
      <label>État du restaurant</label>
      <div id="adm-opn">${opnSeg()}</div>
      <p class="nt">Enregistré tout de suite, sur tous les téléphones des clients en moins d'une minute. « Auto » suit les horaires ci-dessous ; « Ouvert » / « Fermé » forcent l'état (fermé = commandes bloquées). Aussi disponible sur l'écran cuisine.</p>
      <div class="hrs">${DAYS.map((d, i) => `<span>${d}</span><input id="c_h${i}" value="${esc(hs[i] || '')}" placeholder="Fermé (ex. 11:30-22:30)" style="margin:0">`).join('')}</div>
      <label>Texte affiché quand Ouvert</label>
      <input id="c_openText" value="${esc(getCfg('openText'))}">
      <label>Texte affiché quand Fermé</label>
      <input id="c_closedText" value="${esc(getCfg('closedText'))}">

      <h4>🛵 Annonce « Livraison à domicile »</h4>
      <div class="seg">
        <button type="button" class="${String(getCfg('delvOn')) !== '0' ? 'on' : ''}" onclick="setCfg('delvOn','1');showAdmTab('gen')">✅ Affichée</button>
        <button type="button" class="${String(getCfg('delvOn')) === '0' ? 'on' : ''}" onclick="setCfg('delvOn','0');showAdmTab('gen')">🚫 Masquée</button>
      </div>
      <label>Titre</label>
      <input id="c_delvTitle" value="${esc(getCfg('delvTitle'))}">
      <label>Petite étiquette à côté du titre (vide = aucune)</label>
      <input id="c_delvBadge" value="${esc(getCfg('delvBadge'))}">
      <label>Phrase</label>
      <input id="c_delvText" value="${esc(getCfg('delvText'))}">
      <label>Plateformes (séparées par une virgule). Plus tard : Nom|https://lien pour les rendre cliquables</label>
      <input id="c_delvApps" value="${esc(getCfg('delvApps'))}">

      <h4>📞 Contact & Adresse</h4>
      <label>Numéro WhatsApp de réception des commandes (sans le +)</label>
      <input id="c_WA" value="${esc(getCfg('WA'))}">
      <label>Téléphone pour le bouton "Appeler"</label>
      <input id="c_tel" value="${esc(getCfg('tel'))}">
      <label>Lien Google Maps (bouton "Itinéraire")</label>
      <input id="c_maps" value="${esc(getCfg('maps'))}">
      <label>Lien Avis Google (bouton « Donner un avis »)</label>
      <input id="c_review" value="${esc(getCfg('review'))}" placeholder="https://g.page/r/…/review">
      <p class="nt">${getCfg('review') ? '✅ Le bouton « ⭐ Donner un avis » apparaît au client dès que sa commande est prête.' : '⚠️ Vide : le bouton « ⭐ Donner un avis » n’apparaît jamais, vous perdez des avis. Pour le lien : ouvrez votre fiche Google Business sur votre téléphone → « Demander des avis » → copiez le lien et collez-le ici.'}</p>
      <label>Texte du pied de page (Adresse, horaires…)</label>
      <input id="c_footer" value="${esc(getCfg('footer'))}">
      <button class="btn" style="width:100%;margin-top:12px" onclick="saveGenCfg()">💾 Enregistrer tous les réglages</button>
    `;
  } else if (tab === 'menu') {
    const curCat = cats.find(c => c.i === window._admCat) || cats[0];
    const o = opt({ cat: curCat.n });
    const gone = Object.keys(base).filter(id => base[id].cat === curCat.n && !I[id]);
    b.innerHTML = `
      <h4>🍔 Choisissez une catégorie à modifier</h4>
      <div class="chips" style="margin:8px 0 12px">
        ${cats.map(c => `<button class="chip ${c === curCat ? 'on' : ''}" onclick="window._admCat=${c.i};showAdmTab('menu')">${c.e} ${esc(c.l)}${c.hide ? ' 🙈' : ''}</button>`).join('')}
      </div>

      <h4>📂 Réglages de la catégorie « ${esc(curCat.l)} »</h4>
      <div style="display:grid;grid-template-columns:64px 1fr;gap:6px">
        <input value="${esc(curCat.e)}" title="Emoji" onchange="updCat(${curCat.i},'e',this.value)" style="margin:0;text-align:center">
        <input value="${esc(curCat.l)}" placeholder="Nom affiché" onchange="updCat(${curCat.i},'l',this.value)" style="margin:0">
      </div>
      <label>Petit texte sous le titre de la catégorie (facultatif)</label>
      <input value="${esc(curCat.d)}" placeholder="Ex : Servis avec frites et salade" onchange="updCat(${curCat.i},'d',this.value)">
      <label>Choix proposés au client quand il compose un plat de cette catégorie</label>
      <div class="opts" style="margin:6px 0">
        ${[['r', '🥗 Garniture'], ['s', '🥫 Sauces'], ['x', '➕ Suppléments'], ['b', '🥤 Boisson']].map(x => `<label class="pl" style="margin:0"><input type="checkbox" ${o.includes(x[0]) ? 'checked' : ''} onchange="updCatOpt(${curCat.i},'${x[0]}',this.checked)"> ${x[1]}</label>`).join('')}
      </div>
      <label class="pl"><input type="checkbox" ${curCat.hide ? 'checked' : ''} onchange="updCat(${curCat.i},'hide',this.checked)"> Masquer cette catégorie aux clients</label>

      <h4>🍽️ Plats de la catégorie</h4>
      <p class="nt">Nom, prix, description et allergènes (affichés quand le client touche la photo), photo 📷, épuisé ou supprimer. La description en gris est celle proposée par défaut : laissez le champ vide pour la garder.</p>
      <button type="button" class="btn g" style="width:100%;margin-bottom:10px" onclick="fillAlg(${curCat.i})">✏️ Recopier les allergènes probables dans les champs (pour les corriger)</button>
      <div id="adm-items">
        ${curCat.items.map(it => {
          const curImg = IMG(it);
          return `<div class="ai">
            <label class="up" title="Changer la photo" style="${curImg ? `background-image:url('${cssu(curImg)}')` : ''}">
              ${curImg ? '' : '📷'}
              <input type="file" accept="image/*" hidden onchange="uploadItemPhoto('${it.id}', this)">
            </label>
            <div>
              <div style="display:grid;grid-template-columns:1fr 84px;gap:6px">
                <input value="${esc(it.n)}" placeholder="Nom du plat" onchange="updItem('${it.id}', 'n', this.value)">
                <input type="number" step="0.05" value="${it.p}" placeholder="Prix" onchange="updItem('${it.id}', 'p', this.value)">
              </div>
              <input value="${esc(it.d)}" placeholder="${esc(autoDesc(it) || 'Description du plat')}" onchange="updItem('${it.id}', 'd', this.value)">
              <input value="${esc(it.a)}" placeholder="Allergènes (ex. Gluten, Œufs, Sésame)" onchange="updItem('${it.id}', 'a', this.value)">
              ${curCat.n === 'Sauces' ? `<input value="${esc(it.g)}" placeholder="${esc('Goût : ' + (goutOf(it) ? goutOf(it)[0] + '|' + goutOf(it)[1] : '0|Douce'))}" onchange="updItem('${it.id}', 'g', this.value)">` : ''}
              <input value="${esc(vTxt(vrs(it)))}" placeholder="Sous-menu : Coca-Cola 2; Fanta 2 (vide = aucun)" onchange="updVar('${it.id}', this.value)">
              <div class="ar">
                <label class="pl" style="margin:0;color:#fff"><input type="checkbox" ${it.out ? 'checked' : ''} onchange="updItem('${it.id}', 'out', this.checked)"> Épuisé</label>
                <button type="button" class="del" onclick="delItem('${it.id}')">🗑 Supprimer</button>
              </div>
            </div>
          </div>`;
        }).join('') || '<p class="nt">Aucun plat pour le moment : ajoutez-en un ci-dessous.</p>'}
      </div>
      ${gone.length ? `<h4>↩ Plats supprimés</h4><div class="opts">${gone.map(id => `<button type="button" onclick="restoreItem('${id}')">↩ ${esc(base[id].n)}</button>`).join('')}</div>` : ''}
      <h4>➕ Ajouter un nouveau plat dans « ${esc(curCat.l)} »</h4>
      <div style="display:grid;grid-template-columns:1fr 90px auto;gap:8px;margin-top:8px;align-items:center">
        <input id="new_it_n" placeholder="Nom du nouveau plat" style="margin:0">
        <input id="new_it_p" type="number" step="0.05" placeholder="Prix €" style="margin:0">
        <button class="btn" style="min-height:44px;padding:0 16px" onclick="addNewItem(${curCat.i})">Ajouter</button>
      </div>
      <button class="btn" style="width:100%;margin-top:14px" onclick="saveMenuChanges()">💾 Enregistrer et mettre à jour la carte</button>

      <h4>🆕 Créer une nouvelle catégorie</h4>
      <div style="display:grid;grid-template-columns:64px 1fr auto;gap:8px;margin-top:8px;align-items:center">
        <input id="new_cat_e" value="🍽️" style="margin:0;text-align:center">
        <input id="new_cat_n" placeholder="Nom de la catégorie" style="margin:0">
        <button class="btn g" style="min-height:44px;padding:0 16px" onclick="addCat()">Créer</button>
      </div>
    `;
  } else if (tab === 'gal') {
    CF.gal = (CF.gal && CF.gal.length) ? CF.gal.filter(Boolean) : domGal();
    const curGal = CF.gal;
    const sl = banSlides();
    b.innerHTML = `
      <h4>🎞️ Grande bannière publicitaire animée</h4>
      <div class="seg">
        <button type="button" class="${String(getCfg('banOn')) !== '0' ? 'on' : ''}" onclick="setCfg('banOn','1');showAdmTab('gal')">✅ Affichée</button>
        <button type="button" class="${String(getCfg('banOn')) === '0' ? 'on' : ''}" onclick="setCfg('banOn','0');showAdmTab('gal')">🚫 Masquée</button>
      </div>
      <label>Durée de chaque photo (secondes)</label>
      <input id="c_banSec" type="number" min="2" max="20" value="${esc(getCfg('banSec'))}">
      <p class="nt">${CF.ban && CF.ban.length ? 'Bannière personnalisée.' : 'Bannière automatique : elle reprend les photos de la galerie. Modifiez une diapositive pour la personnaliser.'}</p>
      ${sl.map((s, i) => `
        <div class="bx2">
          <div style="display:grid;grid-template-columns:64px 1fr;gap:8px">
            <label class="up" title="Changer la photo" style="${s.img ? `background-image:url('${cssu(s.img)}')` : ''}">${s.img ? '' : '📷'}<input type="file" accept="image/*" hidden onchange="uploadBanImg(${i}, this)"></label>
            <div>
              <input value="${esc(s.title)}" placeholder="Grand titre (ex : Tacos XXL)" onchange="banE()[${i}].title=this.value">
              <input value="${esc(s.sub)}" placeholder="Texte (vide = « À partir de … € » automatique)" onchange="banE()[${i}].sub=this.value">
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:center">
            <input value="${esc(s.tag)}" placeholder="Étiquette (ex : 🔥 Nouveau)" onchange="banE()[${i}].tag=this.value" style="margin:0">
            ${catSel(s.go, `banE()[${i}].go=this.value`)}
            <button type="button" class="del" onclick="banE().splice(${i},1);showAdmTab('gal')">🗑</button>
          </div>
        </div>`).join('')}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <button class="btn g" onclick="banE().push({img:'',title:'',sub:'',tag:'',go:'c0'});showAdmTab('gal')">➕ Ajouter une photo</button>
        <button class="btn g" onclick="delete CF.ban;showAdmTab('gal')">↩ Bannière automatique</button>
      </div>

      <h4>✨ Galerie « Nos incontournables »</h4>
      <label>Titre de la galerie</label>
      <input id="c_galTitle" value="${esc(getCfg('galTitle'))}">
      <div id="gal-list">
        ${curGal.map((g, idx) => `
          <div class="bx2">
            <div style="display:grid;grid-template-columns:64px 1fr;gap:8px">
              <label class="up" title="Changer la photo" style="${g.img ? `background-image:url('${cssu(g.img)}')` : ''}">${g.img ? '' : '📷'}<input type="file" accept="image/*" hidden onchange="uploadGalImg(${idx}, this)"></label>
              <div>
                <input value="${esc(g.title)}" placeholder="Titre (ex: Dürüms)" onchange="CF.gal[${idx}].title=this.value">
                <input value="${esc(g.sub)}" placeholder="Petit texte (ex: Voir la carte →)" onchange="CF.gal[${idx}].sub=this.value">
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:6px;align-items:center">
              ${catSel(g.go, `CF.gal[${idx}].go=this.value`)}
              <button type="button" class="del" onclick="CF.gal.splice(${idx},1);showAdmTab('gal')">🗑</button>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="btn g" style="width:100%" onclick="CF.gal.push({img:'',title:'',sub:'Voir la carte →',go:'c0'});showAdmTab('gal')">➕ Ajouter une carte à la galerie</button>

      <h4>🎨 Logo, Fond & Couleurs du site</h4>
      <label>Logo du site (URL ou importer une image)</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input id="c_logoUrl" value="${esc(getCfg('logoUrl'))}" style="margin:0;flex:1">
        <label class="btn g" style="min-height:42px;padding:0 14px;cursor:pointer">📷 Choisir<input type="file" accept="image/*" hidden onchange="uploadCfgImg('logoUrl', this)"></label>
      </div>
      <label>Photo de fond de l'en-tête</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input id="c_heroBg" value="${esc(getCfg('heroBg'))}" placeholder="Par défaut : 1re photo de la galerie" style="margin:0;flex:1">
        <label class="btn g" style="min-height:42px;padding:0 14px;cursor:pointer">📷 Choisir<input type="file" accept="image/*" hidden onchange="uploadCfgImg('heroBg', this)"></label>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px">
        <div><label>Couleur Fond</label><input type="color" id="c_bgCol" value="${esc(getCfg('bgCol'))}" style="height:42px;padding:4px"></div>
        <div><label>Couleur Cartes</label><input type="color" id="c_cardCol" value="${esc(getCfg('cardCol'))}" style="height:42px;padding:4px"></div>
        <div><label>Couleur Or</label><input type="color" id="c_goldCol" value="${esc(getCfg('goldCol'))}" style="height:42px;padding:4px"></div>
      </div>
      <button class="btn" style="width:100%;margin-top:12px" onclick="saveDesignCfg()">💾 Enregistrer la bannière, la galerie & le design</button>
    `;
  } else if (tab === 'opt') {
    const ps = (CF.pays || DEFAULT_PAYS.map(p => ({ ...p }))).filter(Boolean);
    CF.pays = ps;
    b.innerHTML = `
      <h4>💳 Moyens de paiement proposés</h4>
      <label>Titre de la zone paiement dans le panier</label>
      <input id="c_payTitle" value="${esc(getCfg('payTitle'))}">
      ${ps.map((p, i) => `
        <div class="bx2">
          <div class="pl">
            <input type="checkbox" title="Actif" ${p.on !== false ? 'checked' : ''} onchange="CF.pays[${i}].on=this.checked">
            <input style="width:52px;text-align:center" value="${esc(p.e)}" onchange="CF.pays[${i}].e=this.value">
            <input data-pn style="flex:1" value="${esc(p.n)}" placeholder="Nom du mode de paiement" onchange="CF.pays[${i}].n=this.value">
            <button type="button" class="del" onclick="CF.pays.splice(${i},1);showAdmTab('opt')">🗑</button>
          </div>
          <input style="margin:6px 0" value="${esc(p.info)}" placeholder="Message pour le client (ex : scannez le QR code au comptoir)" onchange="CF.pays[${i}].info=this.value">
          <input style="margin:0 0 6px" value="${esc(p.link)}" placeholder="Lien de paiement https://… (facultatif)" onchange="CF.pays[${i}].link=this.value">
          <label class="pl" style="margin:0"><input type="checkbox" ${p.bank ? 'checked' : ''} onchange="CF.pays[${i}].bank=this.checked"> Compte bancaire + QR code de virement pré-rempli</label>
          <label class="pl" style="margin:0"><input type="checkbox" ${p.qr ? 'checked' : ''} onchange="CF.pays[${i}].qr=this.checked"> Afficher aussi le lien de paiement en QR code</label>
        </div>
      `).join('')}
      <button class="btn g" style="width:100%" onclick="CF.pays.push({on:true,e:'💳',n:'',info:'',link:'',bank:false,qr:false});showAdmTab('opt')">➕ Ajouter un mode de paiement</button>

      <h4>⚡ Paiement en ligne (Mollie : Bancontact, Payconiq, cartes, Apple Pay, Google Pay)</h4>
      <div class="seg">
        <button type="button" class="${String(getCfg('molOn')) === '1' ? 'on' : ''}" onclick="setCfg('molOn','1');showAdmTab('opt')">✅ Activé</button>
        <button type="button" class="${String(getCfg('molOn')) !== '1' ? 'on' : ''}" onclick="setCfg('molOn','0');showAdmTab('opt')">🚫 Désactivé</button>
      </div>
      <p class="nt">Le client paie avant l'envoi ; la commande arrive en cuisine seulement si le paiement est accepté, avec la mention « ✅ Payé en ligne » vérifiée auprès de Mollie. L'argent est versé par Mollie sur le compte bancaire enregistré chez Mollie. N'activez qu'après avoir mis votre clé Mollie dans Supabase (voir README).</p>
      <label>Nom affiché au client</label>
      <input id="c_molName" value="${esc(getCfg('molName'))}">
      <label>Explication affichée au client</label>
      <input id="c_molInfo" value="${esc(getCfg('molInfo'))}">
      <label>Adresse du service de paiement (ne pas changer)</label>
      <input id="c_molFn" value="${esc(getCfg('molFn'))}" autocomplete="off">
      <button type="button" class="btn g" style="width:100%;margin-top:8px" onclick="molTest()">🔎 Tester la connexion Mollie</button>

      <h4>🏦 Compte bancaire (affiché pour les modes cochés ci-dessus)</h4>
      <label>Titulaire du compte</label>
      <input id="c_bankHolder" value="${esc(getCfg('bankHolder'))}" placeholder="Ex : Haythem Food SRL">
      <label>IBAN</label>
      <input id="c_bankIban" value="${esc(getCfg('bankIban'))}" placeholder="BE00 0000 0000 0000" autocomplete="off">
      <label>BIC</label>
      <input id="c_bankBic" value="${esc(getCfg('bankBic'))}" placeholder="Ex : GEBABEBB" autocomplete="off">
      <label>Nom de la banque</label>
      <input id="c_bankName" value="${esc(getCfg('bankName'))}">
      <label>Consigne pour le client (communication du virement…)</label>
      <input id="c_bankNote" value="${esc(getCfg('bankNote'))}">

      <h4>🎁 Carte de fidélité</h4>
      <div class="seg">
        <button type="button" class="${String(getCfg('loyOn')) === '1' ? 'on' : ''}" onclick="setCfg('loyOn','1');showAdmTab('opt')">✅ Activée</button>
        <button type="button" class="${String(getCfg('loyOn')) !== '1' ? 'on' : ''}" onclick="setCfg('loyOn','0');showAdmTab('opt')">🚫 Désactivée</button>
      </div>
      <label>Nombre de commandes pour obtenir le cadeau</label>
      <input id="c_loyN" type="number" min="2" max="50" value="${esc(getCfg('loyN'))}">
      <label>Cadeau offert (affiché au client et sur le ticket cuisine)</label>
      <input id="c_loyGift" value="${esc(getCfg('loyGift'))}">

      <h4>🥤 Suggestion dans le panier</h4>
      <div class="seg">
        <button type="button" class="${String(getCfg('upOn')) !== '0' ? 'on' : ''}" onclick="setCfg('upOn','1');showAdmTab('opt')">✅ Activée</button>
        <button type="button" class="${String(getCfg('upOn')) === '0' ? 'on' : ''}" onclick="setCfg('upOn','0');showAdmTab('opt')">🚫 Désactivée</button>
      </div>
      <label>Phrase affichée</label>
      <input id="c_upTitle" value="${esc(getCfg('upTitle'))}">
      <label>Catégories proposées (séparées par une virgule)</label>
      <input id="c_upCats" value="${esc(getCfg('upCats'))}">
      <label>Petite fenêtre juste avant l'envoi (une fois par commande, s'il manque une boisson ou un dessert)</label>
      <div class="seg">
        <button type="button" class="${String(getCfg('upAsk')) !== '0' ? 'on' : ''}" onclick="setCfg('upAsk','1');showAdmTab('opt')">✅ Activée</button>
        <button type="button" class="${String(getCfg('upAsk')) === '0' ? 'on' : ''}" onclick="setCfg('upAsk','0');showAdmTab('opt')">🚫 Désactivée</button>
      </div>

      <h4>🌯 Choix Dürüm ou Sandwich</h4>
      <p class="nt">Proposé au client dès qu'il compose un plat de la catégorie indiquée. Laissez les choix vides pour supprimer cette étape.</p>
      <label>Catégorie concernée</label>
      <input id="c_mTypeCat" value="${esc(getCfg('mTypeCat'))}">
      <label>Les choix proposés (séparés par une virgule)</label>
      <input id="c_mTypes" value="${esc(getCfg('mTypes'))}">
      <label>Plats de cette catégorie qui n'ont pas ce choix</label>
      <input id="c_mTypeNo" value="${esc(getCfg('mTypeNo'))}">

      <h4>🥗 Accompagnements, Crudités & Boissons</h4>
      <label>Texte d'accompagnement affiché sous les catégories</label>
      <input id="c_accNote" value="${esc(getCfg('accNote'))}">
      <label>Prix du supplément boisson dans le menu (€)</label>
      <input id="c_dp" type="number" step="0.1" value="${getDP()}">
      <label>Liste des crudités (séparées par une virgule)</label>
      <textarea id="c_cru" rows="2">${esc(getCRU().join(', '))}</textarea>
      <label>Crudités exclues du bouton « Toutes les crudités »</label>
      <input id="c_cruNo" value="${esc(getCfg('cruNo'))}">
      <label>Liste des boissons proposées en option (séparées par une virgule)</label>
      <textarea id="c_drk" rows="2">${esc(getDRK().join(', '))}</textarea>

      <h4>➕ Suppléments payants</h4>
      <p class="nt">Les suppléments sont proposés pendant la composition d'un plat, avec leur prix. Ils viennent de la catégorie ci-dessous : pour changer un nom, un prix ou une photo, modifiez-la dans l'onglet « Menu ». Décochez « ➕ Suppléments » dans une catégorie pour ne pas les proposer sur ces plats.</p>
      <label>Catégorie qui contient les suppléments</label>
      <input id="c_supCat" value="${esc(getCfg('supCat'))}">
      <label>Suppléments à ne pas proposer (séparés par une virgule)</label>
      <input id="c_supNo" value="${esc(getCfg('supNo'))}">
      <label>Titre affiché au client</label>
      <input id="c_supTitle" value="${esc(getCfg('supTitle'))}">
      <p class="nt">Actuellement proposés : ${esc(getSUP().map(z => z.n + ' ' + eur(z.p)).join(' · ') || 'aucun')}</p>
      <h4>⚠️ Allergènes</h4>
      <p class="nt">En Belgique, l'information sur les allergènes doit toujours être disponible pour le client (arrêté royal du 17 juillet 2014). Tant qu'un plat n'a pas d'allergènes renseignés, sa fiche affiche la mention ci-dessous. Dès que vous les renseignez dans l'onglet « Menu », ils apparaissent à la place.</p>
      <label class="pl"><input type="checkbox" ${String(getCfg('algOn')) !== '0' ? 'checked' : ''} onchange="CF.cfg=CF.cfg||{};CF.cfg.algOn=this.checked?'1':'0'"> Afficher la mention allergènes</label>
      <label>Mention affichée</label>
      <input id="c_algNote" value="${esc(getCfg('algNote'))}">
      <p class="nt">Chaque plat affiche déjà des allergènes probables, déduits des recettes habituelles. <b>Ce sont des suggestions.</b> Tant que vous n'avez pas coché la case ci-dessous, la fiche du plat prévient le client que la liste est indicative.</p>
      <label class="pl"><input type="checkbox" ${String(getCfg('algChecked')) === '1' ? 'checked' : ''} onchange="CF.cfg=CF.cfg||{};CF.cfg.algChecked=this.checked?'1':'0'"> ✅ J'ai vérifié les allergènes de tous mes plats</label>
      <label>Phrase affichée une fois vérifié (traces en cuisine)</label>
      <input id="c_algCross" value="${esc(getCfg('algCross'))}">
      <p class="nt">Corrigés à la main : <b>${Object.values(I).filter(it => algOf(it)).length}</b> plats sur ${Object.keys(I).length} — les autres gardent la liste probable. Les 14 allergènes à déclarer : ${esc(ALG14.join(', '))}.</p>

      <h4>⚖️ Mentions légales</h4>
      <p class="nt">Un site d'entreprise belge doit afficher le numéro d'entreprise (BCE), une adresse e-mail et un numéro de téléphone. Ils apparaissent en bas du site.</p>
      <label>Numéro d'entreprise / TVA</label>
      <input id="c_bce" value="${esc(getCfg('bce'))}" placeholder="BE 0123.456.789">
      <label>Adresse e-mail de contact</label>
      <input id="c_mail" type="email" value="${esc(getCfg('mail'))}" placeholder="contact@haythemfood.com">

      <h4>🧾 Numéros de commande</h4>
      <p class="nt">Le compteur repart à ${esc(String(noCfg().start))} chaque nuit. Le numéro n'est pris qu'au moment où le client valide : plus de trous dans la série. Exemple aujourd'hui : <b>${esc(noFmt(noCfg().start))}</b>, <b>${esc(noFmt(noCfg().start + 1))}</b>, <b>${esc(noFmt(noCfg().start + 2))}</b>…</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div><label style="margin-top:0">Préfixe (facultatif)</label><input id="c_noPre" value="${esc(getCfg('noPre'))}" placeholder="Ex : W" style="margin:0"></div>
        <div><label style="margin-top:0">Nombre de chiffres</label><input id="c_noPad" type="number" min="1" max="4" value="${esc(String(noCfg().pad))}" style="margin:0"></div>
        <div><label style="margin-top:0">Premier numéro du jour</label><input id="c_noStart" type="number" min="1" value="${esc(String(noCfg().start))}" style="margin:0"></div>
        <div><label style="margin-top:0">Série hors ligne</label><input id="c_noOff" type="number" min="1" value="${esc(String(noCfg().off))}" style="margin:0"></div>
      </div>
      <p class="nt">Le préfixe sert à distinguer les commandes du site de celles de la borne (ex. « W12 » et « B12 »). Si Firebase est injoignable, le client reçoit un numéro de la série hors ligne, affiché en rouge sur l'écran cuisine.</p>
      <p class="nt" id="c_noNow">Numéros déjà donnés aujourd'hui : …</p>
      <button class="btn g" style="width:100%" onclick="resetNo()">🔄 Remettre le compteur du jour à zéro</button>

      <button class="btn" style="width:100%;margin-top:12px" onclick="saveOptCfg()">💾 Enregistrer les options & paiements</button>
    `;
    showNoCount();
  } else if (tab === 'bak') {
    b.innerHTML = `
      <h4>🔒 Sécurité</h4>
      <label>Nouveau code secret (Cuisine & Admin) — laisser vide pour garder le code actuel</label>
      <input id="c_PIN" type="password" inputmode="numeric" autocomplete="new-password" placeholder="4 chiffres minimum">
      <label>URL Firebase Realtime Database</label>
      <input id="c_DB" value="${esc(getCfg('DB'))}">
      <button class="btn" style="width:100%;margin-top:8px" onclick="saveSecCfg()">💾 Enregistrer la sécurité</button>

      <h4>🔐 Verrou Firebase (protège les prix et les réglages)</h4>
      <p class="nt">Une fois les règles installées dans Firebase, seuls les appareils qui ont ce mot de passe peuvent modifier le site. ${WK() ? '✅ Cet appareil a un mot de passe enregistré.' : '⚠ Aucun mot de passe sur cet appareil.'}</p>
      <label>Mot de passe Firebase (8 caractères minimum, différent du code cuisine)</label>
      <input id="c_fbpw" type="password" autocomplete="new-password" placeholder="Lettres et chiffres">
      <div style="display:grid;gap:8px">
        <button class="btn" onclick="setLock()">🔒 Créer ou changer le mot de passe</button>
        <button class="btn g" onclick="useLock()">📱 Autoriser cet appareil avec un mot de passe existant</button>
        <button class="btn g" onclick="testLock()">🧪 Tester le verrou</button>
      </div>
      <p class="nt" id="lock_m" style="color:var(--g300);min-height:20px"></p>

      <h4>💾 Exporter / Importer ou Réinitialiser</h4>
      <p class="nt">Vous pouvez télécharger une copie de sauvegarde de tous vos réglages et photos, ou restaurer le site par défaut.</p>
      <div style="display:grid;gap:10px;margin-top:12px">
        <button class="btn" onclick="exportCfg()">⬇️ Télécharger la sauvegarde (JSON)</button>
        <label class="btn g" style="cursor:pointer">⬆️ Importer une sauvegarde (JSON)<input type="file" accept=".json,application/json" hidden onchange="importCfg(this)"></label>
        <button class="btn g" style="border-color:#e5484d;color:#ff9b9e" onclick="resetCfg()">🔄 Réinitialiser les valeurs d'origine</button>
      </div>
    `;
  }
};

function compressImage(file, maxW, cb) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      const scale = Math.min(1, maxW / Math.max(img.width, img.height));
      c.width = Math.round(img.width * scale);
      c.height = Math.round(img.height * scale);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      cb(c.toDataURL('image/webp', 0.8));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

window.updItem = (id, field, val) => {
  const it = I[id];
  const v = field === 'p' ? +val : val;
  if (it && it.isAdded) {
    CF.added[it.cat][it.addIdx][field] = v;
  } else {
    CF.ov = CF.ov || {};
    CF.ov[id] = CF.ov[id] || {};
    CF.ov[id][field] = v;
  }
};

window.updVar = (id, val) => {
  CF.var = CF.var || {};
  CF.var[id] = vParse(val);
};

window.delItem = id => {
  const it = I[id];
  if (!it || !confirm('Supprimer « ' + full(it) + ' » de la carte ?')) return;
  updItem(id, 'del', true);
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('menu');
  toast('Plat supprimé ✔');
};

window.restoreItem = id => {
  if (CF.ov && CF.ov[id]) delete CF.ov[id].del;
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('menu');
  toast('Plat restauré ✔');
};

window.updCat = (i, field, val) => {
  CF.cat = CF.cat || {};
  CF.cat[i] = CF.cat[i] || {};
  CF.cat[i][field] = val;
};

window.updCatOpt = (i, k, on) => {
  const c = cats.find(c => c.i === i);
  if (!c) return;
  const cur = opt({ cat: c.n });
  CF.opt = CF.opt || {};
  CF.opt[c.n] = [...'rsb'].filter(x => x === k ? on : cur.includes(x)).join('');
};

window.addCat = () => {
  const n = $('#new_cat_n').value.replace(/[|;.#$\/\[\]\n]/g, ' ').replace(/\s+/g, ' ').trim();
  const e = $('#new_cat_e').value.replace(/[|;\n]/g, '').trim() || '🍽️';
  if (!n) { toast('Veuillez entrer un nom de catégorie'); return; }
  if (cats.some(c => c.n.toLowerCase() === n.toLowerCase())) { toast('Cette catégorie existe déjà'); return; }
  CF.customD = (CF.customD || DEFAULT_D).replace(/\n+$/, '') + '\n' + n + '|' + e + '||';
  Store.saveConfig(CF);
  build();
  upd();
  window._admCat = cats[cats.length - 1].i;
  showAdmTab('menu');
  toast('Catégorie créée ✔ Ajoutez maintenant ses plats');
};

window.addNewItem = ci => {
  const cat = cats.find(c => c.i === ci);
  const n = $('#new_it_n').value.trim();
  const p = parseFloat($('#new_it_p').value);
  if (!cat || !n || isNaN(p)) { toast('Veuillez entrer un nom et un prix'); return; }
  CF.added = CF.added || {};
  CF.added[cat.n] = CF.added[cat.n] || [];
  CF.added[cat.n].push({ n, p, out: false });
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('menu');
  toast('Plat ajouté ✔');
};

window.uploadItemPhoto = (id, input) => {
  const f = input.files && input.files[0];
  if (!f) return;
  compressImage(f, 560, dataUrl => {
    CF.ph = CF.ph || {};
    const it = I[id];
    CF.ph[id] = dataUrl;
    if (it) CF.ph[fk(it.cat + '|' + (base[id] ? base[id].n : it.n))] = dataUrl;
    Store.saveConfig(CF);
    build();
    upd();
    showAdmTab('menu');
    toast('Photo du plat enregistrée ✔');
  });
};

window.uploadCfgImg = (key, input) => {
  const f = input.files && input.files[0];
  if (!f) return;
  compressImage(f, 800, dataUrl => {
    CF.cfg = CF.cfg || {};
    CF.cfg[key] = dataUrl;
    $('#c_' + key).value = dataUrl;
    Store.saveConfig(CF);
    applySiteSettings();
    toast('Image mise à jour ✔');
  });
};

window.uploadGalImg = (idx, input) => {
  const f = input.files && input.files[0];
  if (!f) return;
  compressImage(f, 640, dataUrl => {
    CF.gal[idx].img = dataUrl;
    Store.saveConfig(CF);
    applySiteSettings();
    showAdmTab('gal');
    toast('Photo de galerie mise à jour ✔');
  });
};

window.uploadBanImg = (idx, input) => {
  const f = input.files && input.files[0];
  if (!f) return;
  compressImage(f, 1000, dataUrl => {
    banE()[idx].img = dataUrl;
    Store.saveConfig(CF);
    applySiteSettings();
    showAdmTab('gal');
    toast('Photo de bannière mise à jour ✔');
  });
};

window.saveGenCfg = () => {
  CF.cfg = CF.cfg || {};
  ['title', 'sub', 'badges', 'promo', 'openText', 'closedText', 'WA', 'tel', 'maps', 'review', 'footer', 'delvTitle', 'delvBadge', 'delvText', 'delvApps'].forEach(k => {
    const el = $('#c_' + k);
    if (el) CF.cfg[k] = el.value.trim();
  });
  if ($('#c_h0')) CF.cfg.hours = DAYS.map((d, i) => $('#c_h' + i).value.replace(/,/g, ' ').trim()).join(',');
  Store.saveConfig(CF);
  build();
  upd();
  toast('Réglages enregistrés ✔');
};

window.saveSecCfg = () => {
  CF.cfg = CF.cfg || {};
  const p = $('#c_PIN').value.trim();
  if (p && p.length < 4) { toast('Le code doit contenir au moins 4 caractères'); return; }
  if (p) { CF.cfg.PINH = pinHash(p); delete CF.cfg.PIN; }
  CF.cfg.DB = $('#c_DB').value.trim();
  Store.saveConfig(CF);
  $('#c_PIN').value = '';
  toast(p ? 'Nouveau code enregistré ✔' : 'Sécurité enregistrée ✔');
};

const lockMsg = m => { const e = $('#lock_m'); if (e) e.textContent = m; toast(m); };
const lockPw = () => {
  const p = ($('#c_fbpw') || {}).value || '';
  if (p.trim().length < 8) { lockMsg('Le mot de passe doit contenir au moins 8 caractères'); return ''; }
  return p;
};
window.setLock = async () => {
  const p = lockPw();
  if (!p || !getDB()) return;
  try {
    const code = await rootPatch({ secret: wkHash(p), proof: proof(WK()) });
    if (code === 200) { st('hfwk', wkHash(p)); showAdmTab('bak'); lockMsg('🔒 Mot de passe Firebase enregistré ✔ Notez-le bien.'); }
    else lockMsg('Refusé : un mot de passe existe déjà. Autorisez d’abord cet appareil avec l’ancien.');
  } catch (e) { lockMsg('Réseau indisponible'); }
};
window.useLock = async () => {
  const p = lockPw();
  if (!p) return;
  st('hfwk', wkHash(p));
  showAdmTab('bak');
  await testLock();
};
window.testLock = async () => {
  if (!getDB()) return;
  const t = { '.sv': 'timestamp' };
  try {
    if (await rootPatch({ 'site_config/_t': t, proof: proof('x') }) === 200) { lockMsg('⚠ Verrou NON actif : les règles Firebase ne sont pas encore installées.'); return; }
    if (!WK()) { lockMsg('🔒 Verrou actif. Cet appareil n’a pas encore le mot de passe.'); return; }
    lockMsg(await rootPatch({ 'site_config/_t': t, proof: proof(WK()) }) === 200 ? '✅ Verrou actif et cet appareil est autorisé.' : '🔒 Verrou actif, mais le mot de passe de cet appareil est refusé.');
  } catch (e) { lockMsg('Réseau indisponible'); }
};

window.saveMenuChanges = () => {
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('menu');
  toast('Carte et prix mis à jour ✔');
};

window.saveDesignCfg = () => {
  CF.cfg = CF.cfg || {};
  ['logoUrl', 'heroBg', 'bgCol', 'cardCol', 'goldCol', 'galTitle'].forEach(k => {
    const el = $('#c_' + k);
    if (el) CF.cfg[k] = el.value.trim();
  });
  CF.cfg.banSec = Math.min(20, Math.max(2, parseFloat($('#c_banSec').value) || 5));
  Store.saveConfig(CF);
  build();
  upd();
  toast('Bannière, galerie & design enregistrés ✔');
};

window.saveOptCfg = () => {
  CF.cfg = CF.cfg || {};
  ['payTitle', 'molName', 'molInfo', 'molFn', 'bankHolder', 'bankIban', 'bankBic', 'bankName', 'bankNote', 'accNote', 'upTitle', 'upCats', 'loyGift', 'mTypeCat', 'mTypes', 'mTypeNo', 'cruNo', 'supCat', 'supNo', 'supTitle', 'noPre', 'algNote', 'algCross', 'bce', 'mail'].forEach(k => {
    const el = $('#c_' + k);
    if (el) CF.cfg[k] = el.value.trim();
  });
  CF.cfg.loyN = Math.min(50, Math.max(2, Math.round(parseFloat($('#c_loyN').value)) || 10));
  CF.cfg.noPad = Math.min(4, Math.max(1, Math.round(parseFloat($('#c_noPad').value)) || 1));
  CF.cfg.noStart = Math.max(1, Math.round(parseFloat($('#c_noStart').value)) || 1);
  CF.cfg.noOff = Math.max(1, Math.round(parseFloat($('#c_noOff').value)) || 900);
  CF.cfg.dp = parseFloat($('#c_dp').value) || 1.5;
  CF.cru = $('#c_cru').value.split(',').map(s => s.trim()).filter(Boolean);
  CF.drk = $('#c_drk').value.split(',').map(s => s.trim()).filter(Boolean);
  CF.pays = (CF.pays || []).filter(p => p && String(p.n || '').trim());
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('opt');
  toast('Options & paiements enregistrés ✔');
};

/* Remet la série du jour à zéro (après des essais, par exemple) */
window.resetNo = async () => {
  const DB = getDB();
  if (!DB) { toast('Firebase non configuré'); return; }
  if (!confirm('Remettre le compteur du jour à ' + noFmt(noCfg().start) + ' ?\n\nÀ ne faire que si aucune vraie commande n’a encore été passée aujourd’hui : sinon deux clients auraient le même numéro.')) return;
  try {
    await fetch(DB + '/q/' + bday() + '.json', { method: 'DELETE' });
    st('hfno', null);
    toast('Compteur du jour remis à ' + noFmt(noCfg().start) + ' ✔');
    showNoCount();
  } catch (e) { toast('Réseau indisponible'); }
};
async function showNoCount() {
  const el = $('#c_noNow');
  if (!el) return;
  const n = await noToday();
  el.innerHTML = n == null ? 'Numéros déjà donnés aujourd’hui : <b>—</b> (Firebase injoignable)'
    : 'Numéros déjà donnés aujourd’hui : <b>' + n + '</b>' + (n ? ' · prochain : <b>' + esc(noFmt(noCfg().start + n)) + '</b>' : '');
}

/* Pré-remplit les allergènes probables d'une catégorie. Le restaurateur doit
   les vérifier : seuls ses fournisseurs et ses recettes font foi. */
window.fillAlg = i => {
  const c = cats[i];
  if (!c) return;
  const todo = c.items.filter(it => !algOf(it) && algSug(it));
  if (!todo.length) { toast('Rien à pré-remplir ici'); return; }
  if (!confirm('Je recopie les allergènes probables de ' + todo.length + ' plat(s) de « ' + c.l + ' » dans leurs champs, pour que vous puissiez les corriger un par un.\n\nRien ne change pour le client : ces allergènes sont déjà affichés. Continuer ?')) return;
  todo.forEach(it => updItem(it.id, 'a', algSug(it)));
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('menu');
  toast(todo.length + ' plat(s) pré-remplis — à vérifier !');
};

window.exportCfg = () => {
  const blob = new Blob([JSON.stringify(CF, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'haythemfood-reglages.json';
  a.click();
};

window.importCfg = input => {
  const f = input.files && input.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      CF = JSON.parse(e.target.result) || {};
      Store.saveConfig(CF);
      build();
      upd();
      showAdmTab('gen');
      toast('Sauvegarde importée ✔');
    } catch (err) { toast('Fichier invalide'); }
  };
  r.readAsText(f);
};

window.resetCfg = () => {
  if (!confirm('Voulez-vous vraiment remettre tous les prix et réglages par défaut ?')) return;
  CF = {};
  localStorage.removeItem('hfc');
  Store.saveConfig(CF);
  build();
  upd();
  showAdmTab('gen');
  toast('Site réinitialisé ✔');
};

/* ---- Navigation ---- */
/* L'écran cuisine et l'écran d'attente ont leur propre adresse : /cuisine/ et /file/.
   Le site des clients ne les affiche plus ; les anciens liens #cuisine / #file y renvoient. */
const SCR = window.HF_SCREEN || '';
async function route() {
  if (!SCR && (location.hash === '#cuisine' || location.hash === '#file')) { location.replace('/' + location.hash.slice(1) + '/'); return; }
  const k = SCR === 'cuisine', f = SCR === 'file';
  if (k && !kok) {
    while (!kok) { if (await askPin('Code cuisine')) kok = true; }
    setTimeout(() => { try { window.kioskGo && kioskGo(); } catch (e) {} }, 60);
  }
  document.body.classList.toggle('k', k);
  document.body.classList.toggle('f', f);
  FV = f;
  if ($('#kt')) $('#kt').style.display = k ? 'flex' : 'none';
  if (k) { first = true; seen = new Set(); kload(); opnDraw(); }
  if (k || f) scrWake();
  if (f) { fprev = null; fload(); }
}
addEventListener('hashchange', route);
/* écran toujours allumé (cuisine et écran d'attente), repris quand l'écran revient */
let SWL = null;
async function scrWake() { try { if (navigator.wakeLock && (!SWL || SWL.released)) SWL = await navigator.wakeLock.request('screen'); } catch (e) {} }
document.addEventListener('visibilitychange', () => { if (!document.hidden && (document.body.classList.contains('k') || FV)) { SWL = null; scrWake(); } });

const initDBEvents = () => {
  const DB = getDB();
  /* seuls l'écran cuisine et l'écran d'attente écoutent les commandes en direct :
     le site des clients ne télécharge plus la liste de toutes les commandes */
  if (!DB || !SCR) return;
  try {
    const es = new EventSource(DB + '/orders.json');
    ['put', 'patch'].forEach(t => es.addEventListener(t, () => {
      if (kok && document.body.classList.contains('k')) kload();
      if (FV) fload();
    }));
  } catch (e) {}
};
initDBEvents();

try { new BroadcastChannel('hf').onmessage = () => { if (kok) kload(); if (FV) fload(); }; } catch (e) {}
addEventListener('storage', e => { if (e.key === 'hfq') { if (kok) kload(); if (FV) fload(); } });
setInterval(() => { if (document.body.classList.contains('k')) kload(); if (FV) fload(); }, 2500);

function go(h) { $('#adm').classList.remove('on'); if (h === SCR) return; location.href = '/' + (h ? h + '/' : ''); }

let lt = 0, lc = 0;
$('.logo').addEventListener('click', () => {
  const n = Date.now();
  lc = n - lt > 1500 ? 1 : lc + 1;
  lt = n;
  if (lc >= 5) {
    lc = 0;
    openAdmin();
  }
});

build();
upd();
route();


/* =====================================================================
   MODE KIOSQUE : écran cuisine (#cuisine) et écran d'attente (#file)
   Plein écran au premier toucher, écran toujours allumé, retour bloqué,
   sortie uniquement avec le code PIN.
   ===================================================================== */
(() => {
  const css = document.createElement('style');
  css.textContent = `#kso{position:fixed;inset:0;z-index:99990;display:none;align-items:center;justify-content:center;background:#05070dee;color:#f3cf63;text-align:center;cursor:pointer}
#kso.on{display:flex}#kso b{display:block;font-size:64px;margin-bottom:8px;animation:pvp 2s ease-in-out infinite}#kso p{margin:0;font:700 26px/1.3 Cinzel,Georgia,serif}#kso small{display:block;margin-top:8px;color:#cfd6e4;font-size:16px}
#ksx{position:fixed;right:12px;bottom:12px;z-index:99980;width:44px;height:44px;border-radius:50%;border:1px solid #d4af3766;background:#0b1430cc;color:#f3cf63;font-size:20px;display:none;opacity:.55;cursor:pointer}
body.ks #ksx{display:block}body:has(#pin) #kso,body:has(#pin) #ksx{display:none!important}#ksx:hover{opacity:1}
body.ks{user-select:none;-webkit-user-select:none;overscroll-behavior:none}`;
  document.head.appendChild(css);
  const ov = document.createElement('div');
  ov.id = 'kso';
  ov.innerHTML = '<div><b>🔒</b><p>Mode kiosque</p><small>Touchez l’écran pour passer en plein écran</small></div>';
  const bx = document.createElement('button');
  bx.id = 'ksx'; bx.type = 'button'; bx.title = 'Quitter le mode kiosque'; bx.textContent = '🔒';
  document.body.append(ov, bx);

  const view = () => document.body.classList.contains('k') || document.body.classList.contains('f');
  const pref = () => st('hfkiosk') !== 0;
  const de = document.documentElement;
  const canFS = () => !!(de.requestFullscreen || de.webkitRequestFullscreen);
  const inFS = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
  let paused = false, armed = false, allow = false, wl = null, lockH = null;
  const active = () => view() && pref() && !paused;
  const goFS = () => { try { const r = de.requestFullscreen ? de.requestFullscreen({ navigationUI: 'hide' }) : de.webkitRequestFullscreen(); if (r && r.catch) r.catch(() => {}); } catch (e) {} };
  const exitFS = () => { try { if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen(); else if (document.webkitExitFullscreen && document.webkitFullscreenElement) document.webkitExitFullscreen(); } catch (e) {} };
  const wake = async () => { try { if (navigator.wakeLock && (!wl || wl.released)) wl = await navigator.wakeLock.request('screen'); } catch (e) {} };
  /* appelé juste après le bon code PIN (le clavier compte comme un geste : plein écran direct) */
  window.kioskGo = () => { if (!active() || inFS() || !canFS()) return; armed = true; goFS(); setTimeout(sync, 400); };
  const sync = window.kioskSync = () => {
    const a = active();
    if (a) lockH = location.hash; else if (paused || !pref()) lockH = null;
    document.body.classList.toggle('ks', a);
    ov.classList.toggle('on', a && armed && canFS() && !inFS());
    if (a) wake();
    if (a && !armed && canFS() && !inFS()) { armed = true; ov.classList.add('on'); }
    else if (!pref() && inFS() && view()) exitFS();
  };
  const unlock = async title => {
    const ok = await askPin(title || 'Code pour quitter le mode kiosque');
    if (ok) { allow = true; lockH = null; setTimeout(() => { allow = false; }, 1500); }
    return ok;
  };

  // premier toucher : plein écran
  document.addEventListener('pointerdown', e => {
    if (!active() || inFS() || !canFS() || e.target.closest('#pin')) return;
    armed = true; goFS(); setTimeout(sync, 300);
  }, true);
  ov.addEventListener('click', () => { goFS(); setTimeout(sync, 300); });
  ['fullscreenchange', 'webkitfullscreenchange'].forEach(ev => document.addEventListener(ev, () => setTimeout(sync, 60)));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { wl = null; sync(); } });
  document.addEventListener('contextmenu', e => { if (active()) e.preventDefault(); });

  // bouton 🔒 : quitter le kiosque (on reste sur l'écran)
  bx.addEventListener('click', async e => {
    e.stopPropagation();
    if (await unlock()) { paused = true; exitFS(); sync(); }
  });

  // boutons de navigation (ex. « ⬅ Écran client ») : code PIN demandé
  const _go = go;
  go = async h => {
    if (active() && '#' + h !== location.hash && !allow) {
      if (!(await unlock())) return;
      exitFS();
    }
    _go(h);
  };

  // retour arrière / changement d'adresse : bloqué sans code
  addEventListener('hashchange', () => {
    if (lockH !== null && location.hash !== lockH && !allow) {
      const target = location.hash, back = lockH;
      history.replaceState(null, '', back || location.pathname + location.search);
      route();
      unlock().then(ok => { if (ok) { exitFS(); location.hash = target; } });
      return;
    }
    setTimeout(sync, 80);
  });
  // l'écran change (cuisine / file / client) : on réévalue le kiosque
  let lastV = view();
  new MutationObserver(() => { const v = view(); if (v !== lastV) { lastV = v; if (v) paused = false; sync(); } })
    .observe(document.body, { attributes: true, attributeFilter: ['class'] });
  setTimeout(sync, 500);
})();
