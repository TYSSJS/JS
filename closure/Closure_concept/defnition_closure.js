/*Two function is needed and it should be a nested function*/
var c=14;
function fun1()
{
    var b=12;
    function fun2()
    {
        var a=17;
        console.log("hi");
        console.log(a);
        console.log(b);
        console.log(c);
    }
    fun2();
}
fun1();