"use strict";

const obj = {
    '0': "zero",
    '42': "answer",
    'greeting': "Hello",
    '3.14': "PI",
};


function getNumKey(obj) {

    for (let key in obj) {
       
        if (!isNaN(key)) {
            console.log(obj[key]); 
        };
    };  
}

getNumKey(obj);
