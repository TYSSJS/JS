// `1) length var`
// var s="javascript";
// console.log(s.length);

// 2) charAt function
// var s="javascript";
// console.log(s.charAt(1)); // chatAt takes argument as index number

// var s="null";
// console.logs.charAt(1));

// var s=null;
// console.log(s.charAt(1));   //TypeError: Cannot read property 'charAt' of null

// var s=10;
// console.log(s.charAt(1));   //TypeError: s.charAt is not a function

// var s="praveenkumar";
// console.log(s.charAt(-1));   //empty(syntax is correct but it will not print any thing)

// var s="praveenkumar";
// console.log(s.charAt(true));

// var s="praveenkumar";
// console.log(s.charAt(false));

// var s="praveenkumar";
// console.log(s.charAt(1.26));

// var s="praveenkumar";
// console.log(s.charAt(null));

// var s="praveenkumar";
// console.log(s.charAt(undefined));

// var s="praveenkumar";
// console.log(s.charAt(30));

//3)indexOf
// var s="praveenkumar";
// console.log(s.indexOf("e")); // indexOf function accept the string value and it returns index of the string

// var s="praveenkumar";
// console.log(s.indexOf("z"));  //-1

// var s="praveenkumar";
// console.log(s.indexOf("een")); //4

// var s="praveenkumar";
// console.log(s.indexOf(null));   //-1

// var s="praveenkumar";
// console.log(s.indexOf(undefined));  //-1

// var s="praveenkumar";
// console.log(s.indexOf(10));  //-1

// var s="praveenkumar";
// console.log(s.indexOf(-410));    //-1

//toUpperCase
// var s="praveenKumaR";
// console.log(s.toUpperCase());

// var s="praveen__+KumaR";
// console.log(s.toUpperCase());

// var s="";
// console.log(s.toUpperCase())