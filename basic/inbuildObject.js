console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(6.8));
console.log(Math.round(1.2));
console.log(Math.abs(-3.8));

let lastName = "Kumar";
let firstName = new String("Ashish");
console.log(firstName, lastName);
console.log(typeof firstName, typeof lastName);
console.log(lastName.length);

let message = "Let me think";
let words = message.split(" ");
console.log(words);
console.log(words[1]);
message = message.replace("think", "contemplate");
console.log(message);

let date = new Date();
console.log(date);

let date2 = new Date(2003, 4, 10);
console.log(date2);

let numbers = [1, 4, 5, 7];
console.log(numbers[0]);
numbers.push(9);
numbers.unshift(8);
console.log(numbers);
numbers.splice(3, 0, 2);
console.log(numbers);

console.log(numbers.includes(7));
console.log(numbers.indexOf(4, 1));

let lang = [
  { no: 1, name: "C++" },
  {
    no: 2,
    name: "JavaScript",
  },
];

console.log(lang);
console.log(lang.indexOf({ no: 1, name: "C++" }, 0));

let isAvail = lang.find((specific) => specific.name === "JavaScript");
console.log(isAvail);

let temp = [1, 2, 3, 4, 5];
temp.length = 0;
console.log(temp);

temp.splice(0, 0, 1, 2, 3);
numbers = numbers.concat(temp);
console.log(numbers);

const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(prop, obj[prop]);
}

const arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(index, item);
});

const arr2 = [4, 5, 6];
for (let item of arr2) {
  console.log(item);
  if (item === 5) break;
}

let marks = [10, 20, 30, 40, 50, 60];
let sliced = marks.slice(1, 5);
console.log(marks);
console.log(sliced);

let first = [1, 2, 3, 4, 9];
let second = [5, 6, 7, 8];
let combined = [...first, ...second];
console.log(combined);
function sum(a, b, c) {
  return a + b + c;
}
const numbers1 = [1, 2, 3];
const result = sum(...numbers1);
console.log(result);

let numbers2 = [9, 45, 2, 765, 123, -3];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
numbers2.reverse();
console.log(numbers2);

let numbers3 = [1, 2, 3, -4, -5];
// let filtered1 = numbers3.filter((item) => item > 0);
// console.log(filtered1);

let filtered2 = numbers3.filter((item) => item < 0);
console.log(filtered2);

let numbers4 = [1, 2, 3, 4, 5];
let mapped = numbers4.map((item) => `item ${item}`);
console.log(mapped);

let items = numbers3.filter((item) => item > 0).map((num) => ({ value: num }));
console.log(items);
// let items1 = numbers3
//   .filter((item) => item > 0)
//   .map((num) => {
//     return { value: num };
//   });
// console.log(items1);
