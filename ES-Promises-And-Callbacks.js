const axios = require('axios');
const request = require('request');

/**
 * Using Promises
 */

const testApiCall = async () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

testApiCall();

const resolveAfter1Second = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved');
        }, 1000)
    })
}

const callAsync = () => {
    console.log('Calling async');
    resolveAfter1Second().then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
}

callAsync();

/**
 * Using Callbacks
 */

const testApiCallback = () => {
    request('https://jsonplaceholder.typicode.com/todos/1', function(error, response, body) {
        console.log(body)
    })
}

testApiCallback();
