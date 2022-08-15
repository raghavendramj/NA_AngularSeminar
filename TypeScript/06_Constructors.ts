class Square {
  x: number;
  y: number;

  //Defaults -> 0, 0
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
let square1 = new Square(); //{ x: 0, y: 0 }
console.log("Test Square : ", square1);

let square2 = new Square(12, 23); //{ x: 12, y: 23 }
console.log("Test Square : ", square2);
