//Declaration:using typeOf()
//1>using typeOf() for number
var a=12;
console.log(typeof a);

console.log("====================")
//2>using typeOf() for decimal number
var x=12.3;
console.log(typeof(a))

console.log("=============================");
//3>using typeOf() for string
var x="bcd"
console.log(typeof x);
console.log("=============================");
//4>using typeOf() for string with single quotes
var x='a'
console.log(typeof(x));
console.log("=============================");
//5>using typeOf() for boolean
var x=true;
console.log(typeof x);
console.log("=============================");
//6>declaring variable without assigning
var y;
console.log(y);
console.log("=============================");
//7>using typeOf() for variable which is not assigned
var y;
console.log(typeof (y));//type of undefined value is undefined
console.log("=============================");
//8>using typeOf() for number
var a=12;
console.log(typeof (a));// number
a="abc";
console.log(typeof(a));//string
console.log("=============================");
//9>using typeOf() for  number and declaring string to that variable
var a=12;
console.log(typeof (a));// number
a="abc";
console.log(a);// abc
console.log("=============================");
//10>using typeOf() for  number
var a=12;
console.log(typeof (typeof(a)));
console.log("=============================");
//11>using typeOf() for  string
var a="cde";
console.log(typeof (typeof (a)));
console.log("=============================");
//12>using typeOf() for boolean
var a=true;
console.log(typeof (typeof (a)));
console.log("=============================");
//13>using typeOf() for  string with single quotes
var x='r'
console.log(typeof(r));
console.log("=============================");
//11>comparing 2-values by using double equals and passing null and zero respectively
var x=null;
var y;
console.log(x==y); //true bcoz x and y both don't have any value

console.log("=============================");
//12>comparing 2-values and type by using triple equals and passing null and zero respectively
var x=null;
var y;
console.log(x===y); // false because both x and y are of different type
console.log("=============================");
//13>using typeOf() by passing null and zero respectively
var x=null;
var y;
console.log(typeof (x)); // null value is of object type
console.log(typeof (y)); // undefined value is of undefined type

console.log("=============================");
//14>using typeOf() by passing null and undefined respectively.
var x=null;
var y=undefined;
console.log(typeof (x));// object
console.log(typeof (y));//undefined









