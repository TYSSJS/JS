//Declaration:using splice() of Array object with one parameter

var arr=[1,2,4,5,6]
//1>using splice()
arr.splice(3);
console.log(arr);//[1,2,4]// delete from that index which is provided
//2>check what it is returning
console.log(arr.splice(1));//[2,4], return the elements which all will be deleted
console.log("========================")
//3> check with another value
var arr1=[1,2,4,5]
console.log(arr1.splice(3));// [5],return the value which is deleted
console.log(arr1);//[1,2,4]
console.log("========================")
//4> checking with parameter greater than index
console.log(arr1.splice(7));//[]
console.log(arr1);//[1,2,4]

console.log("========================")
//5> check with string
console.log(arr1.splice("nghy"));//[return all the elements which all get deleted]
console.log(arr1);//[], if we will not pass meaningful data ,it will delete everything.






