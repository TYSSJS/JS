//1.all method - when both are success
/*function f1()
{
    return new Promise(function (res,rej)
    {
        res('s -1');
    })
}
function f2()
{
    return new Promise(function (res,rej)
    {
        res('s -2');
    })
}
Promise.all([f1(),f2()]).then(function(a)
{
    console.log(a);
},function(b)
{
    console.log(b);
});*/
//2.all() - when both are failure
/*function f1()
{
    return new Promise(function (res,rej)
    {
        rej('F -1');
    })
}
function f2()
{
    return new Promise(function (res,rej)
    {
        rej('F -2');
    })
}
Promise.all([f1(),f2()]).then(function(a)
{
    console.log(a);
},function(b)
{
    console.log(b);
});*/
//3.all()-when first is failure 2nd success
/*function f1()
{
    return new Promise(function (res,rej)
    {
        rej('F-1');
    })
}
function f2()
{
    return new Promise(function (res,rej)
    {
        res('s -2');
    })
}
Promise.all([f1(),f2()]).then(function(a)
{
    console.log(a);
},function(b)
{
    console.log(b);
});*/
//4.all()-when first is success and second is failure
function f1()
{
    return new Promise(function (res,rej)
    {
        res('s -1');
    })
}
function f2()
{
    return new Promise(function (res,rej)
    {
        rej('F -2');
    })
}
Promise.all([f1(),f2()]).then(function(a)
{
    console.log(a);
},function(b)
{
    console.log(b);
});