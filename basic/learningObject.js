let rectangle = {
  length: 11,
  breadth: 2,
  draw: function () {
    console.log(this.length * this.breadth);
  },
};

rectangle.draw();
function createRectangle(length, breadth) {
  return {
    length,
    breadth,
    draw: function () {
      console.log(this.length * this.breadth);
    },
  };
}

function cRectangle() {
  return {
    length: 55,
    breadth: 6,
    draw: function () {
      console.log(this.length * this.breadth);
    },
  };
}

let f = cRectangle();
f.length = 3;
f.draw();

function CreatingRectangle() {
  this.length = 1;
  this.breadth = 2;
  this.draw = function () {
    console.log(this.length * this.breadth);
  };
}

let red = new CreatingRectangle();
red.length = 12;
red.draw();

red.color = "yellow";
console.log(red);
delete red.color;
console.log(red);

let rect = new Function(
  "length",
  "breadth",
  `
  this.length = length;
  this.breadth = breadth;
  this.draw = function() {
    console.log("drawing");
  }
`
);
let r1 = new rect(2, 3);
r1.draw();
let d1 = new CreatingRectangle();
d1.draw();
console.log(d1);

// let a = 10;
// let b = a;
// a++;
// console.log(a, b);

let a = {
  value: 10,
};
let b = a;
a.value++;
console.log(a.value, b.value);

let newRect = {
  length: 3,
  breadth: 5,
};


for(let key in newRect){
  console.log(newRect[key] )
}

for(let key of Object.keys(newRect)){
  console.log(key);
}

for(let key of Object.entries(newRect)){
  console.log(key);
}