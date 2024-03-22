// Initialise l'index de l'image actuellement visible à 0
let index = 0;

// Définit la fonction moveSlide, qui décale le carrousel d'un certain nombre de pas (step)
function moveSlide(step) {
    // Sélectionne toutes les images dans le carrousel en utilisant querySelectorAll et stocke dans 'slides'
    const slides = document.querySelectorAll(".carousel-images img");
    // Calcule le nombre total d'images dans le carrousel
    const totalSlides = slides.length;

    // Calcule le nouvel index en ajoutant le pas au index actuel,
    // en utilisant le modulo pour s'assurer que l'index reste dans les limites de la liste des images
    // Cela permet de boucler de la dernière image à la première et vice versa
    index = (index + step + totalSlides) % totalSlides;
    // Calcule la nouvelle valeur de transform pour décaler le carrousel, en utilisant l'index
    // Multiplie l'index par -100 pour obtenir un décalage en pourcentage correspondant à la largeur d'une image
    const newTransform = -index * 100 + "%";

    // Sélectionne le conteneur des images du carrousel pour appliquer la transformation
    const carouselImages = document.querySelector(".carousel-images");
    // Applique la transformation pour décaler le carrousel à la nouvelle image
    carouselImages.style.transform = `translateX(${newTransform})`;
}

// Appelle moveSlide avec 0 pour initialiser le carrousel et afficher la première image
moveSlide(0);
