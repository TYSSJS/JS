function fun1(){
    console.log("Bye");
    return 12;
}
function fun2(a){

    console.log("Hi");
    console.log(a());
    return 10;
}
console.log(fun2(fun1()));