//1.resolve and using then (then is optional if it is success)
var x = new Promise(function (resolve,reject)
{
    resolve("Success");
});
x.then(function (a)
{
    console.log(a);
});
console.log("**********");
//2.Resolve and using catch (output is empty beocs,no syntax error)
var y = new Promise(function (resolve,reject)
{
    resolve("success-1");
});
y.catch(function (a)
{
    console.log(a);
});
//3.Reject with suitable catch (if it is failure it search for catch)
var z = new Promise(function (resolve,reject)
{
    reject("failure");
});
z.catch(function (b)
{
    console.log(b);
});

//4.Reject with then (Reject search for catch so we get error)
var z = new Promise(function (resolve,reject)
{
    reject("failure");
});
z.then(function (a)
{
    console.log(a);
});
