/*Sorting method which sorts the array in the ascending order but in JavaScripts it happens unit wise. So, first it
* compares the 1st digit and when the 1st digits are similar then it will go for the second digit.
* sorting functions accepts minimum two parameters.
* sort() is partially incomplete and it affects the resultant array.*/


//1.var arr=[25,1,3,23,4];
/*
console.log(arr.sort());//[ 1, 23, 3, 4 ]
console.log(arr);
 */


//2.Designing a function and taking it as parameter for sort function.

function mySort(a,b)
{
     return a-b;
}

/*
console.log(arr.sort(mySort()));//TypeError: The comparison function must be either a function or undefined but in
                                //2017 version mySort() will be taken as zero so it needs a meaningful parameter.
console.log(arr);
 */

//3.Now taking mySort as an argument
/*
console.log(arr.sort(mySort));
//[ 1, 3, 4, 23, 25 ] So mySort is a meaningful formal argument so compiler is
//calling the mySort function and sorting the elements by taking 25 as 'a' and
//'b' as 1 and a-b if negative then it returns false and swap the elements and if it is positive is returns true
//and do nothing.
console.log(arr);//[ 1, 3, 4, 23, 25 ]
 */

//4.Taking string characters.
/*
var str=['z','b','c','e','a'];
console.log(str.sort(mySort));//[ 'z', 'b', 'c', 'e', 'a' ]
console.log(str);//[ 'z', 'b', 'c', 'e', 'a' ]
 */

//5.Taking all numbers in string
/*
var arr1=["10",'2',"7",'4',"8",'1'];
console.log(typeof (arr1.sort(mySort)));//object
console.log(arr1);//[ '1', '2', '4', '7', '8', '10' ]
console.log(typeof ('1'));//string
 */


//6.Taking combination of string numbers and numbers
/*
var arr=[1,'2',0,'9','0',10];
console.log(arr.sort(mySort)); //[ 0, '0', 1, '2', '9', 10 ]
console.log(arr);
//[ 0, '0', 1, '2', '9', 10 ] its is sorting the combined array but representation is done in
//string number and number
 */

//7.Taking all the string for sorting
/*
var str1=['you','about','knowledge','basic'];
console.log(str1.sort(mySort));
//[ 'you', 'about', 'knowledge', 'basic' ]-it is not taking sorting according to string.
console.log(str1);//[ 'you', 'about', 'knowledge', 'basic' ]
 */

//8.Taking an empty array
/*
var arr2=[];
console.log(arr2.sort());//[]
 */

//9.sorting string without any argument
var str=['z','b','c','e','a'];
console.log(str.sort());//[ 'a', 'b', 'c', 'e', 'z' ]
console.log(str);//[ 'a', 'b', 'c', 'e', 'z' ]