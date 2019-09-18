/*---------------------------------------------------HOSTING-----------------------------------------------------*/
/*It talks about all the declaration
* It talks about all the declaration and provide them at the top of its scope.
* Their are two type of hosting are there one is variable and second is function hosting
* All the variable declaration will be hosted at the top & then one by one execution happens*/
/*-----------------------------------------------VARIABLE HOSTING------------------------------------------------*/
//1. Declaring with only one variable
/*
console.log(x);// undefined.
var x;
 */
/*compiler treatment
* var x;
* console.log(x);
*/
/*
In let as well as const both will not support hosting so we will get error because it belongs to the ECMA script it
*/
//2. Taking var x inside the function and trying to print outside.
function fun() {
    console.log(x);// undefined
    var x=12;
}
fun()
console.log(x);//ReferenceError- x is not defined.
/*compiler treatment
* i.function declaration
* ii.var x declaration
* iii. console.log(x);
* x=12
* console.log(x)
* */