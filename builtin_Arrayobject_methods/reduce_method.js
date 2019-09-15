//1.reduce()-performing operation between the elements not with each operation
var arr = [1,7,2,0,14];
function myReduce(a,b)
{
    return a+b;
}
console.log(arr.reduce(myReduce)); //convert into single value
console.log(arr);