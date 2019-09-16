function fun1(){
    console.log("Hi");
}
function fun2(a){
    console.log("Hello");
}
fun2(fun1);

function fun3(a){
    console.log(a);
}
fun3(function fun1(a,b){
    console.log("Hi");
});
var fun5=(a)=>(console.log(a));
var fun6 =()=>(console.log("fun6"));
fun5(fun6);

var fun7=(a)=>(console.log(a));
fun7(()=>(console.log("fun6")));

