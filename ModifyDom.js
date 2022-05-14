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
alert(center[0].classList.contains('rouge'));
center[0].classList.remove('center');