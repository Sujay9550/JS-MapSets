`use strict`;

// Maps - A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.

// Creating a Map - You can create a map by passing an array to new Map() constructor.
const fruits1 = new Map([
  ["Apples", 500],
  ["Oranges", 300],
  ["Bananas", 200],
]);

console.log(fruits1); // Result - Map(3) {'Apples' => 500, 'Oranges' => 300, 'Bananas' => 200}

// set() Method - Adding elements to the map
const fruits2 = new Map();
fruits2.set("Pappaya", 450);
fruits2.set("Pineapple", 200);
fruits2.set("Blackcurrent", 250);
console.log(fruits2); // Result - Map(3) {'Pappaya' => 450, 'Pineapple' => 200, 'Blackcurrent' => 250}

// get() Method - To get the value of a key in the map
console.log(fruits1.get("Apples")); // Result - 500
console.log(fruits2.get("Blackcurrent")); // Result - 250

// size - returns the number of elements in the map
console.log(fruits1.size); // Result - 3
console.log(fruits2.size); // Result - 3

// delete() Method - To remove an element in the map
const laptops = new Map([
  ["HP", 10],
  ["Dell", 20],
  ["Apple", 5],
]);

laptops.delete("Apple");
console.log(laptops); // Result - Map(2) {'HP' => 10, 'Dell' => 20}

// has() Method - This method returns true if the key exists in the map
console.log(laptops.has("HP")); // Result - True
console.log(laptops.has("Apple")); // Result - False

// forEach() method - calls a function for each key/value pair in a Map
const bikes = new Map([
  ["BMW", 10],
  ["Harley", 5],
  ["Ninja", 2],
]);

bikes.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currencies1 = new Map([
  ["INR", "India"],
  ["USD", "United States of America"],
  ["EUR", "Euro"],
]);

currencies1.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// entries() Method - returns an iterator object with the [key, values] in a Map
const cars = new Map([
  ["Lamborghini", 15],
  ["Audi", 10],
  ["BMW", 8],
  ["Buggati", 5],
]);

for (const [key, value] of cars.entries()) {
  console.log(`${key}: ${value}`);
}

const currencies2 = new Map([
  ["INR", "India"],
  ["USD", "United States of America"],
  ["EUR", "Euro"],
]);

for (const [key, value] of currencies2.entries()) {
  console.log(`${key}: ${value}`);
}

// Sets - Javascript set is a collection of unique values. Each value can occur only once in a set.

// Creating a Set - You can create a set by passing an array to the new Set() constructor
const letters1 = new Set(["a", "b", "c"]);
console.log(letters1); // Result - Set(3) {'a', 'b', 'c'}

// add() Method - To add the elements to the set.

const letters2 = new Set();
letters2.add("d");
letters2.add("e");
console.log(letters2); // Result - Set(2) {'d', 'e'}

// forEach() Method - It calls a function for each set element
const letters3 = new Set(["a", "b", "c", "d", "e", "f"]);

letters3.forEach((value, key) => {
  console.log(value, key); // Here the result for the key will be same as that of the value, bcoz set does not have any keys.
});

// values() Method - Returns the new iterator object containing all the values in a set
const letters4 = new Set(["a", "b", "c", "d"]);
console.log(letters4.values()); // Result - SetIterator {'a', 'b', 'c', 'd'}

let text = "";
for (const x of letters4.values()) {
  console.log(x);
  text += x;
}

console.log(text);
