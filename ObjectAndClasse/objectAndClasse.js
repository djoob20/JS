"use strict";

//Declaration d'un objet
let myBook = {
    title: 'The story of Tau',
    author: 'Will Alexander',
    numberOfPages : 250,
    isAvailable :true
}

//recupérer les valeurs de l'objet déclaré
let bookTitle = myBook.title;
let bookAuthor = myBook["author"];
let propertyToAccess = "numberOfPages";
let bookNumberOfPages = myBook[propertyToAccess];

console.log("############## Détails du llivre ############### ");
console.log("auteur: " + bookAuthor + "\n" + "titre: " + bookTitle + "\n" + "nombre de pages: " + bookNumberOfPages);