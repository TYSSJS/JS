/*Function is as similar as variable hosting first it checks the declaration and then assignment
* Hosting is done top to bottom.*/
//1.scenario
/*
console.log(fun());
function fun() {
    console.log('hi');
}
output:
hi
undefined
 */
/*compiler treatment
* function fun(){
* console.log('hi');
* }
* console.log(fun())
*/

//2.scenario
/*
function fun() {
    console.log('hi');
}
fun();
function fun() {
    console.log('hello');
}
 */
//output
// hello
/*compiler treatment
* function fun() {
    console.log('hi');
}
function fun() {
    console.log('hello');
}
* fun();
*/

//3.scenario
/*
console.log(x());// TypeError: x is not a function
var x =function () {
    console.log('js');
}
 */

/*compiler treatment
* var x;
* console.log(x())
* x=function(){}*/

//4.scenario
/*
var x=function () {
    console.log('js');
}
console.log(x());
 */
/*compiler treatment
* var x;
*  x=function () {
    console.log('js');
}
* console.log(x());//js
*                    undefined*/

//5.scenario
/*
var x=12;
function x() {
    console.log('hi');
}
console.log(x());//error- x is not a function.
 */
/*compiler treatment
* var x;
* function x(){}
* x=12
* console.log(x())
* */

//6.scenario
/*
var x=12;
console.log(x());// error- x is not a function.
function x() {
    console.log('hi');
}
 */

/*compiler treatment
* var x;
* function x(){}
* x=12
* console.log(x())*/

//7.scenario
/*
var x;
console.log(x());// hi
                 // undefined
function x() {
    console.log('hi');
}
 */

/*compiler treatment
* var x;
* function x(){}
* console.log(x())*/

//8.scenario
/*
console.log(x());// hi
                 //undefined
var x=12;
function x() {
    console.log('hi');
}
 */

/*compiler treatment
* var x;
* function x(){}
* console.log(x())
* x=12*/

//9.scenario
/*
console.log(x());//hi
                 //undefined
function x() {
console.log('hi')
}
var x;
 */
/*compiler treatment
* function x(){}
* var x;
* console.log.(x())*/