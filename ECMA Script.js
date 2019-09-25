// Syntax of Class:
//
// class ECMA Script
// // {
// //     let a=12;
// // }
// //
// // Example:
//
// // class A
// // {
// //     fun();
// // }
//
//
// //Static Method:
//
// class A{
//
//     fun()
//     {
//         var x=12;
//         console.log("hi")
//     }
// }
// console.log(new A().fun());
//
// //non-static method
//
// class A{
//
//     static fun()
//     {
//         var x=12;
//         console.log("hi")
//     }
// }
// console.log(A.fun());



//Note : we cannot keep anything inside class and outside method

// class A{
//
//     constructor()
//     {
//         console.log('constructor');
//     }
//     fun()
//     {
//     var A=12;
//     console.log("hi");
//     }
//     }
//     new A();


// class A{
//
//     constructor()
//     {
//         console.log('constructor');
//     }
//     fun()
//     {
//         var A=12;
//         console.log("hi");
//     }
// }
// new A();



// class B{
//
//     constructor()
//     {
//
//         console.log('constructor')
//     }
//     fun1()
//     {
//         var x=12;
//         console.log('hi');
//     }
// }
//
// class A extends B{
//     constructor()
//     {
//         //super();
//         console.log('constructor')
//     }
//     fun()
//     {
//         var x=12;
//         console.log('hi')
//     }
// }
// new A();

//compiler wont provide super() statement whenever user is defining user define constructor






//
//
// class B{
//
//     fun1()
//     {
//         var x=12;
//         console.log('hi');
//     }
// }
//
// class A extends B{
//     constructor()
//     {
//         super();
//         console.log('constructor')
//     }
//
// // }
// // new A();
//
//
//
// class A{
//     fun()
//     {
//         console.log('hi')
//     }
//     fun(a)
//     {
//         console.log('hello)')
//     }
// }
// new A().fun(12);
//
//
// //class is not extending object class by default
// //method overloading is possible
//
//
// //constructor overloading is not possible
// class A{
//     constructor()
//     {
//         console.log('hi')
//     }
//     constructor()
//     {
// //         console.log('hi')
// //     }
// // }
// //
// //
//
//
//
// //Note: super need not be first statement inside constructor in Javascript
//
//
//
// //Class: we can keep constructor, function
// //we cant do constructor overloading, always only one constructor in one class
//
//
// class B
// {
//     fun()
//     {
//         console.log('fun-1');
//     }
// }
// class A extends B{
//
// }
// new A().fun();


//How to declare interface in Javascirpt



//demo1.js
var x=12;
console.log(x);
module.exports=x;

//demo2.js
var y=require('./demo.js'); // ./ means current directory
console.log(y);

