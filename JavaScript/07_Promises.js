// A promise object has a state that can be one of the following:

// Pending
// Fulfilled with a value
// Rejected for a reason

let addPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Array length must be >= 2");
    } else {
      let sum = arr[0] + arr[1];
      console.log("Sum is :- ", sum);
      resolve(arr);
    }
  });
};

let multiplyPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Array length must be >= 2");
    } else {
      let result = arr[0] * arr[1];
      console.log("Product is :- ", result);
      resolve(arr);
    }
  });
};

let subtractPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length <= 1) {
      reject("Array length must be >= 2");
    } else {
      let result = arr[0] - arr[1];
      console.log("Difference is :- ", result);
      resolve(arr);
    }
  });
};

// addPromise([20]).then(
//   (numsArray) => console.log("Addition successful ", numsArray),
//   (error) => console.log("Error occurred :- ", error)
// );

// 1st way of writing promise
addPromise([20, 5])
  .then(
    (numsArray) => {
      console.log("Addition successful ", numsArray);
      multiplyPromise(numsArray);
    },
    (error) => console.log("Error occurred :- ", error)
  )
  .then(
    (numsArray) => {
      console.log("Multiplication successful ", numsArray);
      subtractPromise(numsArray);
    },
    (error) => console.log("Error occurred :- ", error)
  )
  .then(
    (numsArray) => console.log("Subtraction successful ", numsArray),
    (error) => console.log("Error occurred :- ", error)
  );

//2nd way of promise chaining
// addPromise([10, 5])
//   .then(multiplyPromise)
//   .then(subtractPromise)
//   .catch((error) => console.log("Error occurred :- ", error));
