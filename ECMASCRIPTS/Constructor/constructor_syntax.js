//1.Here A() is considered as method it is not considering as constructor
class A
{
    A()
    {
        console.log("from constructor");
    }
    fun()
    {
        console.log("from method");
    }
}
console.log(new A());

//2.constructor keyword is used to create a constructor
class C
{
    constructor()
    {
        console.log("from constructor");
    }
    fun()
    {
        console.log("from function");
    }
}
new C();

//3.Passing parameter is optional while creating object
class D
{
    constructor()
    {
        console.log("From D constructor");
    }
    fund()
    {
        console.log("from fund");
    }
}
new D(12).fund();

/*conclusion : Compile wont provide super() stmt when user is creating useddefined constructor*/

