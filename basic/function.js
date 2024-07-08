/**
 * Prints a message to the console indicating that the function is running.
 *
 * @return {undefined} No return value.
 */
function run() {
  console.log("running");
}

run();

/**
 * Prints the `arguments` object to the console and returns without any value.
 *
 * @return {undefined} No return value.
 */
function sum1() {
  console.log(arguments);
  return;
}

/**
 * Calculates the sum of a variable number of numbers.
 *
 * @param {...number} numbers - The numbers to be summed.
 * @return {number} The sum of the numbers.
 */
function sum(...numbers) {
  console.log(numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}
let ans = sum(1, 2, 3, 4, 5, 6);
console.log(ans);
sum1(1, 2, 3, 4, 5, 6);

let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((a, b) => a + b, 0);
console.log(result);

let person = {
  fName: "ashish",
  lName: "kumar",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("value is not a string");
    }
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

// console.log(fullName.call(person));
console.log(person.fullName);
person.fullName = "Ashish Chandan";
console.log(person.fullName);
try {
  person.fullName = 2;
} catch (e) {
  console.log(e.message);
}
console.log(person.fullName);

{
  let a = 5;
  var b = 10;
}
try {
  console.log(a);
} catch (e) {
  console.log(e.message);
}
console.log(b);
