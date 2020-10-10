"use strict";

const num1 = Math.trunc(+prompt("Insert the number:"));

const num2 = Math.trunc(+prompt("Insert the number:"));
    
const result = Math.round(num1 / num2) * num2 || num2 && Math.max(num1, num2);

result || alert('Not valid data!');

result && alert(result);


