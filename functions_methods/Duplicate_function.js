/*first function is loaded in second function it will check
* function is defined or not if it defined then previously defined
* is erased and new function is stored*/
function fun()
{
    console.log("fun-1");
}
function fun(a)
{
    console.log("fun-2");
}
//fun(); - op:fun-2
fun(10);

//2.First loading then execution happens
function fun()
{
    console.log("fun-1");
}
fun();
function  fun(a)
{
    console.log("fun-2");
}