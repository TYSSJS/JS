/*

////////sort///////////////
var arr=[1,23,25,3,35];
console.log(arr)
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort(mySort));//compiler is calling mysort though we are passing fuc definition
*/

////////////////////////////with string values/////

var arr=["gf","ab","cd"];
console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort());  ///output: [ 'ab', 'cd', 'gf' ]


////sort with string values for sort/////

var arr=['b',7,8,12,4];
console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort()); //output:[ 12, 4, 7, 8, 'b' ]

/////////////////sort with sort(mySort) for multiple value //////////

var arr=['v','b',8,12,4];
console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort(mySort)); // output:  [ 'v', 'b', 4, 8, 12 ]

////////////////////

/////////////////sort with sort(mySort) for empty value //////////

var arr=[""];
console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort(mySort)); // output:  [ '' ]

/////////////////sort with sort() for empty value //////////

var arr=[""];
console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort()); // output:  [ '' ]


/////////////////sort with sort() for empty value //////////

var arr=[false,null,true];
console.log(arr);
function mySort(a,b)
{
    return a-b;
}
console.log(arr.sort(mySort)); // output:  [ false, null, true ]
