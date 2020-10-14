'use strict';

const name = 'Ihor';

const age = 22;

const role = 'Admin';

const occupation = 'CEO';

const operation1 = !!name && age > 18;

const operation2 = role === 'Admin' || occupation === 'CEO';

const operation3 = occupation ?? role;

const operation4 = (!!name && age > 18) && role === 'Admin';

const operation5 = (!!name && role === 'Admin') && age;

console.log(operation1);

console.log(operation2);

console.log(operation3);

console.log(operation4);

console.log(operation5);



