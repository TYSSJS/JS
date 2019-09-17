//1.internal hoisting in function
console.log(fun())
function fun()
{
    console.log("hii");
}

/*function fun()
{
    console.log("hii");
}
console.log(fun());*/

//2.to check -  first hoisting check for the decleration not initilization

console.log(x());
var x = function fun()
{
    console.log("JS");
}

/*var x;
 console.log(x());
 x= function fun()
 {
 console.log("JS");
 }*/

//3.to check how hoisting happens
/*var x=12;
function x()
{
    console.log("hi");
}
console.log(x());*/

/*var x;
* function x()
{
    console.log("hi");
}
x=12;
console.log(x());*/

//4.Overloading happens in memory - function will be executed
var x;
function x()
{
    console.log("hi");
}
console.log(x());

//5.After decleration by hoisting - execution happens sequentially
var x;
console.log(x());
function x()
{
    console.log("hi");
}

/*var x = 12;
console.log(x());
function x()
{
    console.log("hi");
}*/

//6.Example to check it is not holding undefined
console.log(x());
function x()
{
    console.log("hi for 6")
}
var x;

//7.To check the execution by using hoisting
console.log(x());
var x = 12;
function x()
{
    console.log("hi from 7th question");
}