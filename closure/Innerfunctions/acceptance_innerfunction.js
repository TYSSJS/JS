//1.javascript support inner function
function fun()
{
    console.log("from fun");
    function fun1()
    {
        console.log("from fun1");
    }
}
fun();

//2.in this we will not come to know which function executes-so it will not support
/*function fun2()
{
    console.log("from fun2");
    function fun3()
    {
        console.log("from fun3");
    }
}
fun2()(); //here undefined() becos fun2 is not returning anything*/

//3.directely we cannot access the inner function
function fun2()
{
    console.log("from 3rd question");
    function  fun3()
    {
        console.log("from fun3 3rd question");
    }
}
fun2();
//fun1();

//4.here function open() is local w.r.t close().so, we can call open() within close
function close()
{
    console.log("from close");
    function open()
    {
        console.log("from open");
    }
    open();
}
close();

//5.Without calling outerfunction,innerfunction with IIFE
function outerfun()
{
    (function innerfun()
    {
        console.log("innerfun")
    })();
    innerfun();
}

//6.calling outerfunction,innerfunction with IIFE
function appt()
{
    (function flat()
    {
      console.log("from flat");
    })();
    flat();
}
appt();
