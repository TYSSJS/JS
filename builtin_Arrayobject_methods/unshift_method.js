//1.To check resultant array is affecting /not
var arr=[3,9,1,0,9];
console.log(arr);
arr.unshift(7);
console.log(arr);

//2.To check multiple elements can be added at the beginning of array
var arr=[7,1,"js",null];
console.log(arr);
arr.unshift(10,90,undefined);
console.log(arr);

//3.To check what unshift() returns
var arr=[7,1,"js",null];
console.log(arr);
console.log(arr.unshift(10,90,undefined));
console.log(arr);

/*conclusion:-1.Multiple elements can be added at the beginning of an array
* 2.unshift() affects the resultant array
* 3.unshift() returns the size of array after adding elements*/