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