//Variable Hositing
//-----------------------------
/*1.
console.log(x);
var x;

o/p :undefined
*/
/*2.
console.log(x);
var x=12;
undefined

3.
let x=12;
console.log(x);
o/p :12

 */
/*4.
function fun()
{
    console.log(x);
    x=2;
}
fun();
console.log(x);

ReferenceError: x is not defined

*/

//Function Hoisting
//-------------------------

/*

 */
/*2.
function fun()
{2
    console.log("Hi");

}
fun();
function fun()
{
    console.log("Hello");

}

*/
 /*3.
console.log(x())
var x=function fun()
{
    console.log("JS");
    console.log(fun);

}
console.log(x())
^

TypeError: x is not a function

*/
 /*4.
 var x=function fun()
 {
     console.log("JS");

 }
 console.log(x());

JS
undefined

*/
 /*5.
var x=12;
function x()
{
  console.log("Hi");

}
console.log(x());
*/
/* 6.
 var x;
 function x()
 {
     console.log("Hi");

 }
 console.log(x());
x=12;

Hi Undefined

*/
/*6
console.log(x);
function x()
{
    console.log("Hi")
}
var x=undefined;

[Function: x]
*/
