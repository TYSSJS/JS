function fun()
{
    console.log("hi");       // this method wont print any thing becz we didn't call this method but compilation
                            //  will happened
}

function fun1()
{
    console.log("hai");
}
fun1();

function fun2()
{
    console.log("bye");
}
console.log(fun2());

// function fun3(var x,var y)
// {
//     console.log("hi")       //compilation Error: Unexpected token var
// }

function fun4(x,y)
{
    console.log("hi");
}
fun4(10,'bfih');

function fun5(x,y)
{
    console.log("hi");
}
console.log(fun5(10,'bfih'));

function fun6(x,y)
{
    console.log("tata");
    return 10;
}
console.log(fun6(10,"huh"));

function fun7(x,y)
{
    console.log("tata");
    return 10;
}
fun7(10,"huh");

// function fun8(x,y)
// {
//     console.log("hdfb");
//     return 45;
// }
// fun8(10,20);
// console.log(a);          //ReferenceError: a is not defined[becz we cant use a local var in out side of the scope]

function fun9()
{
    console.log("tata");
}
console.log(fun9);