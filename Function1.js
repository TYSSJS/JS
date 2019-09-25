// function fun(a,b)
// {
//     console.log('bye');
// }
// fun();  // when we write this fun() in console.log it will give undefined, because the method fun() is not returning anything
// console.log('bye');

// function fun(a,b)
// {
//     console.log('bye');
// }
// //fun();  // when we write this fun() in console.log it will give undefined, because the method fun() is not returning anything
// console.log(typeof(fun()));


// function fun(a,b)
// {
//     console.log('bye');
// }
// fun();

// function fun(a,b)
// {
//     console.log('bye');
// }
// typeof(fun());

// function()
// {
//     console.log('Bye');
// }

//Anonymous Function string in a variable because we have to call it
// var x=function ()
// {
//     console.log('bye');
// }

// var x=function ()
// {
//     console.log('bye');
// }
// console.log(x);

// var x=function ()
// {
//     console.log('bye');
// }
// console.log(x());

// var x=function (a,b)
// {
//     console.log('bye');
//     console.log(a);
// }
// console.log(x(10,23));

// var x=function fun(a,b)
// {
//     console.log('bye');
//     console.log(a);
// }
// console.log(x);

// var x=function fun(a,b)
// {
//     console.log("bye");
//     console.log(a);
// }
// fun();

// var x=function fun(a,b)
// {
//     console.log("bye");
//     console.log(fun);
// }
// x();

// var x=function fun(a,b)
// {
//     console.log("bye");
//     return fun;
// }
// x();

// var x=function fun(a,b)
// {
//     console.log("bye");
//     return fun;
// }
// console.log(x());

// (function fun()
// {
//     console.log("JS");
// })(); ///IIFE

//we can call without using function name also
// (function ()
// {
//     console.log("JS");
// })(); ///IIFE

// var x=(function ()
// {
//     console.log("JS");
// })(); ///IIFE
// console.log(typeof(x));

//IIFE is a function execution not function expression

// (function (a,b)
// {
//     console.log(a+b);
// })(1,2);

/// / (function ()
// {
//     console.log(a+b);
// })();
// fun();

// var x=(a)=>(console.log("hi"));
// x();

// function fun1()
// {
//     console.log("hello");
// }
// function fun2(a)
// {
//     console.log("hi");
// }
// fun2(fun1);

// function fun2()
// {
//     console.log("hello");
// }
// fun2(function fun1(a)
// {
//     console.log("hi");
// });
// //fun2();

// function fun2(a)
// {
//     console.log(a);
// }
// fun2(function fun1(a,b)
// {
//     console.log("hi");
// });
// //fun2();

// var fun2=(a)=>(console.log(a));
// var fun1=()=>(console.log("Hi"));
// fun2(fun1);

// var fun2=(a)=>(console.log(a));
// var fun1=()=>(console.log("Hi"));
// fun2(fun1);

// function f1()
// {
//     return 12;
// }
// function f2(a)
// {
//     console.log(a);
// }
// f2(f1);

// var f1=()=>(12);
// f1();

// var f1=()=>(return 12);
// console.log(f1());

// var f1=()=>{console.log("Hi");console.log("Hello");};
// f1();

// var f1=()=>{console.log("Hi");12};
// f1(); //only hi

//


// function fun()
// {
//     console.log("hi");
//     return 2;
//     console.log("hello");
// }
// fun() //output is only hi because control comes out when it reaches return, when u try to print, then only 2 will print
//
// function fun()
// {
//     console.log("hi");
//     return 2;
//     return 3;
// }
// console.log(fun()) //output is hi 2

var fun=()=>(console.log("hi"),console.log("hello"))
fun();

var fun=()=>(console.log("hi"),12,console.log("hello"))
console.log(fun()); // 12 is not considered return statement

var fun=()=>(console.log("hi"),12)
console.log(fun()); // whatever last staement is there, if its like numeric, that is considered as return

var fun=()=>(console.log("hi"),12,console.log("hello"),13)
console.log(fun());

var fun=()=>(console.log("hi"),12,console.log("hello"))
console.log(fun()); //o/p: hi hello undefined

var fun=()=>(console.log("hi"),abc,console.log("hello"))
console.log(fun()); //o/p: hi error