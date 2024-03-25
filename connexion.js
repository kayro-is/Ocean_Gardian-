
 /*document.getElementById('search-btn').addEventListener('click', function() {
    const container = document.getElementById('loginFormContainer');

    // verifier si ke formulaire existe deja 

    if (container.childNodes.length === 0) {
        // crée le formulaire

        const form = document.createElement('form');
        form.innerHTML = `
        <div> 
        <label for="username" >Nom d'utilisateur</label>
        <input type="text" name="username" id="username" required>
        </div>

        <div> 
        <label for="password" >Mot de passe</label>
        <input type="password" name="password" id="password" required>
        </div>

        <button type="submit">se Connecter </button>
        `;

        // Optionnel: ajjouter un gestionnaire d'événement pour la soumissiondu formulaire
        form.addEventListener('submit', function(e) {
            e.preventDefault();// Empêcher la soumission réel du formulaire
            console.log("Formulaire soumis !");
        });
    container.appendChild(form);
    }
  })*/

  document.getElementById('search-btn').addEventListener('click', function(){
    window.location.href = "./html/connexion.html";
  })