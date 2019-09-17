//1.
/*function fun()
{
    console.log();
}();*/

//2.
function fun()
{
    console.log("hi");
}(12);

//3.
/*(); - error:uncxpected token*/

//4.
var x=(12);
console.log(x);

//5.
(0);

//6.
/*function ()   //error:becos annonymous function to be stored
{
    console.log("hi");
}();
*/

//7.
var x = function()
{
    console.log("hi");
}();

//8.To see the importance of ;  - storing in variable is considered as annonymous

var x = function fun()
{
    console.log("hi");
}();

/*var x = function fun()
{
    console.log("hi");
};();*/