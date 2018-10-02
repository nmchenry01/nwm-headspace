# ES6+ Promises and Old School Callbacks

## Articles 

https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a

https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

## Usage

Promises are an ES6 feature that serve to replace the callback in modern javascript. In general, promises can be handled using .then and .catch chaining that previously would have led to a series of callbacks (which looks significantly messier/more difficult to follow). Furthermore, promises can be created using the new Promise constructor syntax taking resolve and reject as parameters in order to handle different cases. With respect to callbacks, they are simply functions passed in as parameters of other functions in which they are invoked. 

## Code Example

```
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
```