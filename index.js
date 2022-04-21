console.log("working");

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

// var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
//Q1.it will show an error because when we are calling the function we write wrong name 

//Q2.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?----it will print 1
  }
  console.log(count); // What is logged?---it will print 0
})();
//Q2.output:-1 0

//Q3.
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
//it print three time 3

//Q4.Write a code to calculate area of a rectangle using inner function.
//  In this case outer function should accept parameter length and inner function should accept parameter breadth.
function outer(length){
    function inner(breadth){
areaRect = length*breadth;
console.log(`area of rectangle is ${areaRect}`);
    }inner(20);
}outer(30);

//Q5.Take a variable in outer function and create an inner function to increase the counter every time it is called

let outer1 = function(){
    variableCount = 0;
    inner1 = function(){
        variableCount+=1
        console.log(variableCount);
    }
}

outer1();
inner1();//1
inner1();//2
inner1();//3
inner1();//4
inner1();//5

//Q6.Print Output

var a = 12;
(function () {
  alert(a);
})();

//Q7.

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//Q8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
