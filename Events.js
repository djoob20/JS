"use strict";
const result = document.getElementById('result');
document.getElementById('ggle').addEventListener('click', function(event) {

    result.innerHTML = "lien cliqué";

    /*
        On utilise la fonction preventDefault de notre 
        objet event pour empêcher le comportement par 
        défaut de cet élément lors du clic de la souris
    */
    event.preventDefault();

    //arrêter la propagation de l'event
    event.stopPropagation();
});

document.getElementById('eventClick').addEventListener('click', (e) => {
    result.innerHTML = "div cliqué";
});