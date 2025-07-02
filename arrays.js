// let fruits = [ 'apple', 'mango', 'orange', ];
// console.log(fruits.indexOf("mango"));

// let arr = new Array(1, 2, 3);
// console.log(arr);

// let arr2 = Array.of("a", "b");
// console.log(arr2);

// let mixedArray = [ 'apple', 'mango', 1, 2, 3, true, {name: "Goi"}, [5, 6, 7]];
// console.log(mixedArray);

// let nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(nestedArray[0][0]);
// console.log(nestedArray[1][1]);
// console.log(nestedArray[2][2]);


// let fruits2 = [ 'apple', 'mango', 'orange', 'tomato' ];
// // fruits2.push('cherry');  // adding new item to the list after list creation
// // console.log(fruits2);
// // fruits2.unshift('grappe');


// console.log(fruits2);
// // fruits2.pop(); // remove item from the list
// // console.log(fruits2);
// // fruits2.shift(); 
// // console.log(fruits2);

// fruits2.splice(1, 2); // removing specific items by using their indexs 
// console.log(fruits2);



// C&P Ez...........................

let fruits = ['apple', 'mango', 'orange', 'banana', 'tomato'];
console.log(fruits);
fruits.forEach(function(fruit) {
    console.log(fruit)
})

let upperFruits = fruits.map(fruit =>fruit.toUpperCase());
console.log(upperFruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let squares = numbers.map(num => num * num);
console.log(squares);





// Arrays of objects  
const students = [
  { 
    id: 1,
    firstName: "Goi",
    lastName: "Naath",
    age: 30,
    address: {
      city: "Nairobi",
      code: `00100`
    },
    gender: "male",
    maritalStatus: "soon",
    email: "goitutriay@gmail.com",
    phoneNumber: "+254791376636",
  }
]
// console.log(students);

document.getElementById("display").innerHTML = students;