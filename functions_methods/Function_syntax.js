//1.Syntax of function
function functionname()
{

}

//2.Function call is required to execute function
function fun()
{
    console.log("Javascript"); //op - empty
}

function fun()
{
    console.log("hi");
}
fun();   //function execution so,op-hi

function fun()
{
    console.log("good"); //op-empty
}
fun;

//3.function return
function fun()
{
    console.log("Hey Hi");
}
console.log(fun()); //undefined

/*function fun()
{
    console.log("welcome");
    return thanks;
}
console.log(fun()); //Error:thanks is not defined

function fun(var a,var b)
{
  console.log("hi"); //Error:unexpected token var
}*/

/*Conclusion:
* 1.function keyword is added
* 2.no access specifier
* 3.Return type is optional beocs-var,let,const hold all type of data
* 4.If function is not returning,and if we try to print we get - undefined*/