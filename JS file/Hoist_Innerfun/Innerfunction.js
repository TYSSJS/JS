/*1.
function fun()
{
    console.log("JS");
    function fun1()
    {
        console.log("Hello");

    }
   }
   fun();
JS

*/

/*2. Declare fun1() function  inside fun()

function fun()
{
  console.log("JS");
  function fun1()
  {
    console.log("HELLO");
  }
    fun1();

}
fun();

JS
HELLO

 */
/* 3. Call the IIFE but fun1 function is outside the scope... so can'tcall
function fun()
{
    console.log("JS");
    (function fun1()
    {
        console.log("HELLO");
    })();
    fun1();

}
fun();

JS
HELLO
C:\Users\saritha\Desktop\Webstorm\Innerfunction.js:41
fun1();
^

ReferenceError: fun1 is not defined

 */
/*
4.
function fun1()
{

    function fun2()
    {
        console.log("HELLO");
    }
    return fun2;

}
fun1();

"C:\Program Files\nodejs\node.exe" C:\Users\saritha\Desktop\Webstorm\Innerfunction.js

Process finished with exit code 0
*/

/*5
function fun1()
{

    function fun2()
    {
        console.log("HELLO");
    }
    return fun2;

}
console.log(fun1());

[Function: fun2]
 */

/* 6. call the function outside
function fun1()
{

    function fun2()
    {
        console.log("HELLO");
    }
    return fun2;

}
var z=fun1();
console.log(z());

HELLO
undefined

*/
/*7. Calling the function outside using var
function fun1()
{

    function fun2()
    {
        console.log("HELLO");
        return 12;
    }
    return fun2;

}
var z=fun1();
console.log(z());

HELLO
12

 */
/*8. Calling function outside using fun1()()
function fun1()
{

    function fun2()
    {
        console.log("HELLO");
      //  return 12;
    }
    return fun2;

}
fun1()();

HELLO


 */
/*9. in IIFE fun2 is outside the scope so can't access
function fun1()
{

    (function fun2()
    {
        console.log("HELLO");
        //  return 12;
    })();
    return fun2;

}
console.log(fun1()());

return fun2;
^

ReferenceError: fun2 is not defined
*/
