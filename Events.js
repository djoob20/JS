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

//Détectez le mouvement de la souris
const myPics = document.getElementById('myPics');
const myPicsResult = document.getElementById('myPicsResult');
const favColor = document.getElementById('favcolor');

const rect = myPics.getBoundingClientRect();
let context = myPics.getContext('2d');
let drawStarted = false;
let x = 0;
let y = 0;
let penColor = "#000000";
let penFontSize = 0;

myPics.addEventListener('mousedown', (e) => {
    drawStarted = true;
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    myPicsResult.innerHTML = printMouseCoord(e);
});

myPics.addEventListener('mousemove', (e) => {
    if (drawStarted) {
        draw(context, x, e.clientX - rect.left, y, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
    myPicsResult.innerHTML = printMouseCoord(e);
});

myPics.addEventListener('mouseup', (e) => {
    draw(context, x, e.clientX - rect.left, y, e.clientY - rect.top);
    x = 0;
    y = 0;
    drawStarted = false
    myPicsResult.innerHTML = printMouseCoord(e);
});

document.getElementById('fontSize').addEventListener('change', (e) => {
    penFontSize = e.target.value;
});

const draw = (context, x1, x2, y1, y2) => {
    context.beginPath();
    context.strokeStyle = penColor;
    context.lineWidth = penFontSize;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

const printMouseCoord = (e) => {
    return "<p>" + " ClientX: " + e.clientX + " ClientY: " + e.clientY + "<br>" +
        "OffSetX: " + e.offsetX + " OffsetY: " + e.offsetY + "<br>" +
        "PageX: " + e.pageX + " PageY: " + e.pageY + "<br>" +
        "rectLeft: " + rect.left + " rectTop: " + rect.top + "<br>" +
        "movementX: " + e.movementX + " movementY: " + e.movementY + " </p>";
}

favColor.addEventListener('change', (e) => {
    penColor = e.target.value;
});

//SELECTIONS
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select[name="ice-cream"]').onchange = changeEventHandler;
});

const changeEventHandler = (event) => {
    if (event.target.value) {
        document.getElementById('selection-result').innerHTML = event.target.value;
    }
}

const input = document.getElementById('fname');
const output = document.getElementById('input-result')
input.addEventListener('input', function(event) {
    output.innerHTML = event.target.value;
});