/*//1.using use strict in the begining of the code
'use strict'
var x=12;
console.log(x);*/

/*'use strict'
x=14;  //error:x is ont defined
console.log(x);*/

//2.checking without using(overriding) and with using restriction(error)

function fun(a,a)
{
    console.log(a);
}
fun(10,20);

/*'use strict'
function fun(a,a) //error:duplicates not allowed
{
    console.log(a);
}
fun(10,20);*/