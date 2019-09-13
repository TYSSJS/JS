//Declaration:function with different parameters
//1>passing 2-para and calling function
/*function ritzi(var a, var b)
{
    console.log("hi"); // Error: unexpected token var
}*/
//2>passing 2-para and not calling function
function r1(a,b)
{
    console.log("hi") // no output bcoz we are not calling the function and syntax is correct
}

console.log("=============================")
//3>passing 2-para and calling function and printing together
function r2(a,b)
{
    console.log("hi")
}
console.log(r2());

console.log("=============================")
//4>checking with 2-para and passing 2-values while calling
function r3(a,b)
{
    console.log("hello");
}
console.log(r3(40,"jhjh"));

console.log("=============================")
//5>passing 2-para and returning some value
function r4(a,b)
{
  console.log("Hi")
    return 12;
}

