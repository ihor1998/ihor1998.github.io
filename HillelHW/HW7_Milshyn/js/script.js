'use strict';

const name = 'Ihor';

const age = 22;

const role = 'Admin';

const occupation = 'CEO';

const operation1 = Boolean(name && age >=18);

const operation2 = Boolean(!role ?? !occupation);

const operation3 = occupation ?? role;

const operation4 = Boolean((name && age >=18) ?? role);

const operation5 = age ?? (!role && name);

alert(operation1);

alert(operation2);

alert(operation3);

alert(operation4);

alert(operation5);

console.log(typeof name);

console.log(typeof age);

console.log(typeof role);

console.log(typeof occupation);

