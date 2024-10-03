// Sélection du bouton
const button = document.getElementsByClassName("btn")[0];

// Ajout de l'événement au clic
button.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du bouton (soumission du formulaire)
    
    // Récupération des valeurs des champs
    const emailInputContent = document.getElementsByClassName("email")[0].value;
    const nameInputContent = document.getElementsByClassName("name")[0].value;
    const messageInputContent = document.getElementsByClassName("message")[0].value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(emailInputContent)) {
        console.log("c'est bon");
        
    } else {
        const errorP = document.getElementsByClassName("error")[0];
        errorP.textContent = "Erreur ! Email invalide !";
    }

    // Affichage dans la console
    // console.log("Email:", emailInputContent);
    // console.log("Nom:", nameInputContent);
    // console.log("Message:", messageInputContent);
});
