//////////////////////////////////////Number Object//////////////////////

var num=12;
console.log(Number.isInteger(num));

///for string

var num="12";
console.log(Number.isInteger(num));  //output: false

// for boolean

var num=true;
console.log(Number.isInteger(num));  //output: false

var num=false;
console.log(Number.isInteger(num));  //output: false

// for null

var num=null;
console.log(Number.isInteger(num));  //output: false