"use strict";


const obj = {
    a: 15,
    b: {
        q: 'Hi',
        k: {
            a: 250
        }
    },
    c: 'abc'
};



function getCloneObj(obj) {
    const cloneObj = {};

    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            cloneObj[key] = getCloneObj(obj[key]);
            continue;
        }
        cloneObj[key] = obj[key];
    }

    return cloneObj;
}

