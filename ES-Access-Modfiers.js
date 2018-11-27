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
