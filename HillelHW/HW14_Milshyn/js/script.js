"use strict";

const array = ['Apple', 'Banana', 'Pineapple'];

array.push('Orange', 'Grapes');

const arrayMod1 = array.splice(1, 1, 'Peer');

const arrayMod2 = array.pop();

console.log(arrayMod2);

array.unshift('Watermelon');
