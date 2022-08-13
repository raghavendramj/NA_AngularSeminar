//Normal Function
function add(a, b) {
  return a + b;
}

//Function Expression
let funcExpression = function (a, b) {
  return a + b;
};

//Arrow function

let arrowFun = () => {
  return "Welcome";
};

let arrowFunSimplified = () => "Welcome";

function mapFun() {
  let numbers = [1, 2, 3, 4, 5, 6];

  let squares = [];
  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i]);
  }
  console.log("Squares typical way! :- ", squares);

  let squaresES6 = numbers.map((eachValue) => eachValue * eachValue);
  console.log("Squares ES6 way! :- ", squaresES6);
}
// mapFun();

function filterFunction() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let even = [];
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }
  console.log("Typical Even numbers :- ", even);
  console.log("Typical Odd numbers :- ", odd);

  console.log(
    "ES6 Even numbers :- ",
    numbers.filter((each) => each % 2 === 0)
  );
  console.log(
    "ES6 Odd numbers :- ",
    numbers.filter((each) => each % 2 !== 0)
  );
}
// filterFunction();

function reduceFunction() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Typical reduce :- ", sum);
  console.log(
    "ES6 reduce :- ",
    numbers.reduce((prevValue, currValue) => prevValue + currValue)
  );

  let answer = numbers.reduce((prevValue, currValue) => {
    console.log("Previous Value :- ", prevValue, " Current Value :- ", currValue); 
    return prevValue + currValue;
  }, 100);
}
reduceFunction();
