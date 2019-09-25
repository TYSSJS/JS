// var arr = [1,23,4,2];
// console.log(arr);
// function mysort(a,b)
// {
//     return a-b;
// }
// console.log(arr.sort(mysort())); //taking function as parameter
// console.log(arr);


// var arr = [1,23,4,2];
// console.log(arr);
// function mysort(a,b)
// {
//     return a-b;
// }
// console.log(arr.sort(mysort));
// console.log(arr);

// function f1()
// {
//     console.log("hi");
//     return 12;
// }
// function f2(a)
// {
//     console.log("hello");
//
// }
// console.log(f2(f1));

//Sorting Descending order

// var arr=[1,23,4,2];
// console.log(arr);
// function mysort(a,b)
// {
//     return b-a;
// }
// console.log(arr.sort(mysort));
// console.log(arr);

//Assignment: with empty sort,

// var arr=[1.23.4.2];
// console.log(arr);
//
//     console.log(arr.sort(function(a,b)
// {
//     return a-b;
// }));
// console.log(arr);

//optimised way of sorting of above code

//console.log([1,23,4,2].sort((a,b)=>(a-b)));

// var arr=[1,2,3,5,6];
// function myFilter(a)
// {
//     return a>2;
// }
// console.log(arr.filter(myFilter));
// arrr.log();


// var arr=[1,2,3,4,5];
// function myFilter(a,b,c,d)
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
// }
// arr.sort(myFilter);
// console.log(arr);


//Map:

// var arr=[1,2,3,5];
// function myMap(a)
// {
//     return a+3;
// }
// console.log(arr.map(myMap));
// console.log(arr);

//Constructor

//User

//creating the object of object of object
//we need an object to make segregation, for maintaninace

// var x=new Object();
// console.log(x);
// x.z=12;
// console.log(x);

// function fun(name,age)
// {
//     this.name=name;
//     this.navyaage=age;
//     //this.name=arguments[0];
// }
// var e1=new fun("abc",123);
// var e2=new fun("def",456);
// e1.number=4534665;
// e2.number=6586999;
// console.log(e1);
// console.log(e2);

//
// function fun(name,age)
// {
//     this.n=age;
//     this.a=age;
// }
//
// var e1=new fun(“A”,23);
// e1.number=43543565;
// console.log(e1.name);


// function fun(name,age)
// {
//     this.name=name;
//     this.navyaage=age;
//     //this.number=123;
// }
// var e1=new fun(234,123);
// var e2=new fun("def",456);
// e1.number=789
// console.log(e1);
// console.log(e2);

//arguments is global array which displays all types of data


// function fun(a,b)
// {
//     console.log(arguments[0]);
// }
// fun(12,34,45);
//
// //agrument is a object,
//
// function fun(a,b)
// {
//     console.log(arguments[0]);
// }
// fun(12,34,45);

// var obj=new Object();
// obj['0']=”def”;
// obj[1]=”abc”;
// console.log(obj);

// var e1=new fun("A", 23);
// var e2=new fun("B",45);
// e1.prototype="hfhfjhj";
// console.log(e1);
// console.log(e2);

// var e1=new fun("A",23);
// var e2=new fun("B",18);
// console.log(e1);
// console.log(e2);
// console.log(e1.number);
// e1.prototype.number="jfjhfj";
// console.log(e1);
// console.log(e2);
// console.log(e1.number);
// console.log(e1);
// console.log(e2);
// console.log(e1.number);


//only to push the data while creating object, we use prototype
//
// var x = {
//     k1:"v1",
//     k2:"v2",
//     k2:12
//         }
// console.log(x);

// function fun(a,b)
// {
//     x=12;
//     console.log(x);
// }
// fun();
// console.log(x);
// fun();



// Assignment: inside function let x=12, outside x=30; for above program


// x=30;
// function fun(a,b)
// {
//     let x=12;
//     console.log(x);
// }
// fun();
// console.log(x);
// fun();

//------------------Assignment----------------------------//
//
// console.log(x);
// var x=13;


// function fun()
// {
//     console.log(x);
//     var x=13;
// }
// fun();
// console.log(x);

// var x;
// console.log();
// x=12;
//
// console.log(fun());
// function fun()
// {
//     console.log('hiii');
// }




// function fun()
// {
//     console.log('hi);
// }
// fun();
// function fun()
// {
//     console.log("Hello");
// }
//
// console.log(x())
// var x = function fun()
// {
//     Console.log('JS');
// }

// var x=12;
// function x()
// {
//     console.log('hi');
// }
// console.log(x());


// var x;
// console.log(x());
// function x()
// {
//     console.log('hi');
// }



// console.log(x());
// function x()
// {
//     console.log('hi');
// }
// var x;


// function fun()
// {
//     Console.log('JS');
//     function fun1()
//     {
//         console.log('Hello')
//     }
// }
// fun();

// function fun()
// {
//     console.log('JS');
//     function fun1()
//     {
//         console.log('Hello')
//     }
// }
// fun();
// fun1();

// function fun()
// {
//     (function fun1() {
//         console.log('Hi');
//     };
//
// }
// fun();


// function fun1()
// {
//     function fun2()
//     {
//         console.log('hi')
//     }
//     return fun2;
// }
// console.log(fun1());
 //output: function expression of fun2

// function fun1()
// {
//     function fun2()
//     {
//         console.log('hi')
//         //return 12;
//     }
//     return fun2;
//     return 12;
// }
// var z = fun1();
// console.log(z());


// function fun1()
// {
//     function fun2()
//     {
//         console.log('hi');
//     }
//     return fun2;
// }
// fun1()();

// function fun1()
// {
//     (function fun2()
//     {
//         console.log('hi');
//     })();
//     return fun2;
// }
// console.log(fun1()());

//
// function fun1()
// {
//     return (function fun2()
//     {
//         console.log('hi');
//         return fun2;
//     })();
//
// }
// console.log(fun1());


// function fun1()
// {
//     return function fun2()
//     {
//         console.log('hi');
//         return 12;
//     };
//
// }
// console.log(fun1());


function fun()
{
    console.log('hi');
}
(10);








