//Declaration:using map() to perform action on each element
//1>using map() , performing action on each element
var arr=[1,2,3,5];
function myMap(a)
{
    return a+3;
}
console.log(arr.map(myMap));//[ 4, 5, 6, 10], will add 3 on each element
console.log(arr);//[ 1, 2, 3, 5 ], resultant array will not affected
console.log("=============================");
//2> performing different data on different elements
var arr1=[1,2,3,5];
function myMap(a,b) {
    if (b <= 1) {
        return a + 3;
    } else {

        return a + 5
    }
}
        console.log(arr1.map(myMap));//[ 4, 5, 8, 10 ]
        console.log(arr1);//[ 1, 2, 3, 5 ], resultant array will not be affected
