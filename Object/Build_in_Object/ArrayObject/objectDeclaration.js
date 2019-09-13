//Description:Object Declaration of Array Object
//1>Accessing an array of an Array Object
var arr=new Array();
console.log("===================");
//2>1st way of Declaring an array of an Array object
var arr1=new Array(1,2,6,4,5);
console.log(arr1[2]);//6, will give the value od 2nd Index
console.log(arr1.length);//5
console.log("===================");
//3>2st way of Declaring an array of an Array object
var arr2=new Array(1,2,6,4);
console.log(arr2[1]);//2
//4>To know the length of Array
console.log(arr2.length);//4
console.log(arr2);//[1,2,6,4]
console.log("===================");
//5>declaring by normal bracket: we can;t treat it as an array
var arr3=(1,2,6,9);
console.log(arr3); //9, it will treat as normal variable so,gives the last value ,and not treated as array
console.log("=======================================")
//6>3rd way of Declaring an array of an Array object
var arr4=[1,2,6,4];
console.log(arr4);//[1,2,6,4]
console.log(typeof (arr4)); //object
console.log(arr4[5]);//undefined, because at 5th index there is no value.








