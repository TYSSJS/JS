/*1. inner function with inner scope,outer scope and global scope

var c=14
function fun1()
{
    var b=13
  function fun2()
  {
      var a=12;
      console.log(a);
      console.log(b)
      console.log(c)
  }
    fun2()

}fun1();


12
13
14
*/

/*2. Access inner function
var a=14
function fun1()
{
    var a=13
    function fun2()
    {
       // var a=12;
        console.log(a);
       // console.log(b)
      //  console.log(c)
    }
    fun2()

}fun1();

13
*/

