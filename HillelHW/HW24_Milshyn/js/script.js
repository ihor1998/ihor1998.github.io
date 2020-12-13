"use strict";

function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    }
}

function createKeyBy(propName) {
    return function keyBy(arr){
            return arr.reduce((result, elem) => {
            if (!result[elem[propName]]) {
                result[elem[propName]] = [];
            }

            result[elem[propName]].push(elem);

            return result
        }, {})
    }
}

function createCalcPercent(percent) {
    return function calcParcent(value) {
        return (value / 100) * percent;
    }
}