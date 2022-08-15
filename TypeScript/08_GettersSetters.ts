class Vehicle {
  _model: string;
  constructor(model: string = "Innova") {
    this._model = model;
  }

  get model() {
    return this._model;
  }

  set model(str) {
    console.log("Setting via setter!");
    if (str !== undefined) {
      this._model = str;
    } else {
      console.error("Incorrect model");
    }
  }
}


let defa = new Vehicle();
console.log("Test Default values : ", defa);

let kia = new Vehicle("Sonet");
console.log("Object values : ", kia);


console.log("Before :- kia.model ", kia.model);
kia.model = "Seltos"; //setter.
console.log("After :- kia.model ", kia.model);