//Declaration: using reduce()
//1>using reduce() with 0-para
/*var arr=[1,2,3,5]
function myReduce()
{
    return a+b;//Error:a+b is not defined
}
arr.reduce(myReduce);
console.log(arr);
reduce() is not possible
*/
 console.log("=================");
//2>using reduce() with 2-para
var arr1=[1,2,3,5];
function myReduce(a,b)
{
    return a+b;
}
console.log(arr1.reduce(myReduce));//11,returning single value & value can be anything string,
// no depending on what fn we r performing (here,total summation)
console.log(arr1);//[1,2,3,5], resultant array will not affect