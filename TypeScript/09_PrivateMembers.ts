class Product {
  constructor(private _model = "S22 Ultra", private _price = "1.16lks") {}

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


let test1 = new Product();
console.log("Test Default values : ", test1);

let iphone = new Product("Iphone", '90k');
console.log("Object values : ", iphone); 