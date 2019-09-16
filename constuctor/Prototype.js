// calling prototype in object referance
// function fun(name,age)
// {
//     this.name=name;
//     this.age=age;
// }
// var e1=new fun("praveen",28);
// var e2=new fun("kumar",29);
// e1.prototype=20;//here it is not a prototype it act like a key in the "e1" object so it doesn't have any error
// console.log(e1);
// console.log(e2);

// function fun(name,age)
// {
//     this.name=name;
//     this.age=age;
// }
// var e1=new fun("praveen",28);
// var e2=new fun("kumar",29);
// fun.prototype.num=123;   //if we want accept the prototype we need to call the prototye by using function name
// console.log(e1);         //and it will present in the object but we try to print the object it wont show in the object
// console.log(e1.num);     //but we can call the key throw the object referance [for all the object we can call]
// console.log(e2);
// console.log(e2.num);

// function fun(name,age)
// {
//     this.name=name;
//     this.age=age;
// }
// var e1=new fun("praveen",28);//TypeError: Cannot set property 'number' of undefined
// e1.prototype.number=20;
// console.log(e1);

