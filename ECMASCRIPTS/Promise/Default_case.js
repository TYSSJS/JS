//1.If the status is pending it wont go to first / second response
/*function fun()
{
    return new Promise(function (resolve,reject)
    {
        console.log("hi");
    })
}
fun().then(function (a)
{
    console.log(a);
});*/

//
function fun()
{
    return new Promise(function (resolve,reject)
    {
        console.log("hi");
    })
}
fun().then(function (a)
{
    console.log(a);
    return 12;
}).then(function (b)
{
    console.log(b);
});
