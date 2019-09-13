//Declaration: using sort() with 2 digit no and passing parameter as function
var arr=[1,23,4,2];
console.log(arr);
function mySort(a,b )
{
    return a-b;
}
console.log(arr.sort(mySort()));
console.log(arr);

