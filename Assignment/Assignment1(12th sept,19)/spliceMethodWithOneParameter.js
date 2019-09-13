//Declaration: using splice() with 1-parameter
var arr=[1,2,4,5];
//1>checking with boolean parameter
arr.splice(true);
console.log(arr);// [1], true is considered as 1st index so delete all elements from1st index
console.log("================")
//2>to check the returning with boolean parameter
console.log(arr.splice(false));//returning the deleted element
console.log(arr);//[],false is considered as 0 so delete all values  from 0th index
console.log("================")
//3>to check with negative number
var arr1=[1,2,4,5];
console.log(arr1.splice(-2));// [4,5],returning the deleted element
console.log(arr1);// [1,2], will delete from that index

console.log("================")
//4>to check the undefined
console.log(arr1.splice(undefined)); // [1,2],returning deleted elements
console.log(arr1); // [], if pass undefined ,will delete everything


