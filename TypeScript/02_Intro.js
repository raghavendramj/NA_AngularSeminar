console.log("Welcome to Typescript!");
function greetPeople(person, date) {
    console.log("Hello " + person + ", today is " + date);
}
greetPeople("Micheal", new Date());
// Compile and execute typescript!
// Step 01:- Transpilation/Compilation tsc 02_Intro.ts
//The above step will generate a 02_Intro.js
// Step 02:- Execution   node 02_Intro
