//1.syntax of Arrow function

fun1=()=>(console.log("from function fun1"));
fun2=(a)=>(console.log("from function fun2"));
fun2(fun1);

/*function fun1()
{
    console.log("from function fun1");
}
function fun2(a)
{
    console.log("from function fun2");
}
fun2(fun1); */

//2.Function with return

var f1 = ()=>(12);
console.log(f1());

function f1()
{
    return 12;
}

//3.Function with multiple statements
f1= ()=>{console.log("hi"),console.log("good morning")};
f1();

function f1()
{
    console.log("hi");
    console.log("good morning");
}
f1();

//4.Function with statement and return
var f1 = ()=>{console.log("stmt from arrow function");return 12};
/*function f1()
{
    console.log("function with stmt & return");
    return 12;
}*/
console.log(f1());

//5.Function with multiple statement and multiple return

var fun = ()=>(console.log("hi"),console.log("good"),10,console.log("morning"),"day");
/*function fun()
{
    console.log("hi");
    console.log("good");
    return 10;
    console.log("morning");
    return "day";
}*/
console.log(fun());
