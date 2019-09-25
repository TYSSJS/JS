/*Covering the extra concept of JavaScript*/
/*
//1. Why closing with semi-colon is important
function fun() {
    console.log('hi');
}(); // SyntaxError: Unexpected token )

 */

/*
//2.After giving parameter while calling method
function fun() {
    console.log('hi');
}(12);
// It is giving empty console i.e if we are giving parameter while calling it simply acting as (12);
// and providing ; after the function.
 */

/*
//3. Without providing function name and providing parameter
function () {        //Unexpected token (
    console.log('hi');
}(12);
//So function is expecting function name that we are not giving.
 */


/* 4. By storing the same function into variable and not providing any parameter.
var x=function () {
    console.log('hi');//hi
}();
// x=function (){}(); as it is acting as anonymous function.
// Now it is acting as x();
 */

/*
//5. By providing ; at the end of function.
var x=function () {
    console.log('hi');
};(); //SyntaxError: Unexpected token )
//Now ; is separating the function or removing the link for calling.
// Now it is acting like x;();
 */

//6. By providing name to the function.
var x=function fun() {
    console.log('hi');
}(); //hi