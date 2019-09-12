//////////////////string Objects///////////////////////////
//////////////////////length function////////////////////////////

/// how to find the length of the string without using length fuction
var s="hello i i o"
var a1=s.length
var a2=s.lastIndexOf('o')
a2=a2+1;
if (a1==a2)
    console.log("lenght of the string is ",a2)   ///output : lenght of the string is  11

//////length function
var s="javascript";
console.log(s.length); //10

//with boolean value
var s=true;
console.log(s.length); //output is undefined

//with number value
var s=1;
console.log(s.length); //output is undefined

