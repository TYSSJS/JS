/*class A
{
    fun()
    {
        console.log("Hi");

    }

}
console.log(typeof(new A()))
*/
/*
class A
{
    constructor()
    {
        console.log("constructor-A")

    }

    fun1()
    {
        var x=12;
        console.log("Hi");
    }
}

class B extends A
{
    constructor()
    {
        super();
        console.log("constructor-B")

    }

    fun1()
    {
        var x=12;
        console.log("Hi");
    }
}


console.log(new A().fun1());

constructor-A
Hi
undefined

*/
/*
class A
{
    constructor()
    {
        console.log("constructor-A")

    }

    fun1()
    {
        var x=12;
        console.log("Hi");
    }
}

class B extends A
{
    constructor()
    {
        super();
        console.log("constructor-B")

    }

    fun1()
    {
        var x=12;
        console.log("Hi");
    }
}

console.log(new B().fun1());

constructor-A
constructor-B
Hi
undefined

*/
/*
class A
{
    constructor()
    {
        console.log("constructor-A")

    }

    fun1()
    {
        var x=12;
        console.log("Hi");
    }
}
/*
class B extends A
{
    constructor()
    {
        console.log("constructor-B")
        super();

    }

    fun1()
    {
        var x=12;
        console.log("Hi");
    }
}

console.log(new B().fun1());

constructor-B
constructor-A
Hi
undefined
*/


