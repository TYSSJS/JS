`function with same name with diff argument (but it is not overloading)`
function fun()
{
    console.log("fun-1")
}
fun()                       //it will all ways call second loaded function (1st function got replaced)
function fun(a)
{
    console.log("fun-2")
}
fun(10)