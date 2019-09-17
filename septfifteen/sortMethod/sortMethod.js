//Declaration: using sort() with 2 digit no and passing parameter as function and calling the function
var arr=[1,23,4,2];
console.log(arr);
function mySort(a,b )
{
    return a-b;
}
console.log(arr.sort(mySort()));
console.log(arr);

/* Error:-The comparison function must be either a function or undefined
in latest version we are getting error or else we will not get in old version
 but we will get sorted array accordingly unit code only but not according to the requirement
 so, we don't have to call mySort() function
 */
