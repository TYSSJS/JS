//Declaration:check sort() with String
//1> using sort() in String of 1-char
var arr=["e", "b", "g",'h'];
console.log(arr); //['e','b','g','h']
console.log(arr.sort());//['b,, 'e','g','h']
console.log(arr);//['b,, 'e','g','h']

console.log("=====================");
//2> using sort() in String of multiple-char
var arr1=["cde",'bgh',"fhg","abc"];
console.log(arr1.sort());
console.log(arr1);

console.log("=====================");
//3> using sort() in empty array
var arr2=[];
console.log(arr2.sort());//[]
console.log(arr2);//[]
console.log("=====================");
//4> using sort() by passing 0-parameter as function
var arr3=[1,23,4,2];
console.log(arr3);//[1,23,4,2]
function mySort()
{

}
console.log(arr3.sort(mySort));//[1,23,4,2]
console.log(arr3);//[1,23,4,2]
//if we will not pass the parameter it will not sort
console.log("=====================");
//5> using sort() by using number and number in quotes
var arr4=[9,2,1,'5',8,"4"]
console.log(arr4.sort());//[1,2,'4','5',8,9]
console.log(arr4);//[1,2,'4','5',8,9]
console.log("=====================");
//6> using sort() by passing parameter as combination
var arr5=[23,45,2,'5',"abc"];
console.log(arr5);// [ 1, 2, '4', '5', 8, 9 ]
function mySort(a,b)
{
    return a-b;
}
console.log(arr5.sort(mySort));//[ 2, '5', 23, 45, 'abc' ]
console.log(arr5);//[ 2, '5', 23, 45, 'abc' ]
console.log("=====================");
//7> using sort() by passing multiple parameters
var arr6=[23,45,25,3,77]
console.log(arr6);//[ 23, 45, 25, 3, 77 ]
function mySort(a,b,c,d,e)
{
    return a-b;
}
console.log(arr6.sort(mySort));//[ 3, 23, 25, 45, 77 ]
console.log(arr6);//[ 3, 23, 25, 45, 77 ]

