//Declaration:splice() with 3-para
var arr=[1,2,3,4,5,6,7,8,9];
//1>using splice(2,5,6) ->3 para
arr.splice(2,5,6);
console.log(arr);//[1,2,6,8,9] delete from first para index to 2nd para index and add the 3rd para at 1st para index

console.log("=====================")
//2>only addition with splice()
var arr1=[1,4,3,4,5,6,7,8,9];
console.log(arr1.splice(2,0,4));//[], nothing will e deleted
console.log(arr1); //[1,4,4,3,4,5,6,7,8,9] , will add after 1sr para index as 2nd para is 0.

