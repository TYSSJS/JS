function fun1(){
    console.log("Bye");
    return 12;
}
function fun2(a){
  //  return a;
    return a();
}
console.log(fun2(fun1));