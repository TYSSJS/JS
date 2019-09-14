// syntax= (Expression)();- Immediately invoking function expression

// (function ()
// {
//  console.log("hey") //hey
// })();

// MAINLY THIS ARE USED FOR TO INVOKE ANONYMOUS FUNCTIONS.

// (function (a,b)
// {
//   console.log(a+b);
// })(2,3); //5

// var x=(function fun()
// {
//  console.log("Hey") //Hey
// })();
// console.log(typeof (x));// undefined

var x=(function fun()
{
    console.log("Hey") //Hey
    return fun;
})();
console.log(typeof (x));// function
