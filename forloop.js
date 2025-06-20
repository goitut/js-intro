// for (initialization; condition; increment) {
//   code execute
// }

for (let  i = 1; i <= 5; i++) {
  console.log(i);
}

const colors = ['red', 'yellow', 'blue', 'black'];
console.log(colors);

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(`odd number: `, i)
  }
}

let sum = 0;
for (let i = 0; i <= 50; i++) {
 sum += 1 // sum = sum + i;
}

console.log('sum:' , sum);