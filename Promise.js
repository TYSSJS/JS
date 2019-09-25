//Promise: Promise represent a value which may be available now or in future or never.
//Promise is a object


// var x=new Promise(function() // x is a object. its holding a promise object
// {
//     console.log('hi');
// }); //we are not calling the promise object, compiler is calling, even if we dont do x(), hi is printing


// var x=new Promise(function()
// {
//     console.log('hi');
// });
// console.log(x());

// var x=new Promise(function(resolve,reject)
// {
//     resolve('s');
// });
// console.log(x);
//
// //resolve is a function/method
//
// var x=new Promise(function(resolve,reject)
// {
//     reject('F');
// });

//output: unhandledpromiserejection warning

// var x=new Promise(function(resolve,reject)
// {
//     resolve('success');
// });
//
// x.then(function (y)
// {
//     console.log(y);
// });

// then will handle success
// catch will handle failure

//do not write multiple response(write either resolve or reject)

// var x=new Promise(function(resolve,reject)
// {
//     resolve('success');
// });
//
// x.catch(function (y)
// {
//     console.log(y);
// });



// var x=new Promise(function(resolve,reject)
// {
//     resolve('success');
// });
//
// x.catch(function (z)
// {
//     console.log(z);
// }).then(function(y)
// {
//     console.log(y)
//     {
//
//     }
// })


// var x=new Promise(function(resolve,reject)
// {
//    // resolve('success');
//     reject('F');
// });
//
// x.catch(function (z)
// {
//     console.log(z);
// }).then(function(y)
// {
//     console.log(y);
//
// })



//multiple then multipke catch
//success,success is ok failure failure is error

// var x=new Promise(function(resolve,reject)
// {
//     // resolve('success');
//     reject('F');
// });
//
// p1().then(function (a)
// {
//     console.log(a);
//     return p2();
// }).catch(function(a)
// {
//     console.log(a);
//     return p2;
// }).then(function (a)
// {
//     console.log(a);
// }).catch(function(a)
// {
//     console.log(a);
// })


//below works with all combinations of success and failure
//solution only with then can be resolved and have to take then with 2 parameters


// function p1()
// {
//     return new Promise(function(resolve,reject)
//     {
//         resolve('s-p1');
//         reject('f-p1');
//     });
// }
//
// p1().then(function (a) {
//     console.log("Then"+a);
//     return p2;
// },function (a) {
//     console.log("catch"+a);
//     return p2();
// }).then(function (a) {
//     console.log("Then"+a);
// }, function(a) {
//     console.log("catch"+a);
// })





// function p1()
// {
//     return new Promise(function(resolve,reject)
//     {
//         console.log('hi');
//         // resolve('s-p1');
//         // reject('f-p1');
//     });
// }
//
// p1().then(function (a) {
//     console.log("Then"+a);
//     return p2;
// },function (a) {
//     console.log("catch" + a);
// }) //output: hi



// promise(reject,resolve)--------here first parameter is always for success, doesnt depends on rject or resolve
// whatever keyword is writte, 2nd parameter is for failure

//Promise(function (a,b) ---then error when reject or resolve is written


// var x={
//     k1: "js",
//     k2:12
// };
// console.log(x);
// delete x;
// console.log(x);


//Assignment: check delete with


//Promise handle asynchronous behaviour

// function p1()
// {
//     return new Promise (function (res,rej)
//     {
//         setTimeout(res,10000,"P1");
//     })
// }

// function p2()
// {
//     return new Promise (function (res,rej)
//     {
//         setTimeout(res,2000,"P2");
//     })
// }
//
// Promise.race([p1(),p2()]).then(function (a)
// {
//     console.log(a);
// })

function p1()
{
    return new Promise (function (res,rej)
    {
        setTimeout("P1");
    })
}

function p2()
{
    return new Promise (function (res,rej)
    {
        setTimeout("P2");
    })
}

Promise.race([p1(),p2()]).then(function (a)
{
    console.log(a);
},(function (a) {
    console.log(a);
});

    //even if we give 10sec in p1 and 2ms in p2, p2 will appear in console, but internally p1 will execute,
// thus Promise handles Asynchronous behaviour