"use strict";
let main = document.getElementById('main');
main.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";
// alert("textContent: \n" + main.textContent);
// alert("innerText: \n" + main.innerText);
// alert("innerHTML: \n" + main.innerHTML);

// Modifiez des classes
//ajouter une classe à un élément
const center = document.getElementsByClassName('center');
center[0].classList.add('large');
//center[0].classList.remove('center');
center[0].classList.replace('rouge', 'bleu');
//alert(center[0].classList.contains('rouge'));
center[0].classList.remove('center');

//changer les styles d'un élément
const stl = document.getElementById('stl');
stl.style.color = "#fff";
stl.style.backgroundColor = "#000";
stl.style.fontWeight = "bold";

//Modifiez les attributs
const attr = document.querySelector('#attr a');
attr.setAttribute('href', 'https://www.w3schools.com/js/js_htmldom_css.asp');
alert(attr.getAttribute('href'));