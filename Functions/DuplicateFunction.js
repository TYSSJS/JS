/*Duplicate functions are the functions where two functions are having same name
* but different formal arguments. So, we are checking that is method overloading is supported in JavaScript
* by covering all the possible scenarios*/

//We are declaring two functions with the same name and checking the output.
/*
function fun()
{
 console.log("Fun-1");
}
function fun(a)
{
 console.log("Fun-2");//Fun-2
}
fun();
*/

//We are retuning function in between two functions
/*
function fun()
{
    console.log("fun-1");
}
fun();
function fun()
{
  console.log("fun-2"); // fun-2
}
 */

//We are calling function by giving parameter
/*
function fun()
{
    console.log("Fun-1");
}
function fun(a)
{
    console.log("Fun-2");//Fun-2
}
fun(12);
 */