import promptSync from "prompt-sync";

const prompt = promptSync();

// const name = prompt("what is your name? ");
// console.log(`hello, ${name}`);



let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let Operator = prompt("Enter an operator(+,-,*,/,^):");

switch (Operator) {
  case "+":
    console.log(`${num1} + ${num2} = ${(num1) + (num2)}`);
    break;
    case "-":
      console.log(`${num1} - ${num2} = ${(num1) - (num2)}`);
      break;
      case "*":
         console.log(`${num1} * ${num2} = ${(num1) - (num2)}`);
         break;
         case "/":
          console.log(`${num1} / ${num2} = ${(num1) - (num2)}`);
          break;
          case "^":
           console.log(`${num1} ^ ${num2} = ${(num1) - (num2)}`);
}