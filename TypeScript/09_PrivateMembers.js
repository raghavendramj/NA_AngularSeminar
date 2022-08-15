var Product = /** @class */ (function () {
    function Product(_model, _price) {
        if (_model === void 0) { _model = "S22 Ultra"; }
        if (_price === void 0) { _price = "1.16lks"; }
        this._model = _model;
        this._price = _price;
    }
    Object.defineProperty(Product.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (str) {
            console.log("Setting via setter!");
            if (str !== undefined) {
                this._model = str;
            }
            else {
                console.error("Incorrect model");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var test1 = new Product();
console.log("Test Default values : ", test1);
var iphone = new Product("Iphone", '90k');
console.log("Object values : ", iphone);
