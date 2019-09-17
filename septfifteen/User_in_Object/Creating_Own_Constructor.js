//Declaration:Creating oen constructor/Template
//1>create own constructor
function fun(name,age)
{

}
var e1=new fun();
console.log(e1); //fun{}
console.log("=================")
//2>creating own constructor and passing values
function fun1(name,age)
{

}
var e2=new fun1("abc",12);
console.log(e2);//fun1{} , empty object bcoz compiler doesn't know which value belongs to which key

console.log("=================")
//3>creating own constructor and passing values
function fun2(name,age)
{
    this.name=name;
    this.age=age;
}
var e1=new fun2();
console.log(e1);//fun2 { name: undefined, age: undefined } , undefined bcoz it is defined but value is not there
var e2=new fun2("Ritzi",18);
console.log(e2);//fun2 { name: 'Ritzi', age: 18 }

console.log("=================")
//4>creating own constructor with arguments--->DOUBT?
function fun3()
{
    this.name=arguments[0];
}
var e1=new fun3("abc", 18);
console.log(e1);//fun3 { name: 'abc' }

console.log("=================")
//5>creating own constructor by using this
function fun4(name,age) {
    this.name=name;
    this.age=age;
}
var e1=new fun4("Rishi",23);
console.log(e1);//fun4 { name: 'Rishi', age: 23 }

console.log("=================")
//6>creating own constructor by using this
function fun5(name,age) {
this.n=name;
this.a=age;
}
var e1=new fun5("A",25);
var e2=new fun5("B",27);
console.log(e1);//fun5 { n: 'A', a: 25 }
console.log(e2);//fun5 { n: 'B', a: 27 }

console.log("=================")
//7>creating own constructor and adding some values individually and seperately with object reference
function fun6(name,age) {
    this.name=name;
    this.age=age;
}
var e1=new fun6("Mahi",28);
var e2=new fun6("osama",27);
e1.number=35578927;
e2.number=554678590;
console.log(e1);//fun6 { name: 'Mahi', age: 28, number: 35578927 }
console.log(e2);//fun6 { name: 'osama', age: 27, number: 554678590 }

console.log("=================")
//8>creating own constructor and adding some values individually and seperately with object reference
function fun7(name,age)
{
    this.n=name;
    this.a=age;
}
var e1=new fun7("A",36);
var e2=new fun7("c",45);
e1.number=344;
e2.number=566;
console.log(e1);//fun7 { n: 'A', a: 36, number: 344 }
console.log(e2);//fun7 { n: 'c', a: 45, number: 566 }

console.log("=================")
//9>using directly this.x in console
console.log(this.x);//undefined, bcoz this temporarily creating object

console.log("=================")
//10>using different name w.rto this and checking
function fun8(name,age)
{
    this.n=name;
    this.a=age;
}
var e1=new fun8("A",23);
var e2=new fun8("B",34);
e1.number=455;
console.log(e1.name);//undefined , it will search for key as name

console.log("=================")
//11>adding same values in each object by adding in function
function fun9(name,age)
{
    this.name=name;
    this.age=age;
    this.number=567;
}
var e1=new fun9('A',23);
var e2=new fun9('B',45);
console.log(e1);//fun9 { name: 'A', age: 23, number: 567 }
console.log(e2);//fun9 { name: 'B', age: 45, number: 567 }

console.log("=================")
//12>checking arguments
function fun10(a,b) {
    console.log(arguments); //[Arguments] { '0': 12, '1': 35, '2': 56 }
}
fun10(12,35,56);


console.log("=================")
//13>passing numeric value as key
var obj=new Object();
obj[0]="def";
obj[1]="abc";
console.log(obj);//{ '0': 'def', '1': 'abc' }
console.log("=================")
//14>passing string in [] as key
/*var obj1=new Object();
obj1[name]="def"; //Error:name is not defined
console.log(obj1);
*/
console.log("=================")
//15>passing string in [] as key in quotes
var obj2=new Object();
obj2['name']="abc";
console.log(obj2); //{ name: 'abc' }




