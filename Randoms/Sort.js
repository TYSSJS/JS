var arr=[1,23,2,4];

console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort(mySort));
console.log(arr);