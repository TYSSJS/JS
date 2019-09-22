//1.Two object returning promise object - with success
/*function p1()
{
    return new Promise(function (resolve,reject)
    {
        resolve("Success-1");
    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        resolve("Success-2");
    });
}
p1().then(function (a)
{
    console.log(a);
    return p2();
},function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
},function (b)
{
    console.log(b);
})*/
//2.Two object returning promise object - with failure
/*function p1()
{
    return new Promise(function (resolve,reject)
    {
        reject("failure-1");
    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        reject("failure-2");
    });
}
p1().then(function (a)
{
    console.log(a);
    return p2();
},function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
},function (b)
{
    console.log(b);
})*/
//3.First object with failure second with success
/*function p1()
{
    return new Promise(function (resolve,reject)
    {
        reject("failure-1");
    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        resolve("Success-2");
    });
}
p1().then(function (a)
{
    console.log(a);
    return p2();
},function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
},function (b)
{
    console.log(b);
})*/
//4.first with success second with failure
function p1()
{
    return new Promise(function (resolve,reject)
    {
        resolve("Success-1");
    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        reject("failure-2");
    });
}
p1().then(function (a)
{
    console.log(a);
    return p2();
},function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
},function (b)
{
    console.log(b);
})

/*First argument for success and second argument for failure*/

