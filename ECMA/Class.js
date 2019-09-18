/*-----------------------------------------------ECMA-------------------------------------------------------------*/
/*1. To have similarities like java
* 2. No need to mention any keyword for functions
* 3. No need to maintain any key values pair format.
*    that's why we move ECMA script.
* 4. Static function should be called by class name strictly
* 5. Non-static function should be called by the object.
* 6. The type of the class is function*/

/*
//1. Creating a class with non-static method.
class  A {
    fun()
    {
        var x=12;
        console.log('hi');
    }

}
console.log(new A().fun());
// Hi
// undefined
// So here the fun() function is non -static as we are calling the function by creating object of class A.
// new A(); is object we are creating.
 */

/*
//2. Declaring function with
class A {
    static fun(){
        console.log('hi');
    }
}
console.log(A.fun());
//hi
//undefined
// All the static function should be called by class name. We cannot call by non- static fun.
 */

/*
//3.Constructor
class A {
    constructor(){
        console.log('Constructor');
    }
}
new A();
//Constructor- so constructor are their in the class of EMCA script.
 */

/*
//4.Calling constructor by passing parameter.
class A {
    constructor(){
        console.log('Constructor');
    }
}
new A(12);
//Constructor- because parameters ar option in JavaScript
 */

/*
//5.Using super() without creating object of the class.
class A {
    constructor(){
        super();//SyntaxError: 'super' keyword unexpected here
        console.log('Constructor');
    }
}
// It is telling that super() is valid but it is unexpected in the constructor.
 */

/*
//6.Using super() by creating object of the class.
class A {
    constructor(){
        super();//SyntaxError: 'super' keyword unexpected here
        console.log('Constructor');
    }
}
new A();
// compiler is not providing super() for user defined constructor.
 */

/*
//7.Checking that inheritance is there or not.
class A {
    constructor(){
        console.log('Constructor-A')
    }
}
class B extends A{
    constructor(){
        console.log('Constructor-B')
    }
}
//empty console
 */

/*
//Using super() without creating class object.
class A {
    constructor(){
        console.log('Constructor-A')
    }
}
class B extends A{
    constructor(){
        super();
        console.log('Constructor-B')
    }
}
//empty console.- So it is valid because this time no error- super keyword is unexpected here.
 */



//8.Using super() by creating class object.
class A {
    constructor(){
        console.log('Constructor-A')
    }
}
class B extends A{
    constructor(){
        super();
        console.log('Constructor-B')
    }
}
new A();
// Constructor -A super() is calling the immediate parent class constructor.
/* To use super() two conditions should be mandatory
* 1.Whenever we are using user defined constructor at that time super() should their in that constructor
* 2.constructor of that class which is having super() that class should extend the super class or parent class.*/
