//1.To check resultant array is affecting
var arr = [2,89,"hi"];
console.log(arr);
arr.shift(4); //not meaningfull
console.log(arr);

//2.To check what shift() method returns
var arr = [4,"hi",false];
console.log(arr);
console.log(arr.shift());
console.log(arr);

/*conclusion:1.shift()-used to delete one element at the begining of the array
* 2.It affects the resultant array
* 3.It returns the first element deleted*/