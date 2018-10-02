# Javascript Implementation of JWT's (Javascript Web Tokens)

## Articles

https://github.com/auth0/node-jsonwebtoken

https://jwt.io/

## Usage

JWTs are a way to securely transfer information between parties in the form of a javascript object. The first portion represents the header, the second portion the encoded body, and the third section the signature (encrypted using a secret key).

## Code Example

```
const jwt = require('jsonwebtoken');

const credentials = {
    'username': 'nmchenry',
    'password': '123abc'
}

const JWT_SECRET = "aosfhioaj20q9rujs0";

const token = jwt.sign(credentials, JWT_SECRET);

console.log(token);
```