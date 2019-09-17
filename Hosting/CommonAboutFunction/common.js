// function fun() {
//     console.log("Hi");
//     function fun1() {
//         console.log("Hello");  // Hi
//     }
// }
// fun()


// function fun() {
//     console.log("Hi");
//     function fun1() {
//         console.log("Hello");       //TypeError: fun(...) is not a function
//     }
// }
// fun()();


// function fun() {
//     console.log("Hi");
//     function fun1() {
//         console.log("Hello");       //ReferenceError: fun1 is not defined
//     }
// }
// fun1();


// function fun() {
//     console.log("Hi");
//     function fun1() {                   //Hi ,ReferenceError: fun1 is not defined
//         console.log("Hello");
//     }
// }
// fun();
// fun1();


// function fun() {
//     console.log("Hi");
//     function fun1() {                   //Hi ,ReferenceError: fun1 is not defined
//         console.log("Hello");
//     }
// }
// fun()
// fun1();

// function fun() {
//     console.log("Hi");
//     function fun1() {                   //Hi ,Hello
//         console.log("Hello");
//     }
//     fun1();
// }
// fun()


//Output is empty becz we are not calling the fun() if we call that we will get the error
// function fun() {
//     console.log("Hi");
//     (function fun1() {                   //Empty
//         console.log("Hello");
//     })();
//     fun1();
// }


//we get error becz it is a IIFE we cant call the function in out side of IIFE function
// function fun() {
//     console.log("Hi");
//     (function fun1() {                   //Hi,Hello,ReferenceError: fun1 is not defined
//         console.log("Hello");
//     })();
//     fun1();
// }
// fun();


// function fun1() {
//     function fun2() {
//         console.log("Hi");      //Hi,undefined
//     }
//     return fun2();
// }
// console.log(fun1());


// function fun1() {
//     function fun2() {
//         console.log("Hi");      //[Function: fun2]
//     }
//     return fun2;
// }
// console.log(fun1());


// function fun1() {
//     function fun2() {
//         console.log("Hi");      //Hi,undefined
//     }
//     return fun2;
// }
// var z=fun1();
// console.log(z());


// function fun1() {
//     function fun2() {
//         console.log("Hi");      //Hi
//     }
//     return fun2;
// }
// fun1()();


// function fun1() {
//     (function fun2() {
//         console.log("Hi");          //Hi,Hi,[Function:fun1]
//         return fun2;
//     })();
//     return fun1;
// }
// console.log(fun1()());


// function fun1() {
//     var z=(function fun2() {
//         console.log("Hi");          //Hi,Hi,[Function:fun2]
//         return fun2;
//     })();
//     return z;
// }
// console.log(fun1()());


// function fun1() {
//     return function fun2() {
//         console.log("Hi");          //Hi,12
//         return 12
//     }
// }
// console.log(fun1()());