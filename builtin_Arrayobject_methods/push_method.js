//1.To check resultant array is affecting /not
var arr=[3,9,1,0,9];
console.log(arr);
arr.push(7);
console.log(arr);

//2.To check multiple elements can be pushed
var arr=[7,1,"js",null];
console.log(arr);
arr.push(10,90,undefined);
console.log(arr);

//3.To check what push() returns
var arr=[7,1,"js",null];
console.log(arr);
console.log(arr.push(10,90,undefined));
console.log(arr);
console.log(typeof arr);

/*conclusion:-1.Multiple elements can be added at the end of an array
* 2.push() affects the resultant array
* 3.push() returns the size of array after adding elements*/