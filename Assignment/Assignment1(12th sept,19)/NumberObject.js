// Description:checking method of Number Object
//1>checking with 0
var num=0;
console.log(Number.isInteger(num));//true, internally 0 is an integer
console.log("=================");
//2>checking with boolean
var num1=true;
console.log(Number.isInteger(num1));// false
var num1=false;
console.log(Number.isInteger(num1));// false
console.log("=================");
//3>checking with string
var num2="true";
console.log(Number.isInteger(num2));//false
var num2="false";
console.log(Number.isInteger(num2)); //false





