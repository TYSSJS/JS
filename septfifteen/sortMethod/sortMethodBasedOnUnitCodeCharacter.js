//Declaration: use sort() on unit code character
//1> using sort() for numbers
var arr=[1,3,4,2];
console.log(arr);
arr.sort();
console.log(arr);//[1,2,3,4]
console.log(arr.sort()); // returning the sorted array
/*
arr.sort(1); // Error: The comparision function must be either function or undefined
so, for sort() method we can't pass parameter
 */
console.log("============================");
//2>Checking with decimal number
var arr1=[3.5,7.8,2,6.9,1.2]
console.log(arr1);
console.log(arr1.sort());
console.log(arr1);
console.log("============================");
//3>Checking with negative number
var arr2=[-89, -55, 23, 10,-5]
console.log(arr2.sort());
console.log(arr2);
console.log("============================");
//4>Checking with duplicate number
var arr3=[9,8,9,5,6,4]
console.log(arr3.sort());
console.log(arr3);
console.log("============================");
//5>Checking with 2-digit and 3-digit number
var arr4=[1, 23,25,45,255,3,32,455];
console.log(arr4);//[1,23,25,45,255,3,32,455]
console.log(arr4.sort());//[1,23,25,255,3,32,455]
console.log(arr4);//[1,23,25,255,3,32,455]
// we will get this sorted array because of unit code character, it is based on string internally


