/*Functions are the blocks which performs certain task.
* If we are taking any var in the function block then its scope will be till that function scope.
* They type of function is is 'function'*/

/*-------------------------------------------------ANONYMOUS---------------------------------------------------*/
/*
//1. typeof function
function fun()
{
  console.log("Hey");
}
console.log(typeof (fun)); //function
 */

/*
//2.Simple execution
function fun1()
{
    console.log("hey"); //hey
}
console.log(typeof (fun1())); // not defined
 */

/*
//3.Anonymous function execution without storing it in variable
function ()// unidentified error
{
 console.log("Bye");
}
 */

/*
//4. Anonymous function while storing in the variable
var x=function ()
{
    console.log("hey");
}
x(); // hey

 */

/*
//5. We are calling as well as printing the x function;
var x=function ()
{
  console.log("hey") //hey
}
console.log(x()); // undefined

 */

/*
//6. we are calling as well as printing the x function while passing the parameter.
var x=function (a,b)
{
  console.log("hello");// hello
  console.log(a);// 12
}
console.log(x(12,13,14));//undefined

 */

/*
// 7. We are calling the normal function.
var x=function fun(a,b)
{
 console.log("Hey");//Hey
 console.log(a);//12
}
console.log(x(12,13,14));//undefined  - and var x can hold normal function also but it is preferable to for

                                // anonymous function
 */


/*
//
var x= function fun(a,b)
{
   console.log("hey");
   console.log(a);
}
console.log(x);//[Function:fun];

 */
// var x=function fun(a,b)
// {
//   console.log("Hey");
//   console.log(a);
// }
// fun();// Error- fun() is not defined.

// var x=function fun(a,b)
// {
//  console.log("Hey");//Hey
//  console.log(fun); // undefined
// }
// x(12);

var x =function fun(a,b )
{
console.log("Hey"); //Hey
return fun;
}
console.log(x());//[Function:fun]