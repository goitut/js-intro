// while (condition) {
//   // code to be executed
// }

// let i = 1;

// while (i<= 5){
//   console.log(i); i++;
// }

// while (i <= 500000) {
//   console.log(i); i++;
// }


// let interest = (5000000 * (rate * 0.01))/500;
// let total = ((5000000/500) + 0.01);

import promptSync from "prompt-sync";

const prompt = promptSync();


// let loan = 5000000;
// let monthlyDeductions = 20000;
// let interest = 0.12;
// let months = 0;

// while (loan > 0){
//   loan -= monthlyDeductions; //  loan = loan - monthlyDeductions //500000 - 10000
//   months++;
// }

// console.log(`It will take ${months} months.`);

// let count = 0;
// while(true) {
//   console.log(count)
//   count++;
//   if (count > 10) break;
// }

// while (interest <=  0.12) {
//   interest += loan * interest * months;
//   months++;

//   console.log(interest);
// }

// let password = "";
// while (password.length < 8) {
//   password = prompt("Enter a password  (min 8 chars) ");
//   if (password.length < 4) {
//     console.log("Password is INvalid");
//   }
// }

// console.log("Password accepted")


let password = "";
while (true) {
  password = prompt("Enter a strong password ");
  const hasUpper = /[A/Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit  = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  const longEnough = password.length >= 8;

  if (hasUpper && hasLower && hasDigit && hasSpecial && longEnough) {
    console.log("Password is strong");
    break;
    } else {
      console.log("Password is weak. Try again ");
  }
}



