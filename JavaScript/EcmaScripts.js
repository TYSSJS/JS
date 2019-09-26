
// NO.1.
/*class A
{
    constructor()
    {
        console.log("constructor");

    }
    fun()
{
    var x=12;
    console.log("constructor");


}
}
//new A();
//console.log(new A());
//console.log(A.fun());*/

//No-2.

/*class A
{
    constructor() {
        super();
        console.log("constructor")
    }

    fun()
    {
        var x=12;
        console.log("hi");

    }
}
new A(12);*/

//No-3.

/*class A
{
    constructor() {

        console.log("constructor")
        super();
    }

    fun()
    {
        var x=12;
        console.log("hi");

    }
}
new A(12);*/
//No-4

/*class B
{

    constructor()
    {
        console.log("constructor-B")
    }
    fun1(){
        var x=12;
        console.log("hi")

    }
}

class A extends B
{


    constructor()

console.log("constructor-A");
console.log("dhfghj");
}*/


//No-5

/*class A
{
    fun()
    {
        console.log("hi")

    }
    fun()
    {
        console.log("hello")
    }
}
//fun()
new A().fun()*/

//No-6.

/*class A
{
    fun()
    {
        console.log("hi")

    }
    fun(a)
    {
        console.log("hello")
    }
}
//fun()
new A().fun(12)*/

//Constructor with parameter
//No-6

/*class A
{
    constructor(a)
    {
        console.log("hi")
    }
}
new A();*/

//Construcor Overloading
//No.8

/*class A
{
    constructor()
    {
        console.log()
    }
    constructor()
    {
        console.log("Hi")
    }
}*/

//Function Type
///NO-9

/*class A{
    constructor() {
        console.log("Hi")
    }
}
console.log(typeof A)*/

//Extends -Inheritance
//No-10

/*class  B {
    fun()
    {
        console.log("fun-1")
    }

}
class A extends B {

}
new A().fun()*/

//No-12


/*class  B {
    fun()
    {
        console.log("fun-1")
    }

}
class A extends B {
fun() {
    console.log("fun-2")
}

}
new B().fun()*/
