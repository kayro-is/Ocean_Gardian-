document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".gallery");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Écouteur d'événement pour le bouton "Suivant"
    nextBtn.addEventListener("click", function() {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 800;
    });

    // Écouteur d'événement pour le bouton "Retour"
    backBtn.addEventListener("click", function() {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 800;
    });

    // Fonction pour créer des divs
    function creerDivs(nombre) {
        for (let i = 0; i < nombre; i++) {
            const nouvelleDiv = document.createElement("div");
            nouvelleDiv.className = "myDiv";
            document.querySelector(".gallery").appendChild(nouvelleDiv);
        }
    }

    creerDivs(7); // Supposons que vous souhaitiez créer 7 divs

    const contenuDivs = [
        {
    
            image :"./images/im1.jpg",
            text : `<h1>Les Baleines</h1> sont parmi les créatures marines les plus impressionnantes. Chaque année
            certaines espèces de baleines parcourent des milliers de kilomètres lors de leurs migrations
            Par exemple, la baleine à bosse peut voyager jusqu'à 25 000 kilomètres de l'Arctique à l'Antarctique 
            Ces migrations sont cruciales pour la survie de ces mammifères, et les scientifiques étudient activement
             ces comportements pour mieux comprendre `,
            lien :""
        },
        {
            image :"./images/im2.jpg",
            text : `<h1>Les Dauphins</h1> sont réputés pour leur intelligence et leur capacité à communiquer de manière complexe. <br>
            Leurs clics, sifflements et vocalisations constituent un langage sophistiqué qui facilite la coordination dans la chasse,<br>
             la protection des petits, et même la transmission culturelle entre les groupes. Les chercheurs explorent ces formes de 
             communication pour mieux comprendre ..`,
            lien :""
        },
        {
            image :"./images/im3.jpg",
            text : `<h1>Les Récifs coralliens</h1> abritent une vie marine extrêmement diversifiée. 
            Ces écosystèmes sous-marins agissent comme des "jardins" extraordinaires,
             fournissant une maison à une variété de poissons, <br>
             de crustacés et d'autres organismes marins.
              Malheureusement, les récifs coralliens sont menacés par le changement climatique et d'autres activités humaines,
               ce qui rend crucial leur protection et leur préservation.`,
            lien :""
        },
        {
            image :"./images/im4.jpg",
            text : `<h1>Les Abysses océaniques</h1> abritent une multitude de créatures bioluminescentes qui 
            émettent de la lumière pour attirer leurs proies ou se camoufler. Des poissons aux 
            méduses, ces créatures étonnantes sont adaptées à un environnement où la lumière du soleil 
            ne pénètre pas. Les scientifiques explorent encore ces mystérieux fonds marins pour découvrir 
            de nouvelles espèces et comprendre les adaptations uniques de la vie marine des abysses..`,
            lien :""
        },
        {
            image :"./images/im5.jpg",
            text : `<h1>Les Requins</h1> occupent les océans de notre planète depuis plus de 400 millions d'années, 
            bien avant l'apparition des dinosaures sur terre. Ces prédateurs marins, souvent mal compris et 
            représentés comme de simples machines à tuer, jouent en réalité un rôle crucial dans l'équilibre
             des écosystèmes marins. Loin d'être les monstres que l'on dépeint souvent, les requins sont des 
             créatures fascinantes qui méritent notre attention et notre respect.`,
            lien :""
        },
        {
    
            image :"./images/im6.jpg",
            text : `<h1>La Mer Méditerranée</h1> encerclée par trois continents - Europe, Asie, et Afrique - est une étendue 
            d'eau salée d'une richesse et d'une complexité extraordinaires. Elle a été le berceau de nombreuses civilisations
             qui ont marqué l'histoire humaine, et elle continue d'être un carrefour culturel, économique, et écologique vital. 
             Mais la Méditerranée est bien plus qu'une simple mer; c'est un écosystème unique en son genre, abritant une biodiversité 
             exceptionnelle .`,
            lien :""
        },
        {
    
            image :"./images/im7.jpg",
            text : `<h1>Les Orques</h1> souvent appelées baleines tueuses à cause de leur nom anglais "killer whales",
             sont en réalité les plus grands membres de la famille des dauphins. Ces majestueux mammifères marins
              se distinguent par leur intelligence remarquable, leur comportement social complexe et leur répartition 
              géographique vaste, étant présents dans tous les océans du monde, des eaux glacées de l'Arctique et de 
              l'Antarctique jusqu'aux mers plus tempérées et .`,
            lien :""
        },
         
        ];

    // Fonction pour ajouter du contenu aux divs
    function addDivs() {
        const divs = document.querySelectorAll(".myDiv");
        divs.forEach((div, index) => {
            const contenu = contenuDivs[index];
            const newImg = document.createElement("img");
            newImg.src = contenu.image;
            newImg.alt = `Image ${index + 1}`;
            div.appendChild(newImg);
            // Ajouter du texte à la div
       

            const textDiv = document.createElement("p");
            textDiv.innerHTML = contenu.text;
            div.appendChild(textDiv);

            const lienDiv = document.createElement("a");
            lienDiv.href = contenu.lien;
            lienDiv.textContent = "Lire la suite";
            div.appendChild(lienDiv);
        });
    }

    addDivs();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInUp");
            }
        });
    }, { threshold: 0.1 });

    const introSections = document.querySelectorAll("h1, h2");
    introSections.forEach(section => {
        observer.observe(section);
    });
});
