var s="Javascript";
//1>description:checking with no parameter
console.log(s.charAt()); //with 0 parameter
console.log("=======================");
//2>description:checking with boolean
console.log(s.charAt(true)); //a ,compiler is treating true as 1 and 1th index is a
console.log(s.charAt(false)); //j, compiler is treating false as 0 and oth index is j
console.log("=======================");
//3>description:checking with String
console.log(s.charAt("abcde")); //if we pass string in charAt(), then compiler will take 0th index always
console.log(s.charAt('a'));
console.log(s.charAt("Ritika"));
console.log("=======================");
//4>description:checking with the number greater than the length
console.log(s.charAt(12)); //Empty, 12th index is not there
console.log(s.charAt(9));//t
console.log(s.charAt(10));//Empty
console.log("=======================");
//5>description:checking with decimal nos
console.log(s.charAt(2.5)); // v,compiler will check 2nd index
console.log(s.charAt(7.5)); // i
console.log("=======================");
//6>description checking with decimal nos
console.log(s.charAt(-2)); //empty
console.log(s.charAt(-10));
console.log("=======================");
//7>description:checking with null
console.log(s.charAt(null)); //j, null is treated as oth index
console.log("=======================");
//8>description:checking with undefined
console.log(s.charAt(undefined)); //j, undefined is also treated as 0














