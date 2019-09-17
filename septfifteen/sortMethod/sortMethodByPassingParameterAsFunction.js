//Declaration:passing parameter as a function in sort() to do sorting without unicode
//1>using sort() with 2-digit number and passing parameter as function according to our requirement
var arr=[1,23,4,2];
console.log(arr); //[1,23,4,2]
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort(mySort));//[1,2,4,23]
console.log(arr);//[1,2,4,23]

console.log("===================");
//2>using sort() with 2-digit number in descending order
var arr1=[1,23,4,2];
console.log(arr1);//[1,23,4,2]
function mySort(a,b) {
    return b-a;
}
console.log(arr1.sort(mySort));//[23,4,2,1]
console.log(arr1);//[23,4,2,1]

console.log("===================");
//3>optimization of above code
var arr2=[1,23,4,2];
console.log(arr2);//[1,23,4,2]
console.log(arr2.sort(function (a,b) {
    return b-a
}));//[23,4,2,1]
console.log(arr2);//23,4,2,1]
/* Advantage of anonymous Array:
:- just another way of doing sort() in descending order, code optimization as instead of creating
function seperately passing in parameter itself and bcoz compiler is calling so, we dont have to give the name
 */
console.log("===================");
//4>optimization by using Array with arrow function
console.log([1,23,4,2].sort((a,b)=>(b-a))); //[23,4,2,1]