"use strict";

function capitalize(string) {
    return string
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}


function checkSubstring(string, substring) {
    string = string.toUpperCase();
    substring = substring.toUpperCase();
    
    return string.includes(substring);
}