"use strict";

const salaries = {

  HRs: { Alice: 500, Bob: 700  },

  Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },

  QAs: { Chuck: 1650, Craig: 850, Dave: 3000}

};



function copyAndMultiplyObj(object) {
    
    const salariesCopy = { ...object };

    for (let key1 in object){
    
        salariesCopy[key1] = { ...object[key1] };
        salariesCopy[key1] = { ...object[key1] };
        salariesCopy[key1] = { ...object[key1] };

        for (let key2 in object[key1]) {
        salariesCopy[key1][key2] *= 2;
        }

    };

    return salariesCopy
}


console.log(salaries);

console.log(copyAndMultiplyObj(salaries));