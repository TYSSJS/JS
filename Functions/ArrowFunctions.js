/*syntax: (parameter)=>(expression)*/

// function fun()
// {
//  console.log("Hey")
// }
// function fun1()
// {
//  console.log("Hello")
// }
// fun1(fun); // Hello


// function fun1()
// {
//     console.log("Hello")
// }
// fun1(function fun()
// {
//     console.log("Hey")
// }); // Hello

// var fun=()=>(console.log("Hey"));
// var fun1=()=>(console.log("Hello"));
// fun(fun1);//Hey

// var fun=(a)=>(console.log("Hey"));
//     fun1=()=>(console.log("Hello"));
// fun(fun1);//Hey

// var fun=(a)=>(console.log("Hey"));
// fun1=()=>(console.log("Hello"));
// fun(fun1());// Hello Hey

// var fun=(a)=>(console.log(a));
// fun1=()=>(console.log("Hello"));
// fun(fun1);//[Function :fun1]

// var fun=(a)=>(console.log(a));
// fun(()=>(console.log("Hello"))); //[Function]

// var fun=()=>(12);
// console.log(fun());// its returns 12

// var fun=()=>(return 12);
// console.log(fun());// unexpected token return

// var fun= ()=>{console.log("hello");return 12}
// console.log(fun()); // hello 12

// var fun=()=>{console.log("hello");return 12; console.log("hi");return 13};
// console.log(fun()); //hello hi 12

// var fun=()=>(console.log("Hello"),12,console.log("Hi"),13);
// console.log(fun());// Hello Hi 13
