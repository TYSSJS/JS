//1.two object which returns promise object - with success
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
        resolve("Success-2");
    });
}

p1().catch(function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
    return p2();
}).catch(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});

//2.two object which return promise object with failure - printing undefined

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
p1().catch(function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
    return p2();
}).catch(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});
*/

//3.Two object one with success and other with failure - printing undefined
/*function p1()
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
p1().catch(function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
    return p2();
}).catch(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});*/
//4.Two object one with failure and other with success -two times printing success

function p1()
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
p1().catch(function (a)
{
    console.log(a);
    return p2();
}).then(function (b)
{
    console.log(b);
    return p2();
}).catch(function (a)
{
    console.log(a);
}).then(function (b)
{
    console.log(b);
});

/*conclusion:
* 1.two times printing failure message
* 2.printing undefined in all the combinations
* 3.so,going for a new methodology-
* 4.then with two arguments first argument for success and second argument
* with failure
* 5.If there is failure it will check with-then with 2nd argument if its not there
* check with suitable catch block */
