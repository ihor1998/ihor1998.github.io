"use strict";

function getFibNum(ordinalNum) {
    let num1 = 1;
    let num2 = 1;

    for (let i = 3; i <= ordinalNum; i++) {
    let result = num1 + num2;
    num1 = num2;
    num2 = result;
    }

    return num2
}

function calcFibNum(ordinalNum) {
    if (ordinalNum < 2) return ordinalNum;

    return calcFibNum(ordinalNum - 1) + calcFibNum(ordinalNum - 2);
}

function calcFactorialLoop(number) {
    let result = 1;

    while (number) {
        result *= number--;
    }

    return result
}

function calcFactorialRecursive(number) {
    if (number !== 1) {
        return number * calcFactorialRecursive(number - 1);
    } else {
        return 1;
    }
}
