//1)own constuctor
// function fun(name,age)
// {
//      this.name=name;
//      this.age=age;
// }
// var e1=new fun("praveen",28);  //fun { name: 'praveen', age: 28 }
// var e2=new fun("kumar",29);     //fun { name: 'kumar', age: 29 }
// console.log(e1);
// console.log(e2);

// function fun(name,age)
// {
//     this.name=name;
//     this.age=age;
// }
// var e1=new fun("praveen",28);
// var e2=new fun("kumar",29);
// e1.num=12;
// e2.num=22;
// console.log(e1);
// console.log(e2);

// function fun(name,age)
// {
//     this.name=arguments[0];
//     this.age=arguments[1];
// }
// var e1=new fun("praveen",28);
// var e2=new fun("kumar",29);
// e1.num=12;
// e2.num=22;
// console.log(e1);
// console.log(e2);

// function fun(name,age)
// {
//     this.name=name;
//     this.age=age;
//     this.num=123;
// }
// var e1=new fun("praveen",28);
// var e2=new fun("kumar",29);
// console.log(e1);
// console.log(e2);

//And argument is not an array it is an object

// function fun(name,age)
// {
//     console.log(arguments)
// }
// fun("praveen",25)           //[Arguments] { '0': 'praveen', '1': 25 }
