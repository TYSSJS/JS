//1.returning innerfunction expression to outside
function fun1()
{
    function fun2()
    {
        console.log("hi");
    }
    return fun2;
}
console.log(fun1());

//2.returning innerfunction execution
function outer()
{
    function inner()
    {
        console.log("from inner");
    }
    return inner();
}
console.log(outer());

console.log("************");
//3.Executing innerfunction outside
function house()
{
    function rooms()
    {
        console.log("from rooms");
        return 12;
    }
    return rooms;
}
var z=house();
console.log(z());

//4.control transfer outside we can execute n no of times _within if we call function return only once execution will happen
function book()
{
    function pages()
    {
      console.log("from pages");
      return 12;
    }
    return pages;
}
book()();

//5.Using IIFE for inner function
/*function car()
{
    (function engine()
    {
        console.log("from engine");
        return 12;
    })();
    return engine;
}
console.log(car()());*/

//6.Executing innerfinction outside by using IIFE and storing it in variable
function body()
{
    console.log("from body");
    var z = (function heart()
    {
        console.log("from heart");
        return heart;
    })();

    return z;
}
console.log(body()());