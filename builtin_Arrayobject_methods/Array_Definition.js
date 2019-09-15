//1. Changing/re-assigning the value in array
var arr=[6,2,9,1];
arr[1]=10;
console.log(arr);

//2.To check it is growable or not->it is growable
var arr=[3,8,1,7];
arr[4]=15;
console.log(arr);

//3.To check we can add anyware in an array.but,there is wastage of memory
var arr=[10,2,8,4,9];
arr[7]=15;
console.log(arr);

//4.To check array is capable of holding heterogeneous data
var arr=[1,"java",false,null,undefined];
console.log(arr);
console.log(typeof arr);

/*1.Array is growable and is capable of holding heterogeneous data
* 2.We can reassign the value and we can add anyware in array but there is wastage of memory
* 3.Array is object type*/