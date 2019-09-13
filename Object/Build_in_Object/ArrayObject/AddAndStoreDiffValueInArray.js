//Declaration:To add value and give different types of values in Array
//1>To add the value just after the last element
var arr=[1,2,6,4];
arr[4]=25;
console.log(arr.length);//5, after adding the value it will give the length
console.log(arr);//[1,2,6,4,25]
console.log(arr[4]);[25]
console.log("=========================");

//2>To add the value at any index
arr[9]=13;
console.log(arr.length);//10
console.log(arr);//[1,2,6,4,25, , , , ,13]
//memory wastage still  it will add the value on that index only which is provided,as it will not create confusion
console.log("=========================");

//3>To check it can hold hetrogenous
var arr1=[1,26,"abchhg",true,4.5]
console.log(arr1);//[1,26,'abchhg',true,4.5]

