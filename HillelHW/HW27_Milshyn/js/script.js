'use strict';

function getRandomNumberRequest() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');

    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status != 200) {
            console.error(xhr.response);
        } else {
            console.log('Hello world'.repeat(xhr.response));
        }
    })
}

function sendRequest(
    method,
    url,
    { body, headers = {} } = {},
    callback
) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
    })

    xhr.send(body); 

    xhr.addEventListener('load', () => {
        if (xhr.status >= 400) {
            callback(xhr.response);
        } else {
            callback(null, xhr.response);
        }
    })
}


const obj = {
    firstName: 'Vasya',
    lastName: 'Ivanov'
};

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=20', {
    body: JSON.stringify(obj),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
        if (err) {
            console.error(err);
        }
        
        const { id } = JSON.parse(response);
        const extention = { age: 33 }
        
        sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, {
            body: JSON.stringify(extention),
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            }
        }, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, {},
                    (err) => {
                        if (err) {
                            console.error(err)
                            return
                        } else {
                            console.log('OK!')
                        }
                    }
                )

        })

})















