/*Global variables this are the variable which ara present globally which can be accessed any where in the file
* even it can be accessed in other files also by importing.
* whenever we are calling the method at that time declaration is done by the compiler itself
* which can be also accessed out of the function where it is declared in the that function.
* we can strict the global variable by using 'use strict'*/
//1. checking if it available out side the function.
/*
function fun() {
    x=12;

}
fun();
console.log(x); //2
 */

//2.checking what will happen if we are declaring the global variable inside as well as out side the function.
/*
x=13;
function fun() {
    x=12;
}
fun();
console.log(x);//12- as it is re-initialising it in the function.
 */

//3. Using the let inside the function.
/*
let x=13;
function fun() {
     x=12;
}
fun();
console.log(x);//12
 */

//4. Taking both formal argument in function same.
/*
function fun(a,a) {
     console.log(a);// 20- as it is over riding the formal argument
}
fun(10,20);
 */

//5. Taking two functions and declare global variable and using the use strict

function fun() {
    'use strict'
     a=12;// ReferenceError- a is not defined.
     console.log(a)
}
function fun1() {
     a=12;
}
fun();