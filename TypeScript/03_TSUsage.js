var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const num: number = obj;
var myName = "Adam Gill"; //Explicit Type
var myNameWithoutExplicitType = "Adam Gil"; //Implicit Type
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// greet(40);
greet("Ricky!");
