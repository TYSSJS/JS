// function fun()
// {
//   console.log("Hey");
// }
// console.log(typeof (fun)); //function
//
// function fun1()
// {
//     console.log("hey"); //hey
// }
// console.log(typeof (fun1())); // not defined

// function ()// unidentified error
// {
//  console.log("Bye");
// }

// var x=function ()
// {
//     console.log("hey");
// }
// x(); // hey

// var x=function ()
// {
//   console.log("hey") //hey
// }
// console.log(x()); // undefined

// var x=function (a,b)
// {
//   console.log("hello");// hello
//   console.log(a);// 12
// }
// console.log(x(12,13,14));//undefined

// var x=function fun(a,b)
// {
//  console.log("Hey");//Hey
//  console.log(a);//12
// }
// console.log(x(12,13,14));//undefined  - and var x can hold normal function also but it is preferable to for
//                                // anonymous function

// var x= function fun(a,b)
// {
//    console.log("hey");
//    console.log(a);
// }
// console.log(x);//[Function:fun];

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