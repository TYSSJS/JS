//Declaration:splice() with 2-argument
var arr=[3,1,2,4,5,3,4,6,7];
//1>splice(2,5) ->2-parameter
arr.splice(2,5);
console.log(arr);//[3,1,6,7] , will delete from the index at 1st para till the 2nd para]
console.log("===================================")
//2>to check what it will return
var arr1=[3,1,2,4,7,8,9,5]
console.log(arr1.splice(2,5));//[2,4,7,8,9],returning the deleted items
console.log(arr1);//[3,1,5], print after deleting

console.log("===================================")
//3>pass string the 2nd parameter
console.log(arr.splice(1,"abcd")); //[], it will not delete anything
console.log(arr);//[3,1,6,7]