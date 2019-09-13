var s="Ritika";
//1>checking with boolean
console.log(s.indexOf(true));//-1
console.log(s.indexOf(false));//-1
console.log("=========================")
//2>checking with String
console.log(s.indexOf("abc")); //-1
console.log(s.indexOf('j'));
console.log("=========================")
//3>checking with number
console.log(s.indexOf(2));
console.log("=========================")
//4>checking with decimal number
console.log(s.indexOf(2.0));
console.log("=========================")
//5>checking with null
console.log(s.indexOf(null));
console.log("=========================")
//6>checking with Empty
console.log(s.indexOf());
console.log("=========================")
//7>checking with negative number
console.log(s.indexOf(-2));
console.log("=========================")
//8>checking with undefined
console.log(s.indexOf(undefined));
console.log("=========================")
//8>checking with substring
console.log(s.indexOf("ika"));
console.log(s.indexOf("ikar"));


