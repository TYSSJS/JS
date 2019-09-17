//var arr=new Array(1,6,4,8) //1st way
//var arr=Array(1,6,4,8) //2nd way
var arr=[1,6,4,"ttt",8,7]//3rd way
arr[2]=12;//reinitialize
arr[7]=43; //can add in any index place
console.log(arr.length)
console.log(arr)//can hold heterogeneous,it is growable
console.log(arr[4])
console.log(typeof(arr))
var arr1=[1,2,3,[3,4]];
console.log(arr1.length)
console.log(arr.pop());//displays element which is deleted
arr.pop(); //deletes last element
console.log(arr.length)
console.log(arr1)
console.log(arr1.pop());//multiple deletion of array is possible ,when array inside array is given
var pp=[1,2,4]
console.log("Elements before push" +pp)
pp.push(5)
console.log(pp)
console.log(pp.push(4))//returns length of after adding array[resultant array]
console.log(pp)
