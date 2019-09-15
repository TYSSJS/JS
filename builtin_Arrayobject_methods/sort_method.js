//1.sort() affects resultant array & returns sorted array
var arr=[5,8,1,4];
console.log(arr);
console.log(arr.sort());
console.log(arr);

//2.It is partially incompleted becos it is sorted based on first number
var arr=[1,23,25,45,3,22];
console.log(arr);
console.log(arr.sort());
console.log(arr);

//3.Internally it is calling function when we pass function as argument in sort()

var arr=[1,23,25,45,3,22];
console.log(arr);
function mySort(a,b)
{
    return a-b;   //to sort in ascending order
}
console.log(arr.sort(mySort));
console.log(arr);

var arr=[1,23,25,45,3,22];
console.log(arr);
function mySort(a,b)
{
    return b-a;   //to sort in descending order
}
console.log(arr.sort(mySort));
console.log(arr);


