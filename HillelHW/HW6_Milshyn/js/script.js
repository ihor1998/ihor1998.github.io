'use strict';

let num1 = 1;

let num2 = 1;

let i;

const ordinalNum = +prompt('Enter the ordinal number of the Fibonacci number:');

for (i = 3;i <= ordinalNum; i++) {
    let result = num1 + num2;
    num1 = num2;
    num2 = result;
}

alert(num2);



