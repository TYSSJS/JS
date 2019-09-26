//No-1

/*var x=new Promise(function () {
    console.log("hi")
});
console.log(x);*/

//No-2

/*var x=new Promise(function (resolve,reject) {
    resolve('s')
});
console.log(x);*/

//No-3

/*var x=new Promise(function (resolve,reject) {
    reject('f')
});
console.log(x);*/

//No-4

/*var x=new Promise(function (resolve,reject) {
    resolve('sucess');
});
x.then(function (y) {
    console.log(y);
});*/
//No-5

/*var x=new Promise(function (resolve,reject) {
    resolve('SUCESS');
});
    x.catch(function (y) {
        console.log(y)
    });*/

//No-6

/*var x=new Promise(function (resolve,reject) {
    reject('failer');
});
x.catch(function (y) {
    console.log(y)
});
*/

//No-7

var x=new Promise(function (resolve,reject) {
    //resolve('sucess');
    reject('f')
});

x.then(function (z) {
console.log(z)
    x.catch(function (y) {
        console.log(y);
    })
})

