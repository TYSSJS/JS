function f1(){
    console.log("Hi");
    console.log("Hello");
}
f1();
//var fun1=()=>(console.log("Hi");console.log("Hello"));
var fun1=()=>{console.log("Hi");console.log("Hello")};
fun1();
var fun2=()=>{console.log("Hi");console.log("Hello");12};
console.log(fun2());
var fun3=()=>{console.log("Hi");console.log("Hello");return 12};
console.log(fun3());