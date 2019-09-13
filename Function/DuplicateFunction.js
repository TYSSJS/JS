// Declaration:using function syntax with different parameter
//1>Using function without output
function fun()
{
    console.log("Hi");
}

function fun()
{
    console.log("Hello");
}
  // no output bcoz we are not executing

console.log("============================")
// 2>using function with 1-argument and calling that function

function  fun1()
{
    console.log("Yes");
}

function  fun1(a)
{
    console.log("No");

}

fun1();
console.log("============================")
3//> by using 2-argument at the time of calling function
function fun2(a)
{
    console.log("Ritika") ;
}
function  fun2()
{
   console.log("Raman") ;
}
fun2(10,"bch");

console.log("============================")
//4>calling function in between two function
function fun3(a)
{
   console.log("sfrg")
}
fun3(10);
function fun3(a,b)
{
    console.log("jdfh");
}
fun3();

//or each case it will always go for the latest implementation
