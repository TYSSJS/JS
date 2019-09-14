//1.syntax -()(); 1st() - is for function 2nd()-is for calling
(function fun()
{
    console.log("JS");
})();

//2.No need to store annonymous function becos we are calling immidetly
(function ()
{
    console.log("JS from annonymous function");
})();

//3.if we store IIFE expression in variable it holds the return type of function
var x = (function ()
{
    console.log("from function");
})();
console.log(x);

//4.to check type of ()();
console.log(typeof x);

//5.to pass an argument for IIFE
(function (a,b)
{
    console.log(a+b);
})(1,2);

//6.we cannot call function outside becos it is local
(function fun()
{
    console.log("from function");
})();
fun(); //Error:fun is not defined

