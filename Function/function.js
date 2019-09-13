// Declaration:creating function and executing
//1>function declaration
function m1()
{

    console.log("Hi") // no output
}

console.log("===================")
//2> calling function
function fun1()
{
    console.log("Hi");
}
fun1();

console.log("===================")
//3> returning some value and calling function
function fun2()
{
    console.log("hi");
    return 12;
}
fun2();

console.log("===================")
//4>checking by using printing statement after calling statement
function fun3()
{
    console.log("hello");
    return 10;

}
fun3();
console.log("hi");

console.log("===================")
//5>checking by calling function and printing
function r1()
{
console.log("hi");
return 12;

}
console.log(r1());

console.log("===================")
//6>checking by calling function without returning anything
function s1()
{
    console.log("Hi")
}
console.log(s1());

console.log("===================")
//7>calling function and returning invalid data
function r2()
{
    console.log("hi")
    return abc;
}
console.log(r2()); // error:because abc is not defined.
