/*Promise represents value which may available now, In future or never.
* Promise is the concept to handle responses.
* When we are creating an object of promise where it expects function as a parameter.
* function will be executed internally by the compiler*/

/*
//1.Executes anonymous function automatically.
var x=new Promise(function () {
    console.log('hi'); //hi
})
 */

/*
//2. What Promise returns
var x =new Promise(function () {
    console.log('hi');//hi
})
console.log(x);//Promise { <pending> }
 */

/*When we are getting the response we need to resolve it and resolve is not only meant for successful responses
* it can be for failure and if any response get rejected.
*/

/*
//3. Now resolving the response.
var x= new Promise(function (resolve,reject) {
    resolve('Successful');//This the message that we pass for resolving the response.
})
console.log(x);//Promise { 'Successful' }
 */

/*
//4. Now checking with reject response.
var x=new Promise(function (resolve, reject) {
    reject('Failure');
})
console.log(x);//Promise { <rejected> 'Failure' }
//(node:8216) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Failure
 */


/*
//5. then() its a build-in function in promise object which is used to resolve the response.
// Majorly successful response is been resolved and then() accepts function as a parameter if
var x=new Promise(function (resolve,reject) {
    resolve('Successful');
})
x.then(function (y) {
    console.log(y)//Successful - that means it is not a Promise object value as it was showing earlier.
    // it is internally executing the anonymous function.
})
 */


/*
//6. we will check then() with reject status
var x =new Promise(function (resolve, reject) {
    reject('Failure');
})
x.then(function (y) {
    console.log(y);
})
//(node:12160) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Failure
// We are getting the same error so then() is not resolving the reject status.
 */

/*
//7. Try to handle the reject response by the catch() function. As we saw in the above that we are not
// able to resolve it by then();
var x = new Promise(function (resolve,reject) {
    reject('Failure');
})
x.catch(function (y) {
    console.log(y)
})
// Failure - as we can see that it handles it this time no exception or warning.
// as soon as we get the reject response it start to search for catch() even though then() is available.
 */

/*
//8.Try catch() if the response is successful
var x= new Promise(function (resolve,reject) {
    resolve('Successful');
})
x.catch(function (y) {
    console.log(y);
})
//empty console.- as it is not catching the successful response, so it not able to resolve it.
 */


/*
//9.Trying reject response with both then() and catch()
var x=new Promise(function (resolve, reject) {
    reject('Failure');
})
x.catch(function (y) {
    console.log(y);
}).then(function (z) {
    console.log(z);
})
//Failure
//undefined
//so as the reject response is handled by catch() so then() is resolving that again and we are getting the
//output as undefined.
 */

/*
//10.Trying to resolve reject response with both first then() and then catch()
var x=new Promise(function (resolve,reject) {
    reject('Failure');
})
x.then(function (y) {
    console.log(y)
}).catch(function (z) {
    console.log(z);
})
//Failure- Because as soon as the response is failure it starts searching for catch(), here it didn't went inside
//the then() directly went into catch() and resolved the reject response.
 */

/*JavaScript is the only language which shows asynchronous behaviour.
* race() is the function by which you can control the execution of the function.
* as it depends on the the time which we are setting for execution and it executes both the functions.
* it accepts 3 parameter 1st for response, 2nd for timeout,3rd for any comments*/

/*
//11. Using race()
function P1() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve,1000,'P1()');
        resolve('Successful-p1');
    })
}
function P2() {
    return new Promise(function (resolve,reject) {
        setTimeout(resolve,2000,'P2()');
        resolve('Successful-p2');
    })
}
Promise.race([P1(),P2]).then(function (y) {
    console.log(y);

})
Promise.race([P2(),P1()]).then(function (y) {
    console.log(y);

})
// Successful-p1
// Successful-p2
// irrespective of the order of the execution of the function it gives the same outputs as
// timeouts of the methods varies. This proves that JavaScript supports asynchronous behaviour of execution.

 */

/*
//12. Using all() which is promise function, it takes array as an formal argument and it returns only one value.
//It depends on the order of the functions which is taken array inside as an formal arguments.

function P1() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve,3000,'P1');
        resolve('Successful-P1')
    })
}
function P2() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve,5000,'P2')
        resolve('Successful-P2')
    })
}

Promise.all([P1(),P2()]).then(function (a) {
    console.log(a);
},function (b) {
    console.log(b);
})
//[ 'Successful-P1', 'Successful-P2' ]- for both successful responses.
 */

//13. Using all function but checking in the case of reject
function P1() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve,3000,'P1');
        resolve('Successful-P1')
    })
}
function P2() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve,5000,'P2')
        resolve('Successful-P2')
    })
}
function P3() {
    return new Promise(function (resolve, reject) {
        setTimeout(reject,1000,'P3')
        reject('Failure-P3')
    })
}


Promise.all([P1(),P2(),P3()]).then(function (a) {
    console.log(a);
},function (b) {
    console.log(b);
})
//Failure-P3 - it is resolving the response according to asynchronous behaviour and it is returning failure
//because array returns only one value not all the value inside of it. So if one response get failed then the
//The whole array get fails.