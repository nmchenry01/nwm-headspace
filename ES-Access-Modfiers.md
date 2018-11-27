# Access Modifiers in Javascript

## Articles

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

https://hackernoon.com/js-var-let-or-const-67e51dbb716f

## Usage

In previous versions of Javascript, the "var" keyword declares a variable and optionally initializes it to a value. Importantly, the "var" keyword is not block scoped, meaning that it is not limited to the block that it is defined in. On the other hand, the "let" keyword is block scoped and allows for a variable to be declared, initialized, and later changed if necessary. If a "let" keyword variable is defined in a specific block, assignment is local to the block. Furthermore, the "const" keyword functions the exact same way except that the variable can't be overwritten or initialized without a value.  

## Code Example



```
var x = 1;
if (x === 1) {
  var x = 3;
  // Expected output of 3
  console.log(x);
}

// Expected output of 3, overwritten in the above if block
console.log(x);

let y = 1;
if (y === 1) {
  let y = 3;
  // Expected output of 3
  console.log(y);
}

// Expected output of 1, since "let" is block scoped
console.log(y);

const z = 1;
try {
  z = 3;
} catch (err) {
  // Expect error for reassignment
  console.log(err);
}

//Expected output of 1
console.log(z);
```
