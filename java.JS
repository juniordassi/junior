// Sélectionnez le bouton de partage WhatsApp
const whatsappButton = document.getElementById('whatsapp-share');

// Compteur de partages restants
let remainingShares = 10;

// Fonction pour partager sur WhatsApp
function shareOnWhatsApp() {
  if (remainingShares > 0) {
    remainingShares--;
    document.getElementById('remaining-shares').textContent = remainingShares;
    // Remplacez "votre-lien" par le lien de votre site
    let url = encodeURIComponent('votre-lien');
    window.open('https://api.whatsapp.com/send?text=' + url, '_blank');
    // Redirection vers YouTube après le partage
    if (remainingShares === 0) {
      window.location.href = "https://www.youtube.com/"; // Redirection vers YouTube
    }
  } else {
    alert("Vous avez déjà atteint le nombre maximum de partages !");
  }
}

// Ajoute un écouteur d'événements au bouton de partage WhatsApp
whatsappButton.addEventListener('click', shareOnWhatsApp);
