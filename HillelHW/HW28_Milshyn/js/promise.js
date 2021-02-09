'use strict';

function getRandomNumberRequestPromise() {
    return new Promise((resolve, reject) => {
        fetch('https://async-demo.herokuapp.com/stable?maxRandom=20&prob=50')
        .then(response => {
            if (!response.ok) {
                reject(response.statusText); 
            } else {
                resolve(response);
            }
            return response.text()
        })
        .then(response => console.log('Hello World '.repeat(response)))
        .catch(error => console.error(error));
    })  
}

function sendRequest(method, url, body) {
    return new Promise((resolve, reject) => {
        fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (!response.ok) {
                reject(response.status)
            } else {
                resolve(response)
            }
        })
        .catch(error => console.error(reject(error)));
    })
}


const obj = {
    firstName: 'Vasya',
    lastName: 'Ivanov'
};

let id;

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=20', obj)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(response => {
        ({ id } = response);
        const extention = { age: 33 }

        return sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, extention)
    })
    .then(response => {
        console.log(response);
        return sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}?prob=20`)
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error(error));


function getRandomNum(num) {
    return new Promise((resolve, reject) => {
        fetch(`https://async-demo.herokuapp.com/stable?maxRandom=${num}&prob=5`)
        .then(response => {
            if (!response.ok) {
                reject(response.statusText); 
            } else {
                resolve(response.text());
            }
            return response
        })
        .catch(error => console.error(error));
    }) 
}

let users = [
    {
        firstName: 'Bilbo',
        lastName: 'Baggins'
    },
    {
        firstName: 'Torin',
        lastName: 'The Oakenshield'
    },
    {
        firstName: 'Gandalf',
        lastName: 'The Grey'
    }
];

function getLastUser() {
    Promise.all([
    getRandomNum(100),
    getRandomNum(100),
    getRandomNum(100),
    ])
    .then((ages) => {
        users.forEach((elem,index) => {
            elem.age = ages[index];
        });

        return getRandomNum(3);
    })
    .then((response) => {
        const randomNum = +response === 0 ? response : response - 1;
		const lastItem = users.slice(randomNum,randomNum + 1);
		users = [];
		users.push(lastItem)
		console.log(users);
    })
    .catch (err => console.error(err));
}









