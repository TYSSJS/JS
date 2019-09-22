//1.It is not going to check for the order it is going to check for the delay time
function p1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(reject,10000,"p1");
    })
}
function p2()
{
    return new Promise(function (resolve,reject)
    {
        setTimeout(resolve,20000,"p2");
    })
}
Promise.race([p2(),p1()]).then(function (a)
{
    console.log(a);
},function (a)
{
    console.log(a);
});

/*It check for the order when delay time is same and veryless diff in delay */