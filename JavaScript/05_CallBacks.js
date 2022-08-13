let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};
// console.log("add(10, 20) :- ", add(10, 20));

let operate = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};

operate(20, 10, add);
operate(20, 10, subtract);
operate(20, 10, multiply);
