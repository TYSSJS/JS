//1.map() is used to do any action on each and every element
var arr=[1,2,3,8,4];
function myMap(a)
{
    return a+2;
}
console.log(arr.map(myMap));
console.log(arr);

//2.To add 3 for first two element and 5 for next element
var arr = [1,2,7,3];
function myMap(a,b)
{
    if(b<=1)
    {
        return a+3;
    }
    else
    {
        return a+5;
    }
}
console.log(arr.map(myMap));
console.log(arr);