//1.To check it is not affecting resultant array & returns filtered array
var arr = [4,7,2,0,1];
function myFilter(a)
{
    return a>2;
}
console.log(arr.filter(myFilter));
console.log(arr);

/*2.To find the meaning full arguments- without passing parameter it will not work
so it is totally incomplete*/
var arr = [4,7,2,0,1];
function myFilter(a,b,c,d,e,f)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    return a>2;
}
console.log(arr.filter(myFilter));
console.log(arr);