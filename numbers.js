let num1 = 5; // Integer
let num2 = 3.14; // Float point number
let num3 = -10; // Negative number


// Basic Arithmetic Operations
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Type conversion
let a = '10';
console.log(typeof + a);
let b = 2;
console.log(Number(a) + b); // Explicit 

let product = '20' * 2;
console.log(product); // Implicit

// Checking Number Type

console.log(typeof 30);
console.log(Number .isInteger(22));
console.log(Number.isFinite(3.14));
console.log(Number.isNaN('abc'));

let number1 = '3.14';
let number2 = parseFloat(number1);

let number3 = '30';
let number4 = parseInt(number3);

// Math Object

console.log(Math.PI);
console.log(Math.round(3.567));
console.log(Math.floor(4.9));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));
console.log(Math.floor(-4.9));

console.log(Math.ceil(4.2));
console.log(Math.abs(-4));
console.log(Math.sqrt(25));
console.log(Math.pow(4, 4));
console.log(Math.random());
console.log(Math.max(4,10,7,20));
console.log(Math.min(4,10,7,20));

const radius = 7;
const areaOfcircle = Math.PI * radius ** 2;
console.log(areaOfcircle.toFixed(2));

const length = 10;
const width = 20;
const areaOfrectangle = length * width;
console.log(areaOfrectangle);

const base = 8;
const height = 4;

const areaOftriangle = 0.5 * base * height;
console.log(areaOftriangle);

// var, let, const

// var c = 5;
// var c = 20;
// console.log(c);

// console.log(c)
// var c = 5;

// let m = 5;
// m = 7;
// console.log(m);

// const n = 10;
// n = 20;
// console.log(n)


