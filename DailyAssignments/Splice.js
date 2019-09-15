/*All the possible output of splice method by performing maximum possible scenarios*/
var arr=[1,3,2,4,5,6];
/*
 console.log(arr.splice(-1));//[6]
 console.log(arr);[1,3,2,4,5]
 */

//Taking string number as an argument
/*
  console.log(arr.splice("1"));// [3,2,4,5,6]
  console.log(arr);//[1]
 */

// Taking no arguments
/*
console.log(arr.splice());//[]
console.log(arr);//[1,3,2,4,5,6]
 */

/*
//Taking boolean
console.log(arr.splice(true));//[ 3, 2, 4, 5, 6 ]
console.log(arr); //[1]
 */

/*
//Taking boolean
console.log(arr.splice(false));//[ 1, 3, 2, 4, 5, 6 ]
console.log(arr);//[]
 */

/*
//Taking string as parameter
console.log(arr.splice("hello"));// It takes string as 0 ,[1,3,2,4,5,6]
console.log(arr);//[]
*/

/*
//Taking empty string as parameter
console.log(arr.splice(" "));//[ 1, 3, 2, 4, 5, 6 ], taking argument as 0
console.log(arr);// []
 */

/*
//Taking boolean as string argument
console.log(arr.splice("true"));// [ 1, 3, 2, 4, 5, 6 ], taking argument as 0
console.log(arr);//[]
 */

/*Taken all the scenarios for all splice method for two parameter */
// Taking null as a second parameter
/*
console.log(arr.splice(2,null));// [] - is does not deleted as number of element to deleted not given.
console.log(arr); //[ 1, 3, 2, 4, 5, 6 ]
 */

//Taking nothing as 2nd argument
/*
console.log(arr.splice(2,));//[2,4,5,6]- it is acting as only one parameter in splice();
console.log(arr);//[1,3]
 */

//Taking negative value at the second parameter
/*
console.log(arr.splice(1,-2));//[]- as delete count is -2 it is not deleting anything
console.log(arr);//[1,3,2,4,5,6]
 */

//Taking 1st parameter as negative and second as positive
/*
console.log(arr.splice(-2,2));//[5,6]- as it their is no negative index so it is deleting the
                                              //deleting the from the last index of the array.
console.log(arr);//[1,3,2,4]
 */

// Taking boolean as parameter
/*
console.log(arr.splice(true,2));//[3,2]- as it is taking true as 1 so that why it is deleting the
                                                //from the index 1.
console.log(arr);//[1,4,5,6]
 */
/*
console.log(arr.splice(false,2));//[1,3]- as taking false as 0 so thats why it is deleting for the
                                                 // 0th index
console.log(arr);//[2,4,5,6]
 */

/*
// Taking three parameters
console.log(arr.splice(1,2,9)); //[3,2]
console.log(arr);//[1,9,4,5,6]
//Here splice() form 1st index delete count is 2 and 9 is being added to the 1st index as splice deleted the two
//elements from 1st index.
 */

// Taking boolean parameter in splice(p1,p2,p3)
/*
console.log(arr.splice(1,2,true));//[3,2]
console.log(arr);//[1,true,4,5,6] - adding true at the index but it is not taking 1;
 */
/*
console.log(arr.splice(1,2,false));
console.log(arr);//[1,false,4,5,6]
 */

//Taking negative values at splice(,,p3);
/*
console.log(arr.splice(1,2,-9));
console.log(arr);//[1,-9,4,5,6]
 */

//Taking random values
/*
console.log(arr.splice(1,true,9));//[2]- it is taking true as 1;
console.log(arr);//[1,9,2,4,5,6]
 */
/*
console.log(arr.splice(1,null,9));//[]- it is not deleting any element as deleteCount is null
console.log(arr);//[ 1, 9, 3, 2, 4, 5, 6 ]
 */
/*
 console.log(arr.splice(1,'1','2'));// [3]-'1'accepts as the index value
 console.log(arr);//[1,'2',2,4,5,6]- '2' accepts as the added value.
 */
/*
console.log(arr.splice(1,'hello','hey'));//[]- taking string as null it is not deleting anything
console.log(arr);//[1,'hey',3,2,4,5,6]- adding 'hey' to the index 1;
 */
/*
console.log(arr.splice(1,'ture',"true"));//[]- deleteCount is taken as string therefore not deleting anything
console.log(arr);//[1,'true',3,2,4,5,6] adding true in single '' quotes.
 */