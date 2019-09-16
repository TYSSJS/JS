//1.Syntax of object

var x = new Object();
console.log(x);

//2.To enter data into the object-we have to use reference variable becos,
//it will not come to know which object so,we use reference to enter data

var x = new Object();
console.log(x);
x.n=12;
x.f=function fun()
{
    console.log("hi");
}
x.b=true;
x.s="Javascript";
x.l=null;
x.u=undefined;
x.a=[4,8,2,0];
console.log(x);

//3.Enter data with key as number
var a = new Object();
a[1]="Javascript";
//a.'2'="JS"; //Error

//4.Represented data in key value pair.so,Access by using key
var a = new Object();
console.log(a);
a.a=12;
a.b="Karnataka";
a.c=function fun()
{
    var x=10;
    console.log("Hi");
    return 2;
}
console.log(a);
console.log(a.c());
console.log(a.b);
console.log(a.a);

//5.Disadvantage of builtin constructor - Each&every object we have to declare
//variable so,we are going for our own constructor
var e1 = new Object();
var e2 = new Object();
var e3 = new Object();
e1.name ="anitha";
e1.age = 12;
e2.name = "vanitha";
e2.age = 21;
e3.name = "sushmithi";
e3.age = 25;
console.log(e1);
console.log(e2);
console.log(e3);