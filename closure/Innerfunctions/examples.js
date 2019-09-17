//1.returning a function expression
function fun1()
{
    return function fun2()
    {
        console.log("hi");
        return 12;
    };
}
console.log(fun1());

//2.Executing the function expression
function fun2()
{
    return function fun3()
    {
        console.log("hi");
        return 12;
    };
}
console.log(fun2()());

