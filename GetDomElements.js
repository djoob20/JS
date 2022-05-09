const printElements = ( elements ) => {
    for(let element of elements){
        alert(element.innerHTML);
    
    }
}


const div1 = document.getElementById('div1');
// alert(div1.innerHTML);

const contents = document.getElementsByClassName('content');
// printElements(contents);

const articles = document.getElementsByTagName('article');
// printElements(articles);

const getLink_6 = document.querySelector('#myId p.article > a');
// alert(getLink_6.innerHTML);

const div2Childreen = document.getElementById('div2').children;
// printElements(div2Childreen);

const main = document.getElementById('main');
const previous = main.previousElementSibling;
alert(previous.innerHTML);
const parent = main.parentElement;
alert(parent.innerHTML);
