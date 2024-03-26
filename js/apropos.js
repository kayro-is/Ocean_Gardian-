document.getElementById('search-btn').addEventListener('click', function(){
    window.location.href = "../html/connexion.html";
  })

// Sélectionne tous les éléments d'item dans le slider.
let items = document.querySelectorAll('.slider .list .item');
// Sélectionne l'élément bouton "suivant".
let next = document.getElementById('next');
// Sélectionne l'élément bouton "précédent".
let prev = document.getElementById('prev');
// Sélectionne tous les éléments d'item dans la zone des vignettes (thumbnails).
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Configuration initiale
let countItem = items.length; // Nombre total d'items dans le slider.
let itemActive = 0; // Index de l'item actuellement actif.

// Gestion de l'événement de clic sur le bouton "suivant".
next.onclick = function(){
    itemActive = itemActive + 1; // Incrémente l'index de l'item actif.
    if(itemActive >= countItem){ // Si l'index dépasse le nombre d'items, il repart à 0.
        itemActive = 0;
    }
    showSlider(); // Met à jour l'affichage du slider.
}

// Gestion de l'événement de clic sur le bouton "précédent".
prev.onclick = function(){
    itemActive = itemActive - 1; // Décrémente l'index de l'item actif.
    if(itemActive < 0){ // Si l'index est inférieur à 0, il passe au dernier item.
        itemActive = countItem - 1;
    }
    showSlider(); // Met à jour l'affichage du slider.
}

// Initialise le défilement automatique du slider.
let refreshInterval = setInterval(() => {
    next.click(); // Simule un clic sur le bouton "suivant" toutes les 5 secondes.
}, 5000)

// Fonction pour mettre à jour l'affichage du slider.
function showSlider(){
    // Supprime la classe 'active' de l'item et de la vignette actuellement actifs.
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Ajoute la classe 'active' au nouvel item et à la nouvelle vignette actifs.
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Réinitialise le défilement automatique pour éviter les déclenchements multiples.
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click(); // Relance le défilement automatique.
    }, 5000)
}

// Ajoute des écouteurs d'événements sur chaque vignette.
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index; // Met à jour l'index de l'item actif avec celui de la vignette cliquée.
        showSlider(); // Met à jour l'affichage du slider.
    })
})
