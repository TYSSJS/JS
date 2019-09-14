/* We are trying all the possible ways we can use charAt() by providing different parameters */
var str='javascript';
//console.log(str.charAt(3));
// console.log(str.charAt(true));//a
// console.log(str.charAt(false));//j
 console.log(str.charAt('5'));//j
// console.log(str.charAt('hello'));//j
console.log(str.charAt('whatthehell'));//j
console.log(str.charAt());//j
console.log(str.charAt(0.5));//j
console.log(str.charAt(-1));//j
console.log(str.charAt(1+3));//s
