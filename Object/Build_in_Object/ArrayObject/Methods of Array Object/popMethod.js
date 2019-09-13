//Declaration:using the pop() of Array Object

var arr=[1,2,4,5,12];
console.log(arr);//[1,2,4,5,12]
//1>using the pop()
arr.pop(4);
console.log(arr);//[1,2,4,5] , it will  always delete the last value of array either parameter is there or not
console.log("==========================");
// 2>to check what it is returning
console.log(arr.pop()); // 5 , will return the last element which is deleted

console.log("==========================");
// 3>to check with different types of data
var arr1=[1,2,true,5,"abcab"];
console.log(arr1);//[1,2,true,5,'abcab']
console.log(arr1.pop());// abcab, return the deleted element
console.log(arr1);// [1,2,true,5], delete the last element


