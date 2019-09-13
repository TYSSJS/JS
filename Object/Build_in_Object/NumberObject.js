//Description: using methods of Number Object
var num=12;
//1> using isInteger() of Number Object
console.log(Number.isInteger(num)); //true, so, internally it is integer.
console.log("====================")
//2> using isInteger() with decimal number of Number Object
var num1=12.3;
console.log(Number.isInteger(num1));//false
console.log("====================")
//3> using isInteger() with string of Number Object
var num2="1";
console.log(Number.isInteger(num2));//false
