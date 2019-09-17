//Declaration:using prototype ,
// if we want to add any value to each object without changing function,we will go for prototype.

//1>using prototype, different syntax
function fun(name,age) {
 this.n=name;
 this.a=age;
}
var e1=new fun("A",25);
var e2=new fun("B",34);
e1.prototype="abc";
console.log(e1);//fun { n: 'A', a: 25, prototype: 'abc' }
console.log(e2);//fun { n: 'B', a: 34 }

// compiler will take t as key and add to e1, this is not right syntax
console.log("=====================");
//2>using prototype, different syntax
function  fun1(name,age) {
    this.n=name;
    this.a=age;
}
var e1=new fun1("A",55);
var e2=new fun1("B",87);
console.log(e1);//fun1 { n: 'A', a: 55 }
console.log(e2);//fun1 { n: 'B', a: 87 }
//console.log(e1.number);
fun1.prototype.number=("abcd");
console.log(e1);//fun1 { n: 'A', a: 55 }
console.log(e2);//fun1 { n: 'B', a: 87 }
console.log(e1.number);//abcd
console.log(e2.number);//abcd

console.log("=====================");
//3>using prototype, different syntax
/*function fun2(name,age)
{
    this.n=name;
    this.a=age;
}
var e1=new fun2("A",18);
var e2=new fun2("B",16);
console.log(e1);
console.log(e2);
e1.prototype.number="abcd";// Error:Cannot set property 'number' of undefined
console.log(e1);
*/



