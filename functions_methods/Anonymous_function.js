//1.Anonymous function no name but the variable is holding function

var a = function ()
{
    console.log("hi");
}

//2.Anonymous function call
var a = function()
{
    console.log("Hello");
}
console.log(a());

var a = function()
{
    console.log("HI");
}
console.log(a);

//3.passing arguments to annonymous function
var a = function(a,b)
{
    console.log("Hello");
    console.log(a);
}
console.log(a(10,"good morning"));

//4.a variable holding a function with name
var x = function fun(a,b)
{
   console.log("HI");
}
console.log(x);

/*//5.we cannot access function outside. if, the function is declared with variable
var a = function fun(a,b)
{
    console.log("hello");
}
fun();  //Error: Function is not defined*/

//6.We can use function within a function
var x = function fun(a,b)
{
    console.log("bye");
    console.log(fun);
}
x();

//7.Directely we cannot access function outside by returning we can try to find it is function or not
var a = function fun(a,b)
{
    console.log("bye");
    return fun;
}
console.log(a());