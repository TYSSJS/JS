//6.Passing arguments with different type -Math objects
console.log(Math.sqrt("dsf"));//NaN
console.log(Math.sqrt(undefined));//NaN
console.log(Math.sqrt(false));//0
console.log(Math.sqrt(true));//1
console.log(Math.sqrt(null));//0

console.log("**********");

console.log(Math.min(10,false,-5,true,10,"js"));

console.log(Math.min(true,false));
console.log(Math.min(-1,true,false));
console.log(Math.min(true,5,10,true,5));
console.log(Math.min(-20,false,9,2,9));
