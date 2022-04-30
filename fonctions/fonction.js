"use strict";
var v1 = 1, v2 = 3;

function calculate(){
    console.log(v1 + v2);
}

calculate();

//fonction avec parametres
function fncWithArg(firstname, name){
    console.log("Prénom: " + firstname);
    console.log("Nom: "+ name);
}

fncWithArg("Demba", "Diop");

//fonction avec return 
function fncWithReturn(){
    return "fncWithReturn";
}

console.log(fncWithReturn());

//Fontions anonymes
(function(){
    console.log("Hallo fonction anonyme sans l'enrégistrer dans une variable");
})();

var sayHallo = function(){
    console.log("Hallo fonction anonyme en l'enrégistrant dans une variable");
};

sayHallo();

var test = 'noir'; // On crée une variable « test » contenant le mot « noir »

(function() { // Début de la zone isolée

    var test = 'blanc'; // On crée une variable du même nom avec le contenu « blanc » dans la zone isolée
  
    console.log('Dans la zone isolée, la couleur est : ' + test);

})(); // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

console.log('Dans la zone non-isolée, la couleur est : ' + test); // Le texte final contient bien le mot « noir » vu que la « zone isolée » n'a aucune influence sur le reste du code

var f = (fncX)=>{
    console.log(fncX);
}
f("fncX");



