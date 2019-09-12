/////////////////////////string objects///////////////

///////////////////////indexOf function/////////////////////////////////////

var s="javascript";
console.log(s.indexOf('a')); //output: 1

//with multiple values
var s="helloab"
console.log(s.indexOf("he"));// output :index of first value

//with multiple values
console.log(s.indexOf("o,o"));// output :-1

//with empty value
console.log(s.indexOf());// output :-1

//with boolean values
console.log(s.indexOf(true));// output :-1

//to uppercase funtion
console.log(s.toUpperCase()) //output: HELLOAB

//with any other values
console.log(s.toUpperCase("kk")) //output: HELLOAB