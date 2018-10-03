# ES6+ Async/Await

## Articles

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

## Usage

This is actually a surprisingly easy aspect of ES8 to use. It allows for code to be written in a significantly more synchronous fashion and avoids "callback hell". Functions that take advantage of this language feature need a function declaration including "async" which allows the "await" keyword to be used within the function body. Functions that are preceded by the "await" keyword indicates that the function returns a promise. Within a function labeled as async, returning a value is the same as resolving and throwing an error is the same as rejecting. 

## Code Example

*Note the order that the print statements occur in the output. This is due to the non-blocking I/O nature of Node.JS

```
const axios = require('axios');

const testApiCall = async () => {
    try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

testApiCall();

const resolveAfter1Second = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved');
        }, 1000)
    })
}

const callAsync = async () => {
    console.log('Calling async');
    var message = await resolveAfter1Second();
    console.log(message);
}

callAsync(); 
```
