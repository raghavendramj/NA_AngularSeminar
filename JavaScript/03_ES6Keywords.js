function printValues() {
  console.log("1");
  setTimeout(function () {
    console.log("2");
  }, 0);
  setTimeout(function () {
    console.log("3");
  }, 1000);
  console.log("4");
}
// printValues();

function interviewQuestion() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
interviewQuestion();
