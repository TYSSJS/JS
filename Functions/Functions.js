// function fun(a,b)
// {
//     console.log("Hey");
//     console.log(a);
// }
// console.log(fun(12));

// function fun1()
// {
//       console.log("Hi");
//       console.log(a); //not defined
// }
// fun1(12,13,14)

// function fun2(a,b)
// {
//     console.log("Hi");
//     console.log(arguments[1]);//13
// }
// console.log(fun2(12,13,14,15));

// function fun3(a,b)
// {
//     console.log("hi");//hi
//     console.log(fun3);// [Function: fun3]
// }
// fun3();

// function fun4()
// {
//  var z=10;
//  console.log("hey");//hey
//  console.log(z);//10
// }
// fun4();
// console.log(z);// not defined

function fun5(a,b)
{
    console.log("Hi");// Hi
    for (var x=1;x<=2;x++)// 1 2
    {
        console.log(x);
    }
}
fun5();
console.log(x); // not defined -error
