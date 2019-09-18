//1.here super() is identified by the compiler.but,not expected here
/*class A
{
    constructor()
    {
        super();
        console.log("constructor");
    }
    fun()
    {
        console.log("from function");
    }
}*/

//2.super() using in the last in constructor
class A
{
    constructor()
    {
        console.log("constructor");
        super();
    }
    fun()
    {
        console.log("from function");
    }
}
/*Conclusion: 1. super() can be used anywhere within constructor*/