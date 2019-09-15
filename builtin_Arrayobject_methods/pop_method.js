//1.To check resultant array is affecting or not
var arr = [5,9,2,8,10];
console.log(arr);
arr.pop(2); //not meaningfull
console.log(arr);

//2.To check what pop() returns
var arr =[18,"park",null,undefined];
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(typeof arr);

/*conclusion:1.pop()-used to delete one element at the end of the array
* 2.It affects the resultant array
* 3.It returns the last element deleted*/