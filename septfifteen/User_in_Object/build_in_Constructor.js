//Declaration:user defined Object using Build_in_constructor
//1>creation  of Object
var x=new Object();
console.log(x); //{}, empty object

console.log("====================");
//2>creating object of Object object and giving the data
var y=new Object();
console.log(y); //{}, empty object
y.z=12;
console.log(y);//{z:12}
y.a=13;
console.log(y);//{ z: 12, a: 13 }
console.log("====================");
//3>creating object and passing function
var z=new Object();
z.x=12;
z.a=function fun()
{
   console.log("hi") //it will not print , we are not calling function
}
console.log(z);//{ x: 12, a: [Function: fun] }

console.log("====================");
//4>creating object and passing function and variable
var a=new Object();
console.log(a);//{}, empty array
a.z="JS"
a.x=function fun()
{
    var y=12;
    console.log("hi"); //hi
    return 12; //12
}
console.log(a.x());
console.log(a);//{ z: 'JS', x: [Function: fun] }

console.log("====================");
//5>creating object and passing multiple variable
var e1=new Object();
var e2=new Object();
var e3=new Object();
e1.name="Ritika";
e1.age=25;
e2.name="Ruchika";
e2.age=27;
e3.name="Rishita";
e3.age=23;
console.log(e1); //{ name: 'Ritika', age: 25 }
console.log(e2);//{ name: 'Ruchika', age: 27 }
console.log(e3);//{ name: 'Rishita', age: 23 }
