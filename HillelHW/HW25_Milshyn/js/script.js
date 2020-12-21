"use strict";

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

Array.prototype.sorting = Array.prototype.sort;

Array.prototype.sort = function (arg) {
    return [...this].sorting(arg);
}

function correctSort(a, b) {
    return typeof a === 'number' ? a - b : a.localeCompare(b)
}

const arr = [1, -5, 25, 47, 1250, -470, 888];

console.log(arr.sort(correctSort));

console.log(arr);

NodeList.prototype.reduce = Array.prototype.reduce;

NodeList.prototype.map = Array.prototype.map;

NodeList.prototype.find = Array.prototype.find;


