class Rectangle {
  x: number;
  y: number;
}

const rect = new Rectangle();
rect.x = 10;
rect.y = 20;

console.log("Rectangle obj : ", rect);

class TestGreet {
  name: string;
}

class Greeter {
  message: string;
  constructor(message) {
    this.message = message;
  }
}
let obj02 = new Greeter('Welcome to the class');
console.log(obj02)