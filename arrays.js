let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];
console.log(guests[0]);

let artistProfile = {
    name: "Tao Perkngton",
    ag: 27,
    available: true
};

//enregistrer l'objet dans un tableau
let allProfiles = [artistProfile];
artistProfile.available = false;
console.log(allProfiles);

let guestLength = guests.length;
console.log(guestLength);

//ajouter un élément à la fin du tableau
guests.push("Tao Perkington");
console.log("After push: " + guests)

//ajouter un élément au debut du Tableau
guests.unshift("Tao Perkington");
console.log("After unshift: " + guests);

//supprimer le dernier élément du tableau
guests.pop();
console.log("After pop: "+ guests);

//parcourir les éléments d'un tableau
for(let i of guests){
    console.log(i);
}
