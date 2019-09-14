// function fun()
// {
//     console.log("Hi");
// }
// fun();

// function fun()
// {
//     console.log("Hi");
//     return 12; // it returns 12 but we are not using it that's why ouput:Hi
// }
// fun();

// function fun()
// {
//     console.log("Hi");
// }
// console.log(fun());// undefined as the fun() is not returning anything. o/p= Hi undefined.

// function fun()
// {
//  console.log("Hi");
//  return 12;
// }
// console.log(fun());// o/p Hi 12 as we are it is returning 12 and we are using it in this line.

// function fun()
// {
//     console.log("Hi");//prints Hi
//     return abc; // abc is not defined -error
// }
// console.log(fun());

// function fun(a,b)
// {
//   console.log("Hi");//prints Hi
// }
// console.log(fun(10,'hello')); // undefined as it is not returning anything

// function fun(a,b)
// {
//     console.log("Hi");//prints Hi
//     return 12;
// }
// console.log(fun(10,'hello'));// 12- as it returns 12

// function fun()
// {
//  console.log("Hi");
// }
// console.log(fun);// [Function: fun] - it gives the fun expression of fun()

// function fun1()
// {
//     console.log("Bye");
// }
// function fun2()
// {
//     console.log("Hi")
// }
// fun2(fun1);// Hi

// function fun1()
// {
//     console.log("Bye");
// }
// function fun2()
// {
//     console.log("Hi")
// }
// console.log(fun2(fun1));// Hi //undefined- because fun2() is not returning anything.

// function fun1()
// {
//     console.log("Bye");
// }
// function fun2()
// {
//     console.log("Hi")
//     return 12;
// }
// console.log(fun2(fun1));// Hi 12

// function fun1()
// {
//     console.log("Bye");
// }
// function fun2()
// {
//     console.log("Hi"); // Hi
// }
// console.log(fun2(fun1));// undefined

// function fun1()
// {
//     console.log("Bye");
// }
// function fun2(a)
// {
//     console.log("Hi") // Hi
// }
// console.log(fun2(fun1));// undefined

// function fun1()
// {
//     console.log("Bye"); //Bye
// }
// function fun2(a)
// {
//     console.log(a()); // undefined
// }
// console.log(fun2(fun1));// undefined

function fun1()
{
  console.log("Bye"); //Bye
}
function fun2(a)
{
  console.log(a()); // TypeError- a is not a function
}
console.log(fun2(fun1()));