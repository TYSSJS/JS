/*Array Objects are built in objects and are use to store Homogeneous or Heterogeneous values it can be updated,
* grow, deleted
* Their is not fixed size array */

//We are checking if it display all the element in the parenthesis or not
/*
var arr=(1,3,5,4);
console.log(arr); //4
 */

//We can also re-assign the value in the array.
/*
var arr=[1,3,5,7,9];
arr[1]=6;
console.log(arr);//[1,6,5,7,9]
 */

//Checking if array is growable or not and as well as we can add element at any position
/*
var arr=[12,13,34,56];
arr[5]=76;
console.log(arr);//[12,13,34,56,<1 empty item>,76]
 */

//pop()- it is used to delete element at the end of the array.
/*
var arr=[1,3,2,4];
console.log(arr);//[1,3,2,4]
console.log(arr.pop());// 4 - it takes the value which is deleted. arr.pop(1)- it will still delete the last element.
console.log(arr);//[1,3,2]
 */

//push()- this method adds the element at the end or the array.
/*
var arr=[1,3,2,4];
console.log(arr);//[1,3,2,4]
console.log(arr.push(6));//5- it returns the size of the array.
console.log(arr);//[1,3,2,4,6]
 */

//shift()-this method is used for deleting the 1st value from the array.
/*
var arr=[1,3,2,4];
console.log(arr);//[1,3,2,4]
console.log(arr.shift());//[1]-it holds the value which is deleted, shift(2)- it will still deletes the 1st value.
console.log(arr);//[3,2,4]
 */

//unshift()-this is the method by which it adds the value at the starting of the array.
/*
var arr=[1,3,2,4];
console.log(arr);//[1,3,2,4]
console.log(arr.unshift(6));//5- it returns the size of the array.
console.log(arr);//[6,1,3,2,4]
 */

//splice()- splice() with one argument act as deleting all the elements from that index.
/*
var arr=[1,3,2,4,5,6];
console.log(arr);//[1,3,2,4,5,6]
console.log(arr.splice(2));//[2,4,5,6]- it returns the array of deleted values.
console.log(arr);//[1,3]
 */

//splice(p1,p2)- splice with two parameter where it starts from the p1-index and p2- no. of elements to be deleted.
/*
var arr=[1,3,2,4,5,6];
console.log(arr);//[1,3,2,4,5,6]
console.log(arr.splice(2,2));//[2,4]
console.log(arr);//[1,3,5,6]
 */

//splice(p1,p2,p3)- splice with three argument acts as p1- index,p2-no. of element to be deleted,p3- element
// to be added
/*
var arr=[1,3,2,4,5,6];
console.log(arr);//[1,3,2,4,5,6]
console.log(arr.splice(2,2,9));//[2,4]
console.log(arr);//[1,3,9,5,6]- it adds 9 at the place of index from which we want to delete the elements.
 */

//sort()- so this function sorts the array in ascending order and it sorts by unit wise or we can say that
//unicode.
/*
var arr=[1,25,4,34,23];
function fun(a,b)
{
    return a-b;
}
console.log(arr.sort());//[ 1, 23, 25, 34, 4 ]- unit wise comparision
console.log(arr.sort(fun));//[ 1, 4, 23, 25, 34 ]- whole number wise comparision
console.log(arr);//[ 1, 4, 23, 25, 34 ]
 */

//filter() is a function which is used to filter the values in the array, so it accepts minimum one parameter.
//so as an parameter in  filter() where p1- hold the value of array, p2- holds the index and p3-holds the original
// array and after that all the parameter. It doesn't affects the resultant array.
/*
var arr=[9,1,7,3,6,5];
function fun(a,b,c,d)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  return a>5;
}
console.log(arr.filter(fun));//[ 9, 7, 6 ]
console.log(arr);//[ 9, 1, 7, 3, 6, 5 ]
*/

//reduce() reduce is the function which is use to reduce the whole array in to a single value.
//It it doesn't affect the resultant array and it require minimum two parameters.
/*
var arr=[9,2,6,4,1,7];
var str=['b','c','e','f','d','a'];
var str1=["a","b","c"];
function fun(a,b)
{
    return a+b;
}
console.log(arr.reduce(fun));
console.log(arr);
 */

//Map() function performs action on each & every element in array.
// The minimum parameter it accepts is one. It also not affects the resultant array.
/*
var arr=[1,2,3,4];
function myMap(a)
{
 return a+3;
}
console.log(arr.map(myMap));//[ 4, 5, 6, 7 ]- added 3 in each element.
console.log(arr);//[ 1, 2, 3, 4 ]

 */