//Declaration:using filter() in Array object
//1>using filter() with 0-parameter
/*var arr=[1,2,3];
arr.filter()
console.log(arr);
Error:undefined is not a function , so we have to pass minimum 1 parameter in filter().
*/
console.log("=====================");
//2>using filter() with meaningless parameter
/*var arr1=[1,2,3];
arr.filter(">2");
console.log(arr1);// Error: arr is not defined
whenever we pass meaningless parameter it will behave like 0-parameter,so error
*/
console.log("=====================");
//3>using filter() with meaningful parameter
var arr2=[1,2,3,5,6];
function myFilter(a) {
    return a>2;
}
console.log(arr2.filter(myFilter));//[ 3, 5, 6 ], returning the filtered array
console.log(arr2);//[ 1, 2, 3, 5, 6 ], because resultant array will not be affected

console.log("=====================");
//4>using filter() with meaningful parameter directly without function
/*var arr3=[1,2,3,4,5,6]
arr3.filter(a>2);
console.log(arr3); //Error: a is not defined
we cannot pass directly
*/
console.log("=====================");
//5>using filter() with multiple parameter
var arr4=[1,2,3,4,5,6];
function myFilter(a,b,c,d) {
   console.log(a);// a gives parameter
   console.log(b);
   console.log(c);
   console.log(d);
   return a>2;
}
console.log(arr4.filter(myFilter));//[ 3, 4, 5, 6 ], returning filtered array
console.log(arr4);//[ 1, 2, 3, 4, 5, 6 ], resultant array will nit be affected

