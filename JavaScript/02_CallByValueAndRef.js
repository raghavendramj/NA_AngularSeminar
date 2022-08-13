function copyByValue() {
  var a = 10;
  var b = a; //copy by value.

  console.log("Value of a ", a);
  console.log("Value of b ", b);

  a = 20; //if we modify a, only a gets modified!

  console.log("-------------------------------");
  console.log("Value of a ", a);
  console.log("Value of b ", b);
}

// copyByValue();

function copyByRefArray() {
  var cities = ["Bangalore", "Chennai", "Mumbai", "Kolkatta", "Delhi"];
  var citiesCopy = cities;

  console.log("Cities(O) :- ", cities);
  console.log("Cities(C) :- ", citiesCopy);

  //cities = ["Kerala", "TamilNadu", "Telanagana"]; //Changed the reference of cities!

  cities.shift(); //Only modify the reference
  cities.pop(); //Only modify the reference

  console.log("-------------------------------");
  console.log("Cities(O) :- ", cities);
  console.log("Cities(C) :- ", citiesCopy);
}
// copyByRefArray();

function copyByRefObjects() {
  var product = {
    name: "A 20",
    brand: "Mercedes Benz",
  };
  var prodCopy = product;
  console.log("Person(O) is :- ", product);
  console.log("Person(C) is :- ", prodCopy);

  //   product = {
  //     name: "Innova",
  //     brand: "Toyota",
  //   };

  product.address = "Bangalore"; //modifies same reference
  prodCopy["phone"] = 12345; //modifies same reference

  console.log("--------- SECOND CASE!----------------------");
  console.log("Person(O) is :- ", product);
  console.log("Person(C) is :- ", prodCopy);
}
copyByRefObjects();
