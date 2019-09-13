/*//1.To check sort method affecting resultant array
var arr = [1,3,4,2];
console.log(arr);
arr.sort();
console.log(arr);

//2. To check what sort() return
var arr = [1,3,4,2];
console.log(arr);
console.log(arr.sort());
console.log(arr);

//3.To check Sort the number with 2 digits
var arr=[1,24,3,25,2];
console.log(arr);
console.log(arr.sort());
console.log(arr);

//4. Passing function() as parameter in sort()
var arr=[1,26,52,3,9,1];
console.log(arr);
function mySort(a,b) {
    return a-b;
}
console.log(arr.sort(mySort()));
console.log(arr);

//5. passing function as parameter in sort() - sort inascending order
var arr=[0,-13,13,1,12,9];
console.log(arr);
function mySort(a,b) {
  return a-b;
}
console.log(arr.sort(mySort));
console.log(arr);*/

//6.passing function as parameter in sort() - sort in decending order
var arr = [0,13,-13,1,12,9];
console.log(arr);
function mySort(a,b) {
return b-a;
}
console.log(arr.sort(mySort));
console.log(arr);