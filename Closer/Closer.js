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

//6.scenario
/*
function fun() {
    (function fun1() {
        console.log('hi');// hi
    })();
}
fun();
 */

//7.scenario
/*
function fun() {
    (function () {
        console.log('Hello');
    })();fun1();//fun1 is not defined
}
fun();
 */


/*
//8.scenario
function fun1() {
    function fun2() {
        console.log('hi');
    }
    return fun2();
}
console.log(fun1());
//hi
// undefined
 */

/*
//9.scenario
function fun() {
    function fun1() {
        console.log('Hi');
    }return fun1;
}
console.log(fun());// [Function:fun1]
 */

/*
//10.scenario
function fun() {
    function fun1() {
        console.log('hi');
    }
    return fun1;
}
var z=fun();
console.log(z());
//hi
// undefined
//Here fun1 is returning [Function: fun1], so fun() is having [Function :fun] in z in we are
//calling z(), So again it is calling fun1 and printing the out put.
 */

/*
//11.scenario
function fun() {
    function fun1() {
        console.log('hi');
    }
    return fun1;
}
fun()();
//hi-as fun() is holding [Function: fun1] so second parenthesis calling the fun1;
 */

/*
//11.scenario
function fun() {
    (function () {
        console.log('hi');
    })();
    return fun1;
}
console.log(fun()());
//hi
//error- fun1 is not defined.
 */

/*
//12.scenario
function fun() {
    return (function fun1() {
        console.log('hi');
        return fun1;
    })();
}
console.log(fun()());
//hi
//hi
//[Function: fun1]
 */
