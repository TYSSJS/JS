/*
for(var i=0;i<=2;i++) {
    console.log(i);
}
console.log(i);

0
1
2
3
*/
/*
for(var x=1;x<=2;x++)
{
    var z=13;
    console.log(x)

}
console.log(z);

1
2
13

*/

/*
for(var x=1;x<=2;x++)
{
    console.log(x)

}
console.log(z);
1
2
C:\Users\saritha\Desktop\Webstorm\Forloop.js:33
console.log(z);
^

ReferenceError: z is not defined

*/
/*

Let used oly within the scope but not outside the scope
for(let x=1;x<=2;x++)
{
    console.log(x)

}
console.log(x);


1
2
C:\Users\saritha\Desktop\Webstorm\Forloop.js:49
console.log(x);
^

ReferenceError: x is not defined


 */

/*
for(let x=1;x<=2;x++)
/*
   let z=3;
    console.log(x)

}
//console.log(x);
console.log(z);
1
2
C:\Users\saritha\Desktop\Webstorm\Forloop.js:49
console.log(x);
^

ReferenceError: x is not defined


 */
/*
for(var x=1;x<=2;x++)
{
   let z=3;
    console.log(x)

}

"C:\Program Files\nodejs\node.exe" C:\Users\saritha\Desktop\Webstorm\Forloop.js
1
2
*/
/*
var x=12;
var y="12"
console.log(x==y)
true....... Checks for the content

*/
/*
Checks for the content and type ===
var x=12;
var y="12"
console.log(x===y)

false

*/

/*
var x=13;
var y=12;
if(x==y)
{
    console.log("Hi")
 }

Blank output
*/
/*
if(true)
{
    console.log("Hi")

}
Hi

*/
/*
if(false)
{
    console.log("Hi")

}
blank output

*/
/*
var x=13;
var y=12;
if(x=16)
{
    console.log("Hi")
}
console.log(x);
*/
/*
if(12)
{
    console.log("Hi")
}

compiler checks for 12 number exists so Hi displyed
*/
/*
if("nbs")
{
    console.log("Hi")
}

its a string o/p Hi

*/

/*
var x=12;
console.log(typeof(x));
number

*
 */
/*
var x;
console.log(x);

decalrd but not initialised--- undefined

*/
/*
var x=null;
console.log(typeof x);

object
*/

/*
function fun1()
{
    console.log("Bye");
    return 12;
}
function fun2(a)
{
    a();
}
console.log(fun2(fun1));

Ans: Bye
undefined
*/
function fun1()
{
    console.log("Bye");
    return 12;
}
function fun2(a)
{
  return a;
}
console.log(fun2(fun1));