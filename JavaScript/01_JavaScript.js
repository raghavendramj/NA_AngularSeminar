var car = {
  name: "Fiat", //property
  model: "Punto", //property
  color: "white", //property
  start: function () {
    //method
    console.log("Car started!");
  },
  stop: function () {
    //method
    console.log("Car stopped!");
  },
};

function accessTest() {
  //console.log("Object :- ", car);
  console.log("Object property :- ", car.model);
  console.log("Object property :- ", car["color"]);
  car.start();
}

// accessTest();

function forInLoop() {
  for (var key in car) {
    console.log("Key :- ", key, " Value:- ", car[key]);
  }
}
// forInLoop();

function question() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };
  var classical = "rock";
  console.log("music.classical :- ", music.classical); //music.classical -> violin
  console.log("music[classical] :- ", music[classical]); //music['rock'] -> guitar
}

// question();

function arrayMethodTest() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  //first_param -> start-index, second_param, end-index(exclusive)
  console.log("cities.slice(0, 3) :- ", cities.slice(0, 3));
  console.log("cities.slice(0, -1) :- ", cities.slice(0, -1)); //0, 3 (exclusive)
  console.log("cities.slice(-3, -1) :- ", cities.slice(-3, -1)); //1, 3 (exclusive)
}

// arrayMethodTest();

//If beginIndex or endIndex is negative then it is treated as
// beginIndex = arr.length + beginIndex
// endIndex   = arr.length + endIndex

// 4 + (-1) = 3
// 4 + (-3) = 1

function spliceMethods() {
  // Parameters
  // 1 -> from position where elements needs to be added/removed
  // 2 -> how many elements needs to removed
  // 3 and afterwards -> (element(s) that needs to be added);

  //Case-01 :- Only Removal
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("Before Removal :-", cities);
  cities.splice(1, 2);
  console.log("After Removal :-", cities);
  console.log("--------------------------------------------------------");

  //Case-02 :- Only Addition
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("Before addition :-", cities);
  cities.splice(2, 0, "Lucknow", "MP");
  console.log("After addition :-", cities);
  console.log("--------------------------------------------------------");

  //Case-03 :- Both addition and removal
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("Before Addition and Removal :-", cities);
  cities.splice(1, 3, "Kerala", "Gujurat");
  console.log("After Addition and Removal :-", cities);
}

// spliceMethods();

//Add or Remove elements from the array

//From Beginning -> shift and unshift
//From End -> push and pop

function printElements(arr) {
  if (arr == undefined || arr === null || arr.length == 0) return;
  console.log("Length  :- ", arr.length, "-> Array :- ", arr);
}

function testArryMethodConti() {
  var students = ["Agam", "Aishwarya", "Jeevan", "Harshith", "Prashanth"];
  printElements(students);
  console.log("***************** After delete method ***************");
  delete students[1];
  printElements(students);
  delete students[3];
  printElements(students);
  delete students[4];
  printElements(students);
}
// testArryMethodConti();

function mergeThreeArrays() {
  var arr1 = ["Agam", "Aishwarya"];
  var arr2 = ["Jeevan", "Harshith"];
  var arr3 = ["Prashanth", "Chaithra"];
  var clubbedArrays = arr1.concat(arr2);
  console.log("1. Two arrays :- ", clubbedArrays);
  clubbedArrays = arr1.concat(arr2, arr3);
  console.log("2. arr1.concat(arr2, arr3):- ", clubbedArrays);
  clubbedArrays = arr1.concat(arr2).concat(arr3);
  console.log("3. arr1.concat(arr2).concat(arr3):- ", clubbedArrays);
}

mergeThreeArrays();