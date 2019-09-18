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
}
new A();
*/
//2.
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
new A();

/*Conclusion: 1. super() can be used anywhere within constructor
*/