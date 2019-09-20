//1.Export Object only non-static methods can be imported  - to export multiple data
/*class A {

    fun() {
        console.log("HI");
    }
    fun1(){
        console.log("Good");
    }
}
module.exports = new A();*/

//2.Export the class name - all static and non static functions can be imported
/*class A
{
    static fun()
    {
        console.log("from fun");
    }
    fun1()
    {
        console.log("from fun1");
    }
}
module.exports = A;*/

//3.Export in an array - only static con be exported
class A
{
    static fun()
    {
        console.log("hi");
    }
    fun1()
    {
        console.log("morning");
    }
    static fun2()
    {
        console.log("from fun-2");
    }

}
module.exports = [A.fun(),A.fun2()];