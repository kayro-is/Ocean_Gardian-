
const contenuDivs = [
    {

        image :"./images/im1.jpg",
        text : "Pacifique en Profondeur : Découvertes et Mystères des Grands Horizons Marins",
        lien :"https://fr.wikipedia.org/wiki/Portail:Oc%C3%A9an_Pacifique#:~:text=L'oc%C3%A9an%20Pacifique%2C%20qui%20s,'Asie%20(Japon%2C%20Philippines."
    },
    {
        image :"./images/im2.jpg",
        text : "Atlantique Infinité : Un Voyage à Travers les Flots et les Énigmes de l'Atlantique",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Atlantique"
    },
    {
        image :"./images/im3.jpg",
        text : "L'Indien Envoûtant : Révélations sur les Perles Exotiques de l'Océan Indien",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Indien"
    },
    {
        image :".images/im4.jpg",
        text : "L'Antarctique Abyssal : Secrets des Profondeurs Glaciales de l'Océan Austral",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Austral"
    },
    {
        image :".images/im5.jpg",
        text : "L'Arctique Énigmatique : Explorations dans les Eaux Gelées du Grand Nord",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Arctique"
    },
    {

        image :".images/im6.jpg",
        text : "Méditerranée: Un Berceau de Civilisations et un Écosystème Unique à Découvrir",
        lien :"https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e"
    },
     
    ];

        // Fonction pour ajouter des images, du texte et des liens à des divs existantes


        function addDivs() {
            const divs = document.querySelectorAll(".gallery");
    
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
                lienDiv.innerHTML = "Lis Wikipédia";
                div.appendChild(lienDiv);
            });
        }
    
        addDivs();
    