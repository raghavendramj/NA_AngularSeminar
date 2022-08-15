function testArrays() {
    var names = ["Alice", "Bob", "Eve"];
    names.forEach(function (value, index, arr) {
        console.log("Index :", index, " Value :", value, " arr :", arr, "value.toUpperCase():- ", value.toUpperCase());
    });
}
testArrays();
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
//printCoord({ x: 3, y: '7' }); //Type 'string' is not assignable to type 'number'.ts(2322)
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a;
    console.log("Object :", obj);
    //console.log(obj.last.toUpperCase()); //Object is possibly 'undefined'.ts(2532)
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase()); //Okay
    }
    // A safe alternative using modern JavaScript syntax:
    console.log("obj.last?.toUpperCase() :- ", (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "raghav", last: "MJ" });
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log("My Id is ", id);
    }
}
printId(101);
printId("Raghav");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log("getFirstThree([6, 1, 2, 9, 2]) :- ", getFirstThree([6, 1, 2, 9, 2]));
console.log("getFirstThree('rickypointing') :- ", getFirstThree('rickypointing'));
