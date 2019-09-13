//Declaration:using push() of Array Object
var arr=[1,3]
console.log(arr);//[1,3]
//1>using push()
arr.push(5);
console.log(arr);//[1,3,5] , push() add the value at last
console.log("================");
//2> using push() with no parameter
arr.push();
console.log(arr);//[1,3,5] , will not add anything as there is no parameter
console.log("================");
//4> to check what it is returning
console.log(arr.push(6));//4,return the length of array after adding the value
console.log(arr);//[1,3,5,6]
console.log("================");
//5> for multiple addition at last
console.log(arr.push(5,9,10));// 7 , it will return the length of array after adding the value.
console.log(arr);// [1,3,5,6,5,9,10], will add all the parameters at last sequentially.





