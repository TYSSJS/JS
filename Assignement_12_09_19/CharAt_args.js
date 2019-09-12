//1. Passing args with different type-charAt() of String object

var s = "Welcome to JS";
console.log("***********");
console.log(s.charAt(-1));  //<length
console.log("************");
console.log(s.charAt(" ")); //w
console.log(s.charAt("3")); // c- passing number as string it will check for contains
console.log(s.charAt(15));  //>length
console.log(s.charAt("false"));//w
console.log(s.charAt("hi")); //w
console.log(s.charAt("true"));//w
console.log("****************");
console.log(s.charAt(false));//w
console.log(s.charAt(true)); //e
console.log(s.charAt(0)); //w
console.log(s.charAt(null));//w
console.log(s.charAt(undefined));//w
console.log(s.charAt(8.8));//t
console.log("**************");




