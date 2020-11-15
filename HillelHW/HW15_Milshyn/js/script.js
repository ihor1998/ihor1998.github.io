"use strict";

function getSumArr(array) {
    let sum = 0;
   
    for (let elem of array) {
        sum += elem;
    }

    return sum;
}

function calcSumArr(array) {
    return array.reduce((result, elem) => result + elem, 0);
}

function mapToUpperCase(arr) {
    return arr.map((elem) => elem.toUpperCase());
}


function arrToUpperCase(arr) {
    let arrCopy = [];

    for (let elem of arr) {
        arrCopy.push(elem.toUpperCase());
    }

    return arrCopy;
}