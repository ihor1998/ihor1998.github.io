'use strict';

let num1 = 1;

let num2 = 1;

for (let i = 3; i <= 20; i++) {
    let result = num1 + num2;
    num1 = num2;
    num2 = result;
    console.log(num2)
}
