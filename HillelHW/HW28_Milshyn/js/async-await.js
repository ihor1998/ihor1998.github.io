'use strict';

async function getRandomNumberRequest() {
    try {
        const request = await fetch('https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');
        if (!request.ok) {
            throw new Error(request.statusText)
        }
        const response = await request.text();
        console.log('Hello World '.repeat(response))
    } catch (error) {
        console.error(error);
    }
}


async function sendRequest(body) {
    try {
        const response = await fetch('https://async-demo.herokuapp.com/objects?prob=20', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(request.statusText);
        }
        
        console.log('User created!');
        const { id } = await response.json();
        const extention = { age: 33 };

        const updateResponse = await fetch(`https://async-demo.herokuapp.com/objects/${id}?prob=20`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(extention)
        });
        if (!updateResponse.ok) {
            throw new Error(request.statusText);
        }
        
        console.log('User updated!');

        const deleteResponse = await fetch(`https://async-demo.herokuapp.com/objects/${id}?prob=20`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            }
        });
        if (!deleteResponse.ok) {
            throw new Error(request.statusText);
        }
        console.log('User delete!');
    } catch (error) {
        return console.error(error);
    }
}

const obj = {
    firstName: 'Vasya',
    lastName: 'Ivanov'
};

//sendRequest(obj);

const users = [
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

async function randomNumber(num) {
    try {
        const response = await fetch(`https://async-demo.herokuapp.com/unstable?maxRandom=${num}&prob=5`);
        if (!response.ok) {
            throw Error(response.status);
        }
        return response.text();
    } catch (error) {
        return console.error(error);
    }
}

async function getLastUser() {
    try {
        await Promise.all([
            randomNumber(100),
            randomNumber(100),
            randomNumber(100),
        ])
		.then(ages => {
            users.forEach((elem,index) => {
                elem.age = ages[index];
            });
        })
		.catch (err => console.error(err));
		
        let randomNum = await randomNumber(3);
        randomNum = +randomNum - 1;
		const lastItem = users.slice(randomNum,randomNum + 1);
		users = [];
		users.push(lastItem)
		console.log(users);
	
    } catch (error) {
		console.log(error);
	}
}











