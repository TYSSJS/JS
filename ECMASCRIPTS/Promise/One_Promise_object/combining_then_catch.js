//1.resolve with two then function
/*var x = new Promise(function (resolve,reject)
{
    resolve("success");
});
x.then(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});*/

//2.Resolve with then and catch
var x = new Promise(function (resolve,reject)
{
    resolve("success");
});
x.then(function (a)
{
    console.log(a);
}).catch(function (b)
{
    console.log(b);
});

//3. Resolve with catch and then
/*var x = new (function (resolve,reject)
{
    resolve("success");
});
x.catch(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});*/

//4.success with two catch
/*var x = new (function (resolve,reject)
{
    resolve("success");
});
x.catch(function (a)
{
    console.log(a);
}).catch(function (a)
{
    console.log(a);
});*/

//5.Failure with then and catch
var a = new Promise(function (resolve,reject)
{
    reject("failure");
});
a.then(function (a)
{
    console.log(a);
}).catch(function (a)
{
    console.log(a);
});

//6.failure with catch & then
/*var x = new Promise (function (a,b)
{
    b("failure");
});
x.catch(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});*/

//7.failure with catch & catch
/*var x = new Promise(function (a,b)
{
    b("failure");
});
x.catch(function (a)
{
    console.log(a);
}).catch(function (b)
{
    console.log(b);
});*/

//8.failure with then & then
/*var x = new Promise(function (a,b)
{
    b("failure");
});
x.then(function(b)
{
    console.log(b);
}).then (function (b)
{
    console.log(b);
});*/

