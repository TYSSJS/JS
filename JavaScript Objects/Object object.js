/*Object() is built in constructor which is used to create object. Object can take any time of values function, array
* string, number.
* As the Object is built in object so we cannot re-initialise it doesn't take formal arguments.
* we can declare Object in three ways.  */

//1.First way of declaring a object.
/*
var obj=new Object();
console.log(obj);
obj.x=90;
obj.y='Hey';
obj.z=true;
console.log(obj);

 */
/*---------------------------------CREATING OWN CONSTRUCTOR/TEMPLATE FORMAT----------------------------------------*/
/*
2. To over come the demerits of the built-in object we go for own constructor / template format
   second way of declaring object
   function in this case can be said as template.
 */
/*function fun(name,age)
{
    this.name=name;
    this.age=age;
    //this.number=876543219;
    //if we are directly hard coding the arguments then it will be displayed in each and every object that
    //we have create or already has, it will be common for all the objects.
}
 */
/*
3.
var obj=new fun('Mohan',29);
console.log(obj);//fun { name: 'Mohan', age: 29 }
obj.number=987654321;// we can add any new arguments directly like this but it will done for the particular object.
console.log(obj);//fun { name: 'Mohan', age: 29, number: 987654321 }
 */
/*
var obj=new fun('mohan',29);
var obj1=new fun('hero',26);
console.log(obj);//fun { name: 'mohan', age: 29, number: 876543219 }
// number is contained by every object that we have.
console.log(obj1);//fun { name: 'hero', age: 26, number: 876543219 }
 */

/*
  4. So, the object reference name cannot be a numerical value or it cannot start with numerical value it can
     be alpha numerical. Declaration of object of this type is similar to the 1st way of declaration.
 */
/*
var obj=new Object();
obj['0']='def';
obj[1]='abc';
obj[3]=123;
console.log(obj);// { '0': 'def', '1': 'abc', '3': 123 }
 */
/*
var obj=new Object();
obj[name]='mohan';//ReferenceError: name is not defined
console.log(obj);
//We can achieve everything by this way of declaration but it is not the good practice. As we cannot differentiate
//between the array and Object.
 */

/*-------------------------------------------------PROTOTYPE-------------------------------------------------------*/
/*5. Prototype is the concept by which we can add new argument in the object which will be taken by all the object
     By prototype we can achieve privatisation as it is not visible directly in the object.
     To make the use of the prototype argument we need key to access it.
 */
/*
function fun(name,age)
{
    this.n=name;
    this.a=age;
}
var obj=new fun('avind',26);
var obj1=new fun('mohan',29);
console.log(obj);//fun { n: 'avind', a: 26 }
console.log(obj1);//fun { n: 'mohan', a: 29 }
fun.prototype.number=987654321;
console.log(obj);
console.log(obj1);
// number is not visible in the object but it is contained by each and every Object.
// to make it visible we will invoke it by the key number.
console.log(obj.number);//987654321
console.log(obj1.number);//987654321
 */

/*----------------------------------------------HASH LITERAL WAY---------------------------------------------------*/
/*
 6. This is the third way to declare object which is very much similar to the 1st declaration of the object.
    We cannot use prototype concept in it. If the keys are same in this format that it will override the keys.
    The Standard way for declaring the keys in JavaScript is to not to use double or single quotes. As
    JSON keys are generally written in double quotes.
 */
   var x={
    A:'hey',
    B:'hello',
    C:'sup'
    }
console.log(x);
