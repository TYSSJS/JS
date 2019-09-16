function fun1(){
    console.log("Hello")
}
function fun2(a){
    console.log(a);
    a();
    console.log("Hi");
}
fun2(fun1);