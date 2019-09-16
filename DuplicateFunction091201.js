
function fun(a){
    console.log("Fun - 2");
    console.log(arguments[0]);
}
fun();
function fun(){
    console.log("Fun - 1");
    console.log(arguments[0]);
}
fun(12);
fun(12,13,14);
fun();
fun(fun());



