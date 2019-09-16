//syntax: (parameter)=>(expression)

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

