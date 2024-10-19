// Optional Practice with object destructuring

// Just as you can destructure arrays, you can also destructure objects. Here's an example:

// const person = {
//   name: "John Doe",
//   age: 25,
//   city: "New York",
// };

// const { name, age, city } = person;

// console.log("\nExample: Object Destructuring (Person)");
// console.log(`Name: ${name}, Age: ${age}, City: ${city}`); // Expected output: "Name: John Doe, Age: 25, City: New York"

// TASK 1: Object Destructuring Exercise 1

// Here is a dog object:

const dog = {
  name: "Max",
  breed: "Golden Retriever",
  age: 5,
};

// TODO: Use object destructuring to extract the name and breed and age of the dog into three variables. Log the variables.
const { name, breed, age } = dog;
console.log(
  `My dog ${name} is a ${breed}. Today is his birthday, he turned ${age}!`
);

// TASK 2: Object Destructuring Exercise 2

// Here is a car object:

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

// If you don't need all the variables, you can destructure only the properties you need. For example, to extract the make and model of the car:

const { make, model } = car;

// TODO: Use object destructuring to extract only the model and year of the car into two variables. Log the variables.
console.log(`I just got a new car. It is a ${make} ${model}!`);
// Note, you will see a common short hand in React documentation where you destructure the argument object in the function parameter. For example:

function dogInfo({ name, breed, age }) {
  return `Name: ${name}, Breed: ${breed}, Age: ${age}`;
}

const dog1 = {
  name: "Max",
  breed: "Golden Retriever",
  age: 5,
};

// Example usage
console.log(dogInfo(dog1)); // Expected output: "Name: Max, Breed: Golden Retriever, Age: 5"

const dog2 = {
  name: "Buddy",
  breed: "Labrador",
  age: 3,
};

const dog3 = {
  name: "Charlie",
  breed: "Poodle",
  age: 2,
};

// TODO: Call the dogInfo function with the dog2 and dog3 objects and log the output.
console.log(dogInfo(dog2));
console.log(dogInfo(dog3));
// Now create a function that takes an object with the following properties: name, age, city. The function should return a string with the following format: "Name: [name], Age: [age], City: [city]".

// TODO: complete the personInfo function
function personInfo({ name, age, city }) {
  return `Name: ${name}, Age: ${age}, City: ${city}`;
}
// Example usage:
const person1 = {
  name: "John Doe",
  age: 25,
  city: "New York",
};

const person2 = {
  name: "Jane Doe",
  age: 30,
  city: "Los Angeles",
};

const person3 = {
  name: "Joesph Doe",
  age: 65,
  city: "Dallas",
};

console.log(personInfo(person1)); // Expected output: "Name: John Doe, Age: 25, City: New York"
console.log(personInfo(person2)); // Expected output: "Name: Jane Doe, Age: 30, City: Los Angeles"
console.log(personInfo(person3)); // Expected output: "Name: Joesph Doe, Age: 65, City: Dallas"

// TODO: Now create a function of your own that uses object destructuring and write an example usage of the function.
function characterInfo({ name, catchPhrase }) {
  return `Character: ${name}, Catchphrase: ${catchPhrase}`;
}

const character1 = {
  name: "Mario",
  catchPhrase: "It's A-Me, Mario!",
};

const character2 = {
  name: "Pac-Man",
  catchPhrase: "Waka Waka Waka!",
};

console.log(characterInfo(character1)); // Expected output: "Character: Mario, Catchphrase: It's A-Me, Mario!"
console.log(characterInfo(character2)); // Expected output: "Character: Pac-Man, Catchphrase: Waka Waka Waka!"
