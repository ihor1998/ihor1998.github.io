"use strict";

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

Array.prototype.sortImmutable = Array.prototype.sort;

Array.prototype.sort = function () {
    return [...this].sortImmutable((a, b) => {
        return typeof a === 'number' ? a - b : a.localeCompare(b)
    });
}

NodeList.prototype.reduce = Array.prototype.reduce;

NodeList.prototype.map = Array.prototype.map;

NodeList.prototype.find = Array.prototype.find;


