//Declaration:To use Shift() of Array Object
var arr=[1,2,5,10]
console.log(arr);//[1,2,5,10]
//1>using shift()
arr.shift();
console.log(arr);//[2,5,10], delete the first method
console.log("================")
//2>using shift() with parameter
arr.shift(2);
console.log(arr);//[5,10] , always delete the first element if parameter is there or not
console.log("================")
//3>to check what it is returning
console.log(arr.shift());//5, return the value is deleted
console.log(arr);//[10], after deleting the first element will give the remaining values from array