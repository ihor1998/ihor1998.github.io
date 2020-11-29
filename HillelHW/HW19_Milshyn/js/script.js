"use strict";

const containerId = document.getElementById('container');

const container = document.querySelector('#container');

const secondLi = document.querySelectorAll('.second');

const lastElemOl = document.querySelector('ol .third');

const header = document.querySelector('.header');

header.innerHTML = '<h1>Hello</h1>';

const footer = document.querySelector('.footer');

footer.classList.add('main');

footer.classList.remove('main');

const newLi = document.createElement('li');

newLi.textContent = 'four';

const newElemUl = document.querySelector('ul').append(newLi);

const ol = document.querySelectorAll('ol li');

for (let i = 0; i < ol.length; i++) {
   ol[i].style.backgroundColor = 'green'; 
}

footer.remove();