'use strict';

document.getElementById('check').onclick = function () {
    const login = document.getElementById('login').value;
    const password = document.getElementById('pass').value;

    if (login === 'Ihor' && password === '1234') {
        alert('Welcome!')
    } else if (password === '1234') {
        alert('Incorrect login!')
    } else if (login === 'Ihor'){
        alert('Incorrect password!Try to enter your password again!')  
    } else {
        alert('Your data is not correct!')
    }
}