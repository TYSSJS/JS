// var num="1";
// console.log(Number.isInteger(num));
// //console.log(Number.isInteger(num_str));
// //console.log(Number.isInteger(str));


//in js, we can use () for array
// var arr = new Array(1,2,6,4);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(arr);

//even though array name is not there, if you use, [], then its array, at this point u cant use()
//var arr = [1,2,6,4];
//console.log(arr[4]); //array index declared but not having any value, so undefined

// var arr = [1,2,6,4];
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr.length);

// var arr = [1,2,6,4];
// arr[6]=123; //we have to write this separately even though there is a wastage of time, because when added it will go in the next position only at 4, so while sending its at 6 and when accessing its at 4, then it will be wrong
// console.log(arr.length);
// console.log(arr);


// var arr=[1,2,"hkhk",6,4]; //array can store heterogeneous array
// console.log(arr);

// var arr = [1,2,4,5,12];
// console.log(arr);
// arr.pop(4);
// console.log(arr);

// var arr = [1,2,4,5,12];
// console.log(arr);
// console.log(arr.pop(4));
// console.log(arr);

// var arr=[1,2];
// console.log(arr);
// arr.push(3);
// console.log(arr);

// var arr=[1,2];
// console.log(arr);
// console.log(arr.push(4));
// console.log(arr);

// var arr=[1,2];
// console.log(arr);
// console.log(arr.push(5,6,7));
// console.log(arr);

// var arr=[1,2];
// console.log(arr.shift(3)); // shift() is similar to pop(), only diff is pop() at the last ans shift() at the first
// console.log(arr);

// var arr=[1,2];
// console.log(arr.unshift(3)); // unshift() is similar to push(), only diff is push() at the last ans shift() at the first
// console.log(arr);

// var arr=[1,2,4,5];
// console.log(arr.splice(7)); // splice method with one parameter is for deletion
// console.log(arr);

// var arr=[1,2,4,5];
// console.log(arr.splice("hggj"));
// console.log(arr);

// var arr = [3,1,2,4,5,3,4,6,7];
// arr.splice(2,5); // from 2nd to 5 elements it will delete
// console.log(arr);

// var arr = [3,1,2,4,5,3,4,6,7];
// console.log(arr.splice(2,5));
// console.log(arr);

// var arr = [3,1,2,4,5,3,4,6,7];
// console.log(arr.splice(2,"jhgjhg"));
// console.log(arr);

//splice with 3 parameters
// var arr = [,1,2,3,4,5,6,7,8,9];
// console.log(arr.splice(2,5,6)); // output is [1,2,6,8,9], 5 is the number of elements to be deleted, splice with 3 parameters
// console.log(arr);

//splice with 3 parameters
var arr = [,1,4,3,4,5,6,7,8,9];
arr.splice(2,0,4);
console.log(arr);












