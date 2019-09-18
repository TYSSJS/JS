//1.extends without creating object
class D
{
    constructor()
    {
        console.log("constructor - 1");
    }
    fun()
    {
        console.log("from fun");
    }
}
class C extends D
{
    constructor()
    {
       console.log("constructor -2");
    }
    fun1()
    {
        console.log("from fun1");
    }

}
//2.super() and extends
class Z
{
    constructor()
    {
        console.log("from Z");
    }
}
class X extends Z
{
    constructor()
    {

       console.log("from X");
        super();
    }

}
new X();
//3.extends with creating object
/*class B
{
    constructor()
    {
        console.log("constructor - 1");
    }
    fun()
    {
        console.log("from fun");
    }
}
class A extends B
{
    constructor()
    {
        console.log("constructor -2");
    }
    fun1()
    {
        console.log("from fun1");
    }

}
new A();*/