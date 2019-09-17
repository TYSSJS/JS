//Program on functions with arguments
function fun(a,b) {

    console.log(a);
    console.log("bye")
    console.log(arguments[2])
}
console.log(fun(12,13));
//console.log(fun());

function fun1(a,b){
    console.log("byee");
    for(var x=1;x<=2;x++){
        console.log(x)
    }

}
fun1();
//console.log(x)//x is accessible only inside the fun1 because it is global to fun1

