"use strict";

const num1 = Math.trunc(+prompt("Insert the number:"));

const num2 = Math.trunc(+prompt("Insert the number:"));

const isDataValid = !isNaN(num1) && !isNaN(num2) && num2 >= 1;
 
const result = Math.max(num1, num2) || Math.round(num1 / num2) * num2;

!isDataValid && alert('Not valid data!');

isDataValid && alert(result);


