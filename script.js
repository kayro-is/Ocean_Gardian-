
const scrollContainer = document.querySelector(".gallery");


const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// Ajouter un écouteur d'événement pour le défilement avec la molette de la souris sur le conteneur de la galerie
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault(); // Empêcher le comportement de défilement par défaut pour un contrôle fin
    scrollContainer.scrollLeft += evt.deltaY; // Défiler horizontalement en fonction du mouvement vertical de la molette
    scrollContainer.style.scrollBehavior = "auto"; // Désactiver le défilement fluide pour les interactions de la molette de la souris
});

// Ajouter un écouteur d'événement sur le bouton "Suivant" pour faire défiler la galerie vers la droite
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"; // Activer le défilement fluide pour une expérience utilisateur agréable
    scrollContainer.scrollLeft += 800; 
});

// Ajouter un écouteur d'événement sur le bouton "Retour" pour faire défiler la galerie vers la gauche
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"; // Assurer que le défilement reste fluide lors du clic
    scrollContainer.scrollLeft -= 800; // Faire défiler le conteneur de 900 pixels vers la gauche
});


