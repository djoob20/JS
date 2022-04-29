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