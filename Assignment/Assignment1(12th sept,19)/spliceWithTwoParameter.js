//Declaration: splice with 2- para
var arr=[3,1,2,5,6,7,8,9];
//1>using splice(2, ) with 2-para and second empty value
console.log(arr.splice(2, ));//[2,5,6,7,8,9],as 2nd para is nothing it will delete all elements from 1st para index
console.log(arr);//[3,1],remaining elements
console.log("====================");
//2> using boolean para
var arr1=[3,1,2,5,6,7,8,9];
console.log(arr1.splice(2,true));//[2],true considered as 1
console.log(arr1.splice(1,false));//[].false considered as 0
console.log(arr1);//[3,1,5,6,7,8,9]
console.log("====================");
//3> pass 2nd para as String
console.log(arr1.splice(3,"abcd"));//[], not delete anything
console.log(arr1);// [3,1,5,6,7,8,9]
console.log("====================");
//4> pass both as String
console.log(arr1.splice("abc","cde"));//[],not delete anything
console.log(arr1);//[3,1,5,6,7,8,9]
