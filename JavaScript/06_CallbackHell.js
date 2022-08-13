let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let operate = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is :- ", result);
};

let operations = (a, b) => {
  //operate(a, b, add);
  operate(a, b, (a, b) => {
    //operate(a, b, multiply);
    operate(a, b, (a, b) => {
      //operate(a, b, subtract);
      operate(a, b, (a, b) => {
        //throw console.error("Error occured");
        return a - b;
      });
      return a * b;
    });
    return a + b;
  });
};

operations(20, 5);
