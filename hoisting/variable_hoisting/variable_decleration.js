//1.Using variable before declaring is possible inJS beocs of hoisting
/*console.log(x);
var x=12;*/

console.log(x);
var x;

//2.hoisting supports for javascript let & const is ecma script
let y = 12;
console.log(y);

//3.hoisting doesnot support for ecmascript
/*console.log(z);
let z =10;*/

//4.Hoisting within the function
function fun()
{
    console.log(a);
    var a=13;
}
fun();
//console.log(a);

//5.global decleration - here compiler is trying to understand
console.log(b);
b=12;