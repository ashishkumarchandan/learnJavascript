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