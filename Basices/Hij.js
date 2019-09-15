12  // it won't give any error in javaScript
console.log(10);
"---------------------------------------------"
for(var i=1;i<=2;i++)
{
    console.log(i);
}
console.log(i);
"---------------------------------------------"
for(var j=1;j<=2;j++)
{
    var z=13;
    console.log(j);
}
console.log(z);
"---------------------------------------------"
for(let m=1;m<=2;m++)
{
    console.log(m);
}
//console.log(m);   ---> by using let we cant call the variable in out of scope so it gives an error
"---------------------------------------------"
for(let t=1;t<=2;t++)
{
    let mm=12; //it wont give any error becz by using "let" we can
    console.log(t);
}
"---------------------------------------------"
