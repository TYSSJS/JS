//1.To check duplicate function is allowed or not - it is allowed
class A
{
    fun()
    {
        console.log("hi");
    }
    fun()
    {
        console.log("good");
    }
}
//2.with creating object
class B
{
    fun()
    {
        console.log("hi");
    }
    fun()
    {
        console.log("good");
    }
}
new B().fun();