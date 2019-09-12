
////////////////////String Object//////////////////

////////////////////////////charAt() function////////////////////////////

//with boolean value true
var s="hello"
console.log(s.charAt(true)) //output is e

//with boolean value false
var s="hello"
console.log(s.charAt(true)) //output is e

//with number greater than its length

var s="goodnight"
console.log(s.length); //lenght is 9
console.log(s.charAt(10) ) //output is empty

//with  null
var s="bye"
console.log(s.charAt(null) ) //output is b

//with  empty
var s='hi'
console.log(s.charAt()); // output is h

//with  undefined
var s="bye"
console.log(s.charAt(x) ) //ReferenceError: x is not defined
