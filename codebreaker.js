import promptSync from "prompt-sync";

const prompt = promptSync();



// number guessing game

const minNum = 1;
const maxNum = 100;
const anwswer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){
  guess = prompt(`Guess a number between ${minNum} - ${maxNum}`); guess = Number(guess);

  if(isNaN(guess)){
    prompt.alert('Plaes enter a valid number');
  }

 else if(guess < minNum || guess >maxNum){
  prompt.alert('Please enter a valid number')
 }
 else{
  attempts++;
  if(guess < anwswer){
    prompt.alert('Too low');
  }
  else if(guess > anwswer){
    prompt.alert('Too high');
  }
  else{
    prompt.alert(`Congratulations ${anwswer}. It took you ${attempts} attempts`);
      running = false;
  }
 }




}

