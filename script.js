
const scrollContainer = document.querySelector(".gallery");


const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");


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



document.addEventListener("DOMContentLoaded", function() {
    // Attendre que le DOM soit chargé

    // Fonction pour créer des divs
    function creerDivs(nombre) {
        for (let i = 0; i < nombre; i++) {
            // Créer une nouvelle div
            const nouvelleDiv = document.createElement("div");

            // Ajouter une classe à la div
            nouvelleDiv.className = "myDiv";

           
        
            // Ajouter la div à la nouvelle section
            document.querySelector(".gallery").appendChild(nouvelleDiv);
        }
    }

    // Appeler la fonction avec le nombre de divs que vous souhaitez créer
    creerDivs(7);
});

document.addEventListener("DOMContentLoaded",function() {

    const contenuDivs = [
    {

        image :"./images/im1.jpg",
        text : `<h1>Les baleines</h1> sont parmi les créatures marines les plus impressionnantes. Chaque année
        certaines espèces de baleines parcourent des milliers de kilomètres lors de leurs migrations
        Par exemple, la baleine à bosse peut voyager jusqu'à 25 000 kilomètres de l'Arctique à l'Antarctique 
        Ces migrations sont cruciales pour la survie de ces mammifères, et les scientifiques étudient activement
         ces comportements pour mieux comprendre `,
        lien :"https://fr.wikipedia.org/wiki/Portail:Oc%C3%A9an_Pacifique#:~:text=L'oc%C3%A9an%20Pacifique%2C%20qui%20s,'Asie%20(Japon%2C%20Philippines."
    },
    {
        image :"./images/im2.jpg",
        text : `<h1>Les dauphins</h1> sont réputés pour leur intelligence et leur capacité à communiquer de manière complexe. <br>
        Leurs clics, sifflements et vocalisations constituent un langage sophistiqué qui facilite la coordination dans la chasse,<br>
         la protection des petits, et même la transmission culturelle entre les groupes. Les chercheurs explorent ces formes de 
         communication pour mieux comprendre ..`,
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Atlantique"
    },
    {
        image :"./images/im3.jpg",
        text : `<h1>Les récifs coralliens</h1> abritent une vie marine extrêmement diversifiée. 
        Ces écosystèmes sous-marins agissent comme des "jardins" extraordinaires,
         fournissant une maison à une variété de poissons, <br>
         de crustacés et d'autres organismes marins.
          Malheureusement, les récifs coralliens sont menacés par le changement climatique et d'autres activités humaines,
           ce qui rend crucial leur protection et leur préservation.`,
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Indien"
    },
    {
        image :"./images/im4.jpg",
        text : `<h1>Les abysses océaniques</h1> abritent une multitude de créatures bioluminescentes qui 
        émettent de la lumière pour attirer leurs proies ou se camoufler. Des poissons aux 
        méduses, ces créatures étonnantes sont adaptées à un environnement où la lumière du soleil 
        ne pénètre pas. Les scientifiques explorent encore ces mystérieux fonds marins pour découvrir 
        de nouvelles espèces et comprendre les adaptations uniques de la vie marine des abysses..`,
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Austral"
    },
    {
        image :"./images/im5.jpg",
        text : `<h1>Les requins</h1> occupent les océans de notre planète depuis plus de 400 millions d'années, 
        bien avant l'apparition des dinosaures sur terre. Ces prédateurs marins, souvent mal compris et 
        représentés comme de simples machines à tuer, jouent en réalité un rôle crucial dans l'équilibre
         des écosystèmes marins. Loin d'être les monstres que l'on dépeint souvent, les requins sont des 
         créatures fascinantes qui méritent notre attention et notre respect.`,
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Arctique"
    },
    {

        image :"./images/im6.jpg",
        text : `<h1>La mer Méditerranée</h1> encerclée par trois continents - Europe, Asie, et Afrique - est une étendue 
        d'eau salée d'une richesse et d'une complexité extraordinaires. Elle a été le berceau de nombreuses civilisations
         qui ont marqué l'histoire humaine, et elle continue d'être un carrefour culturel, économique, et écologique vital. 
         Mais la Méditerranée est bien plus qu'une simple mer; c'est un écosystème unique en son genre, abritant une biodiversité 
         exceptionnelle .`,
        lien :"https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e"
    },
    {

        image :"./images/im7.jpg",
        text : `<h1>Les orques</h1> souvent appelées baleines tueuses à cause de leur nom anglais "killer whales",
         sont en réalité les plus grands membres de la famille des dauphins. Ces majestueux mammifères marins
          se distinguent par leur intelligence remarquable, leur comportement social complexe et leur répartition 
          géographique vaste, étant présents dans tous les océans du monde, des eaux glacées de l'Arctique et de 
          l'Antarctique jusqu'aux mers plus tempérées et .`,
        lien :"https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e"
    },
     
    ];

        // Fonction pour ajouter des images, du texte et des liens à des divs existantes


        function addDivs() {
            const divs = document.querySelectorAll(".myDiv");
    
            // Pour chaque div, mettre à jour son contenu en utilisant les informations du tableau
            divs.forEach((div, index) => {
                const contenu = contenuDivs[index];
    
                // Ajouter une balise img avec une image
                const newImg = document.createElement("img");
                newImg.src = contenu.image;
                newImg.alt = "image" + (index + 1);
                div.appendChild(newImg);
    
                // Ajouter du texte à la div
                const textDiv = document.createElement("p");
                textDiv.innerHTML = contenu.text;
                div.appendChild(textDiv);
    
                // Ajouter un lien à la div
                const lienDiv = document.createElement("a");
                lienDiv.href = contenu.lien;
                lienDiv.innerHTML = "Lire la suite";
                div.appendChild(lienDiv);
            });
        }
    
        addDivs();
    });



    // déclancher une animation CSS au moment ou un élément devient visible a l'écran lors du scroll

    document.addEventListener("DOMContentLoaded", () => {
        // Cet observateur déclenchera une fonction de rappel chaque fois qu'un élément observé entre ou sort de la zone visible.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { // Correction ici: retrait de parenthèses inutiles autour de "entry"
                if (entry.isIntersecting) {
                    entry.target.classList.add("fadeInUp");
                }
            });
        }, {
            // L'option threshold définit quel pourcentage de l'élément doit être visible pour déclencher la fonction de rappel.
            // Ici, dès que 10% de l'élément est visible, la fonction de rappel est déclenchée.
            threshold: 0.1
        });
    
        // Sélectionne tous les éléments h1 et h2 pour les observer.
        const introSections = document.querySelectorAll("h1, h2");
        introSections.forEach(section => {
            observer.observe(section); // Démarre l'observation pour chaque section sélectionnée.
        });
    });
