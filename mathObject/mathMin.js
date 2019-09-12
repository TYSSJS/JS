////////////math object/////////////////////
////////////////////////math min///////////////////////

//for undefined value

//console.log(Math.min(10,32,-76,an)); ///  an not defined

//for null

console.log(Math.min(10,32,-76,null)); /// -76

//for boolean

console.log(Math.min(10,32,-76,true)); /// -76

console.log(Math.min(10,32,0,false)); /// 0

//for one value

console.log(Math.min(10)); /// 10

// different values
var m=10;
console.log(Math.sqrt(m)); //5

var m='';
console.log(Math.sqrt(m)); // 2.24

var m='d';
console.log(Math.min(10,32,-76,45)); /// -76