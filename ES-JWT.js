const jwt = require('jsonwebtoken');

const credentials = {
    'username': 'nmchenry',
    'password': '123abc'
}

const JWT_SECRET = "aosfhioaj20q9rujs0";

const token = jwt.sign(credentials, JWT_SECRET);

console.log(token);

const decoded = jwt.decode(token, JWT_SECRET);

console.log(decoded);