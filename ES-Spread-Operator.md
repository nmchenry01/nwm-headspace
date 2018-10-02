# ES6+ Spread Operator 

## Articles
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html

## Usage 

The spread operator can be used to expand an object or an array. This can be useful for copying objects (shallow copy), immutability, joining objects and arrays, and allowing function declarations to expand to accommodate varying numbers of parameters. 

## Code Example
```
const array = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const array3 = [...array, ...array2];


const obj = {
    'a': 1,
    'b': 2
}

const obj2 = {
    'c': 3,
    'd': 4
}

const obj3 = {
    ...obj,
    ...obj2
}

const clonedObj = { ...obj }

const sum = (...args) => {
    let sum = 0;
    args.map(i => sum += i);
    return sum;
}

```