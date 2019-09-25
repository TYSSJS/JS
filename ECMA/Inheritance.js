/*Inheritance is achievable or not */

/*
//1. By implementing only super class.
class B
{
    fun() {
        console.log('fun-1');//fun-1
    }
}
class A extends B{

}
new A().fun();
// From the above example we can say that inheritance is possible.
 */

/*
//2. By giving implementation to sub class with the same name.
class B{
    fun(){
        console.log('fun-1');
    }
}
class A extends B{
    fun() {
         console.log('fun-2');// fun-2
    }
}
new A().fun();

// form the above example we cannot confirm that inheritance is possible as whenever we are calling the
// fun() as it is giving the preference to the local class fun();
 */

/*
Method overriding is possible but we can not justify it as we can call the sub class method and it will give the
* implementation of sub class but we cannot up cast the class to super class as there is no concept of upcast.
* because we cannot assign the ref of object of class as to class b. As we are storing the objects in the
* var.*/

/*Method overloading is also possible but we cannot justify it as parameters are optional in javascript
* whenever we try to call the 1st method it will not give the implementation of the 1st method it will always
* calls the second method and gives the implementation of it because it overrides the function.
* While declaring the function it allocates the memory but again when we are declaring the function with same
* name it will point to the same memory that we have already declared. */
