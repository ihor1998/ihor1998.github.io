"use strict";
 
const input = document.querySelector('.section__input');

const btnCreate = document.querySelector('.section__btn_create');

const btnRemove = document.querySelector('.section__btn_remove');

const list = document.querySelector('.section__list');
    
function createElem() {
    let li = document.createElement('li');
    if (input.value === '') return false;
    li.textContent = input.value;
    li.classList.add('section__list-item');
        
    list.appendChild(li);

    list.addEventListener('click', (event) => {
        event.target.classList.toggle('section__list-item_bg');
    });

};


btnCreate.addEventListener('click', (event) => {
    event.preventDefault();

    createElem();
});

btnRemove.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelectorAll('.section__list-item_bg').forEach(elem => elem.remove());
});


