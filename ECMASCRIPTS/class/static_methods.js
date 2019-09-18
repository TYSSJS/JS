//1.static methods should be accessied by class name

class A
{
    static fun()
    {
        console.log("HI");
    }
}
console.log(A.fun());

//2.not allowed to use static method by using object reference
class B
{
    static fun()
    {
        console.log("from B");
    }
}
//console.log(new B().fun());
console.log(B.fun());

/*Conclusion :- 1.static methods should be accessed by class name
* cannot be accessed by reference variable*/