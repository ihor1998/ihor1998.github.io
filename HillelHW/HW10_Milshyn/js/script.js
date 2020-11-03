"use strict";

const obj = {
        a: 'Hi',
    }

function getObject(obj) {

    for (let key in obj) {
        return false
    }
   
    return true
}