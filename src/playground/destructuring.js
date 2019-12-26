//
// Object Destructring
//

// const person = {
//   name: "YAsh",
//   age: 21,
//   location: {
//     city: "Moradabad",
//     temp: 92
//   }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const { temp: temperature = 10, city } = person.location;

// if (city && temperature) {
//   console.log(`Its's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Penssylvania",
  "19147"
];

const [, city, state = "New York"] = address;
console.log(`You are in ${state} ${city} `);

const item = ["Coffee (hot)", "100", "180", "275"];
const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price} `);
