/**
 * Code de gestion du formulaire
 */
import { validEmail, validPassword, controle } from "/assets/js/fonctions.js";
 
let form = document.querySelector('.validate-form');

    // Ecouter la modification de l'email
form.email.addEventListener('change', function() { 
    validEmail(this);
});    

   // Ecouter la modification de password
form.password.addEventListener('change', function() {
    validPassword(this);
});

   // Ecouter la modification des champs
const verification = document.querySelector('.validate-form');
 verification.addEventListener('click', confirme);

 // Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(validAdresse(form.email) && validPassword(form.password)){
       form.style.backgroundColor = '#a7ff3342'; 
    }
});