/*Closer is concept which tells that the inner function can access the properties to its own
* scope, outer scope and global scope and to achieve this the functions should be in nested way.*/

/*
//1.scenario
function fun() {
    console.log('JS');
    function fun1() {
        console.log('hello');
    }
}
fun();

 */
/*
//2.scenario
function fun() {
    console.log('JS');
    function fun1() {
        console.log('hello');
    }
}
fun()();//TypeError: fun(...) is not a function
// so in case their are multiple function inside a function then we will not come to know about that which function we
are calling.
 */


/*
//3.scenario
function fun() {
    console.log('JS');
    function fun1() {
        console.log('hello');
    }
}
fun1();//ReferenceError: fun1 is not defined
 */

/*
//4.scenario
function fun() {
    console.log('JS');
    function fun1() {
        console.log('hello');
    }
}
fun();
fun1();//ReferenceError: fun1 is not defined
 */

/*
//5.scenario
function fun() {
    console.log('JS'); //JS
    function fun1() {
        console.log('hello');//Hello
    }
    fun1();
}
fun();
 */