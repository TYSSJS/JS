//Assignment on arrow function

//var x=(a)=>(console.log("hi"));
//x(11);

var fun2=(a)=>(console.log(a));
var fun1=()=>(console.log("hi"));
fun2(fun1);
//----------------------------------------
var fun3=(b)=>(console.log(b));
fun3(()=>(console.log("hi")))
//---------------------------------------
var fun4=()=>(12);
//var fun4=()=>(return 12);//error of unexpected token return
console.log(fun4());
//-----------------------------------------------------------------

var f1=()=>{console.log("hi");console.log("hello")};
f1();
var f2=()=>{console.log("hi");12};
console.log(f2());

var fun5=()=>(console.log("hi"),12,console.log("hello"));
fun5()
var fun6=()=>(console.log("hi"),12,console.log("hello"));//undefined because 12 is returned in middle
console.log(fun6());