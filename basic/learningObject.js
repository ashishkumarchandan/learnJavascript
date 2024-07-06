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
f.length=3;
f.draw();

function CreatingRectangle(){
  this.length = 1;
  this.breadth = 2;
  this.draw = function (){
    console.log(this.length * this.breadth);
  }
}

let red = new CreatingRectangle();
red.length=12;
red.draw();

red.color = "yellow";
console.log(red);
delete red.color;
console.log(red);
