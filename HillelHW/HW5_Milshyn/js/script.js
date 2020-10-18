'use strict';

const login = prompt('Enter your login:');

let pass = prompt('Enter your password:');

if (login === 'Ihor' && pass === '1234') {
    alert('Welcome!');
}else if(login !== 'Ihor'){
    alert('Incorrect login!');
} else {
     while (pass !== '1234'){
        pass = prompt('Incorrect password!Try to enter your password again:');
        
        if (pass === '1234') {
            alert('Welcome!');
        } else if (pass === null) break
     }   
    
    alert('Incorrect password!');
}
