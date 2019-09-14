/*//1.using method name without using () will hold - [Function:fun]
function fun()
{
    console.log("hi");
    return 12;
}
console.log(fun);*/

//2.passing parameter is optional
function fun(a,b,c)
{
    console.log("hi");
}
console.log(fun());

function  fun1(a,b,c)
{
   console.log("hello");
   console.log(a);
}
console.log(fun1(12));

function fun2(a,b,c)
{
    console.log(a);
    console.log("hi");
}
fun2();

//3.passing more parameter it will accept becos -global variable will be holding all set of data
function fun (a,b)
{
    console.log("bye");
    console.log(a);
    console.log(arguments[4]);
}
console.log(fun(12,"hi",true,null,undefined));

//4.To check type of function

function fun()
{
    console.log("hi");
}
console.log(typeof fun);//op-function

function fun1()
{
    console.log("hi");
}
console.log(typeof fun());// op-undefined