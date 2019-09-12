////////////////////array object/////////////////

//SPLICE with boolean value
var arr=[1,2,3,4,5,3,6,7,8,9];
arr.splice(2,true);
console.log(arr);
console.log(arr.splice(2,5));

// output:[ 1, 2, 4, 5, 3, 6, 7, 8, 9 ]
//     [ 4, 5, 3, 6, 7 ]

//SPLICE with negative values

var arr=[1,2,3,4,5,3,6,7,8,9];
arr.splice(2,-5);
console.log(arr);
console.log(arr.splice(2,5));
//output:
// [ 1, 2, 3, 4, 5, 3, 6, 7, 8, 9 ]
//     [ 3, 4, 5, 3, 6 ]


//for non exixting value

var arr=[1,2,4,6,8];
console.log(arr.splice("ttt"));
console.log(arr);

//output:
//     [ 1, 2, 4, 6, 8 ] // array values deleted
//         []  //the array is empty

