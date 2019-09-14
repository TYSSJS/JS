function fun(a,b)
{
    console.log("hi");
    return 12;
}
console.log(fun(10,"aks"));


/*//1. variables within function cannot be used outside function
function fun(a,b)
{
    console.log(a);
    console.log("morining");
}
console.log(fun(12,"good"));
console.log(a); //Error: a is not defined*/


/*function fun1()
{
    console.log("Bye");
}
function fun2(a)
{
    console.log(a())
}
fun2(fun1);*/

//2.To check an parameter can hold a function

function fun1()
{
    console.log("hi");
    return 12;
}
function fun2(a)
{
    a();
}
console.log(fun2(fun1));

//3.To check a function can return another function

/*function fun1()
{
    console.log("bye");
}
function fun2(a)
{
    console.log("hi");
    return a;
}
console.log(fun2(fun1));*/

function  fun1()
{
    console.log("bye");
    return 12;
}
function fun2(a)
{
    console.log("hi");
    return a();
}
console.log(fun2(fun1));
