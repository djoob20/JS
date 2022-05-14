"use strict";
let main = document.getElementById('main');
main.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";
alert("textContent: \n" + main.textContent);
alert("innerText: \n" + main.innerText);
alert("innerHTML: \n" + main.innerHTML);