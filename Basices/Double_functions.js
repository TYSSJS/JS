// function fun()
// {
//     console.log("hi");
// }
// function fun1(a)
// {
//     console.log("kjssb");
// }
// fun1(fun);// Here we can pass the function as a argument so it wont give the error
//
// function fun2()
// {
//     console.log("hi");
// }
// function fun3(a)
// {
//     console.log(a());
// }
// fun3(fun2);
//
// function fun4()
// {
//     console.log("hi");
// }
// function fun5(a)
// {
//     a();
// }
// console.log(fun5(fun4));


function fun6()
{
    console.log("hi")
    return 10;
}
function fun7(a) {

    console.log(a);
}
fun7(fun6())

