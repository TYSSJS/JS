//7.Passing arguments with different type -splice(a) in Array object

var arr = [1,2,3,4,5];

// console.log(arr.splice());
// console.log(arr);

// console.log(arr.splice(8));
// console.log(arr);

console.log(arr.splice(-8));
console.log(arr);

// console.log(arr.splice("asd"));
// console.log(arr);

// console.log(arr.splice(3));
// console.log(arr);

// console.log(arr.splice(true)); //it is considering true as 1
// console.log(arr); //so deleting from 1 index

// console.log(arr.splice(false)); //it is considering false as 0
// console.log(arr); //so deleting from 0 index
