var Vehicle = /** @class */ (function () {
    function Vehicle(model) {
        if (model === void 0) { model = "Innova"; }
        this._model = model;
    }
    Object.defineProperty(Vehicle.prototype, "model", {
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
    return Vehicle;
}());
var defa = new Vehicle();
console.log("Test Default values : ", defa);
var kia = new Vehicle("Sonet");
console.log("Object values : ", kia);
console.log("Before :- kia.model ", kia.model);
kia.model = "Seltos"; //setter.
console.log("After :- kia.model ", kia.model);
