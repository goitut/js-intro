// import promptSync from "prompt-sync";

// const prompt = promptSync();


// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(2,3));
// console.log(sum(72,34));


// function greeting(name = "Guest") {
//   return `hello, ${name}!`;
// }

// console.log(greeting("Goi"));


// const product = function(a, b) {
//   return a * b;

// };

// console.log(product(5, 8));

// const greet = function(name) {
//   return `hello, ${name}!`;
// }

// console.log(greet("Naath"));

// const message = (name) => {
//   return `Hi, my name is ${name}.`;
// }


// console.log(message('Bob'));
// console.log(message('Stacy'));


// end of Friday's claa .....................


// June 23th Class (lesson) start of monday's class....................

// function calcutaleTotal(cartItems) {
//   let total = 0;
//   for (let item of cartItems) {
//     total += item.price * item.quantity;
//   }
//   return total;
// }

// const cart = [
//   {name: "T-shirts", price: 1200, quantity: 3},
//   {name: "trousers", price: 800, quantity: 2},
// ]

// console.log( "Total: ", calcutaleTotal(cart));


// function getWinner(play, computer) {
//   if (play === computer) return "Draw";

//   if (
//     (play === "rock" && computer === "scissors") || 
//     (play === "scissors" && computer === "papper") || 
//     (play === "papper" && computer === "rock")
//   ) {
//     return "Player wins!"
//   }
//   return "Computer wins!";
// }

// console.log(getWinner("rock", "scissors"));



import promptSync from "prompt-sync";

const prompt = promptSync();

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2, 3));
console.log(sum(10, 30));

function greeting(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greeting())

// console.log(greeting("John"));

const product = function(a, b) {
    return a * b;

};

console.log(product(5, 4));

const greet = function(name) {
    return `Hello, ${name}!`;
}

// console.log(greet('Jane'));

// const message = (name) => {
//     return `Hi, my name is ${name}.`;
// }
const message = name => `Hi, my name is ${name}.`;
// console.log(message('Bob'));
// console.log(message('Stacy'));

// function validateEmail(email) {
//     return email.includes("@") && email.endsWith(".com");
// }

// const userEmail = prompt("Enter your email: ");
// if (validateEmail(userEmail)) {
//     console.log("Valid email.");
// } else {
//     console.log("Invalid email.")
// }


function calculateTotal(cartItems) {
    let total = 0;
    for (let item of cartItems) {
        total += item.price * item.quantity;
    }
    return total;
}

const cart = [
    {name: "T-shirts", price: 1200, quantity: 3},
    {name: "trousers", price: 1500, quantity: 2},
];

console.log("Total: ", calculateTotal(cart))


function getWinner(player, computer) {
    if (player === computer) return "Draw";

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") || 
        (player === "paper" && computer === "rock")
    ) {
        return "Player wins!" ;
    }
    return "Computer wins" 
}

console.log(getWinner("scissors", "rock"));