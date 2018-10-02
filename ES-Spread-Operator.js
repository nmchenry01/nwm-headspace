const array = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const array3 = [...array, ...array2];

console.log(`These are the values of the original array [${array}]\n`);
console.log(`These are the values of the 2nd array [${array2}]\n`);
console.log(`These are the values of the two arrays joined with the spread operator [${array3}]\n`);

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

console.log(`These are the values of the two objects joined with the spread operator ${JSON.stringify(obj3)}\n`);

const clonedObj = { ...obj
}

console.log(`These are the values of a clonded object (different place in memory) using the spread operator ${JSON.stringify(clonedObj)}\n`);

const sum = (...args) => {
    let sum = 0;
    args.map(i => sum += i);
    return sum;
}

console.log(`The spread operator can be used for function call arguments like this sum function: ${sum(1,2,3)}`);