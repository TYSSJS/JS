//1. the syntax of class
class A
{

}

//2.We cannot declare variable in class
/*class A
{
    var x;
}*/

//3. We can declare function within class without using function keyword
class B
{
    fun()
    {
        var x=12;
        console.log("hi");
    }
}
console.log(new B().fun());

/*conclusion:-1.we cannot declare variable in class
* 2.We can declare function within class without function keyword*/