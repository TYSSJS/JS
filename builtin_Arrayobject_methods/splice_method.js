//splice() is 3 overloaded methods
//1.splice with one argument-splice(number index)

var arr = ["hi",20,'js',15,26];
console.log(arr);
console.log(arr.splice(4));
console.log(arr);

//2.splice with two arguments-splice(number index,number index)

var arr = ["good",10,'c',null,undefined,15];
console.log(arr);
console.log(arr.splice(2,3));
console.log(arr);

//3.splice with three arguments-third parameter is adding from deleted element
var arr = ["good",10,'c',null,undefined,15];
console.log(arr);
console.log(arr.splice(2,3,"hi"));
console.log(arr);


/*conclusion:-1. splice(number index) will delete all elements from that index
2.splice(number index,number index) -first parameter is from which index to be deleted
second parameter is number of elements to be deleted
3.splice with three arguments-third parameter is adding from deleted element
* 4.It affects the resultant array
* 5.It returns the deleted array*/