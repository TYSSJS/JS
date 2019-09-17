//In function hosting function will store in a memory will all line of code in the function
// console.log(fun())
// function fun()
// {                           //Hi
//     console.log("Hi")       //undefined
// }

// function fun()
// {
//     console.log("hi");
// }
// fun();
// function fun()
// {                               //hello
//     console.log("hello");
// }

//console.log(x());               //TypeError: x is not a function
// var x=function ()
// {
//     console.log("hi")
// }
// console.log(x())               //hi , undefined
//=============================================================================================================
//combination of variable hosting and function hosting
// var x=12;
// function x()
// {
//     console.log("hi")            //TypeError: x is not a function
// }
// console.log(x())

/*
* var x memory is declared
* function also have a same name so function is stored in a same memory
* Then x=12 is assigined so that function is replaced by 12
* so we trying to print the x()
* so it is not a function now so it gives the error as x is not a function
* */
//==============================================================================================================

// var x=12;
// console.log(x());
// function x()                     //TypeError: x is not a function
// {
//     console.log("hi");
// }
/*
* var x memory is declared
* function also have a same name so function is stored in a same memory
* Then x=12 is assigined so that function is replaced by 12
* so we trying to print the x()
* so it is not a function now so it gives the error as x is not a function
* */
//==============================================================================================================
// var x;
// console.log(x())                    //hi , undefined
// function x()
// {
//     console.log("hi")
// }
/*
* var x memory is declared
* function also have a same name so function is stored in a same memory
* so we trying to print the x()
* so it is a function now so it give a proper output
* */
//===============================================================================================================

