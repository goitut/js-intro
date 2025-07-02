let person = {
  name: "Jane",
  age: 30,
  isStudent: false,
  address: {
    city: "Addis Ababa",
    homeTown: "Gambella"
  }
};


console.log(person.address.homeTown)
console.log(person.name);
console.log(person["age"]);

person.gender = "female"
console.log(person);

person.age = 25;
console.log(person);

delete person.isStudent;
console.log(person);

let keys = Object.keys(person);
console.log(keys);

let values = Object.values(person);
console.log(values);

let entries = Object.entries(person);
console.log(entries);

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  isElectric: false,
  features: ["bluetooth", "Backup Camera",
    "Heated Seats", "LED Headlights"], 
}

console.log(car);