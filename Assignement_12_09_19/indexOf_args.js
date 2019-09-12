//2.Passing arguments with different type-indexOf() of String object
var s = "Welcome to JS1";
var s1=["welcome",2,"js"];
console.log(s1.indexOf("js"));
console.log(s1.indexOf("asd"));
console.log(s.indexOf('c'));
console.log(s.indexOf('w'));
console.log(s.indexOf('a'));
console.log(s.indexOf(' '));
console.log(s.indexOf(e)); //error
console.log("**********");
console.log(s.indexOf("e"));
console.log(s.indexOf(""));
console.log(s.indexOf("Wel"));
console.log("*****************");
console.log(s.indexOf(5));
console.log(s.indexOf("1"));
console.log(s.indexOf("fef"));
console.log(s.indexOf(null));
console.log("************");
console.log(s.indexOf(false));
console.log(s.indexOf(undefined));
console.log(s.indexOf(true));
console.log("**********");