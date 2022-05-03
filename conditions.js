/*var startMesssage = "Vôtre catégorie:", 
    endMessage,
    adult = confirm("Êtes vous adult?") ;

endmessage = adult ? "18+": "-18";
//alert(startMesssage + endmessage);
*/

var conditionTest = "fonctionnera ? fonctionnera pas";
console.log(typeof conditionTest);
if(conditionTest){
    console.log("fonctionne"); 
}

let v1 = 5;
let v2  = "5";
console.log("v1==v2:" + (v1==v2));  //true
console.log("v1===v2:" + (v1===v2)); //false
console.log("5=='5': " + (5=="5")); // true

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

switch (firstUser.accountLevel) {
    case 'normal':
          console.log('You have a normal account!');
    
    break;
    case 'premium':
          console.log('You have a premium account!');
    
    break;
    case 'mega-premium':
          console.log('You have a mega premium account!');
    break;
    
    default:
          console.log('Unknown account type!');
    

}