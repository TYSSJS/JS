/*1.store in function instead of variable function returns promise object
* 2.If two objects then we have to use - 2 then & 2 catch
* 3. 2 return statement is required to achieve promise chaining*/

//1.two object which returns promise object - with success
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
}).catch(function (b)
{
    console.log(b);
    return p2();
}).then(function (a)
{
    console.log(a);
}).catch(function (b)
{
    console.log(b);
});
*/
//2.two object which return promise object with failure

/*function p1()
{
    return new Promise(function (resolve,reject)
    {
        reject("Failure-1");
    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        reject ("Failure-2");
    });
}

p1().then(function (a)
{
    console.log(a);
    return p2();
}).catch(function (b)
{
    console.log(b);
    return p2();
}).then(function (a)
{
    console.log(a);
}).catch(function (b)
{
    console.log(b);
});*/

//3.Two object one with success and other with failure - 2 times printing failure message
function p1()
{
    return new Promise(function (resolve,reject)
    {
        resolve("success");
    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        reject ("Failure");
    });
}

p1().then(function (a)
{
    console.log(a);
    return p2();
}).catch(function (b)
{
    console.log(b);
    return p2();
}).then(function (a)
{
    console.log(a);
}).catch(function (b)
{
    console.log(b);
});

//4.Two object one with failure and other with success

/*function p1()
{
    return new Promise(function (resolve,reject)
    {
        reject("Failure");

    });
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        resolve("success");
    });
}

p1().then(function (a)
{
    console.log(a);
    return p2();
}).catch(function (b)
{
    console.log(b);
    return p2();
}).then(function (a)
{
    console.log(a);
}).catch(function (b)
{
    console.log(b);
});
*/
