  //Assignment on splice method
var arr=[1,2,3,4]
//arr.splice(2)//splice with 1 parameter
  arr.splice(true)
console.log(arr)

var arr1=[4,3,2,1,3,4,6]
arr1.splice("uuu",5)//splice with 2 parameters//deletes 5 elements from starting of array
//arr1.splice(3,"jjj")
 // arr1.splice(2,false)//Nothing gets deleted
  //arr1.splice(2,true)//Nothing gets deleted
  //arr1.splice(3,-3)//nothing is deleted
console.log("second array:" +arr1)
//arr1.splice(0);
//console.log(arr1)

var arr2=[1,2,3,4,4,5,6,8]//splice with 3 parameters
arr2.splice(2,4,6)//deletes 4 element form given index and adds the given number(3rd position)at given index
console.log(arr2)


var arr3=[1,2,3,4,4,5,6,8]//splice with 3 parameters
arr3.splice(2,0,6)//doesnot delete any element but adds the given number in given index
console.log(arr3)
