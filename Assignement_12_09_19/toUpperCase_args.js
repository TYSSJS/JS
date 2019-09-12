//3.passing argument with different type-toUpperCase() of String object
var s = "Welcome 2 JS";
var s1 = ["welcome",2,"india"];
console.log("***********");
console.log(s.toUpperCase());
console.log("************");
console.log(s.toUpperCase(s));
console.log(s.toUpperCase("s"));
console.log(s.toUpperCase('s'));
console.log(s.toUpperCase(s1)); //we can pass array
console.log(s.toUpperCase(a)); //error
console.log("************");