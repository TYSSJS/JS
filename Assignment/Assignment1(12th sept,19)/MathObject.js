//Declaration: to check the methods of Math object with negative values
//1>using sqrt() with string
var m="bcde";
console.log(Math.sqrt(m)); //Nan , doubt
console.log("=======================");
 //2> using sqrt() with boolean
console.log(Math.sqrt(true));//1, compiler take true as 1 and gives the square root
console.log(Math.sqrt(false));//0,compiler takes false as 0.
console.log("=======================");
//3> using sqrt() with decimal number
console.log(Math.sqrt(25.5));//5.0497...., gives the square root
console.log("=======================");
//4> using sqrt() with negative number
console.log(Math.sqrt(-49)); // Nan, Not a number :will not considered negative number as number
console.log("=======================");
//5> using sqrt() with multiple number inside argument
console.log(Math.sqrt(36,25,36)); // 5, give sqrt of first value if will pass multiple argument

console.log("=======================");
//6> using min() with duplicates
console.log(Math.min(10,67,5,15,5,9));// 5 , will give the minimum value
console.log("=======================");
//7> using min() with decimal number
console.log(Math.min(95,67,21,24,29,10.5))//10.5 , will give minimum value
console.log("=======================");
//8> using min() with negative decimal number
console.log(Math.min(-25.5,10,33,50,0));// will give minimum number
console.log("=======================");
//9> using min() with combination of values
console.log(Math.min(25,"cdefg",true,-24,0,10.6)); //Nan
console.log("=======================");
//10> using min() with string
console.log(Math.min("abc",'a','c'));//Nan






