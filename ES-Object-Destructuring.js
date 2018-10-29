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
