//1.Here,we are not calling function -promise object is internally calling function
new Promise(function ()
{
    console.log("hi - From 1st question");
});

//2.To check promise is object
var x = new Promise(function ()
{
    console.log("Hi - From 2nd question");
});
console.log(x);
console.log(typeof x);

//3.Providing response as parameter in function - resolve(success),reject(failure)
var x= new Promise(function (resolve,reject)
{
   resolve("success");
});
console.log(x);

//4.using of then is optional for success response
var y = new Promise(function (resolve,reject)
{
    resolve("success");
});
y.then(function (z)
{
    console.log(z);
});

//5.Using of catch is compulsary, if it is failure - it immidatly check for catch
//if it is not there it throw error message
var z = new Promise(function (s,f)
{
    f("failure");
});
z.catch(function (a)
{
    console.log(a);
});

