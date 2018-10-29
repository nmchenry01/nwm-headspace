# ES6+ Object Destructuring 

## Articles 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f

## Usage

In plain English, destructuring implies breaking down a complex object into simpler parts. In the context of JavaScript (specifically ES6+), you are able to explicitly pull properties off of an object for use inside a file or when returning from a function. You can also pass in default values if a property is not defined on an object. The same principles also apply to arrays, and object destructuring can be particularly useful when combined with the spread operator in order to capture some explicit properties while maintaining a copy of the rest of an object. 

## Code Example

```
const person = {
  name: "John Doe",
  school: "UNC",
  age: 25
};

// Object Destructuring
const { name, age, hometown = "Chapel Hill" } = person;

console.log(`name : ${name}, age : ${age}, hometown : ${hometown}`);

const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`red : ${red}, green : ${green}, blue : ${blue}`);

```