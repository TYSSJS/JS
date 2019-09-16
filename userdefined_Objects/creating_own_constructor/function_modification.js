//1.Adding additional details to each object
function employee(name,salery)
{
    this.n = name;
    this.s = salery;
}
var e1 = new employee("shruthi",40000);
var e2 = new employee("nirmala",20000);
e1.department = 'computerscience';
e1.id = 'SH2019';
e2.department = 'electronics';
e2.id = 'NIR2019';
console.log(e1);
console.log(e2);

//2.common value is given to all the object then within the function we can assign
function employee(name,salery)
{
    this.n  = name;
    this.s = salery;
    this.dept ="CSE";
}
var e1 = new employee("kalpitha",15000);
var e2 = new employee("anitha",20000);
console.log(e1);
console.log(e2);

//3.To check arguments is object/array
function fun(a,b)
{
    console.log(arguments);
}
fun(12,36,35);

//4.declaring key as number
var obj = new Object();
obj['0']="abc";
obj['1'] ="xyz";
obj[2] = 12;
console.log(obj);
/*obj['name']="value" can be used for alphanumeric but it is not standard becos it will create
* ambuiguity between object and array*/

//5.Assigning the value to the prototype
function students(name,age)
{
    this.n = name;
    this.a = age;
}
var s1 = new students("madhu",20);
var s2 = new students("shashi",35);
s1.prototype = 15;
s1.prototype = "abc";
console.log(s1);
console.log(s2);

//6.If function access is not given - Globally if we want to add the data to the function we go for prototype
function employee(name,salery)
{
    this.n  = name;
    this.s = salery;
    this.dept ="CSE";
}
var e1 = new employee("kalpitha",15000);
var e2 = new employee("anitha",20000);
employee.prototype.designation = "Assistant Professor";
var e3 = new employee("savitha",18000);
console.log(e1);
console.log(e2);
console.log(e3);
console.log(e1.designation);
console.log(e2.designation);
console.log(e3.designation);

/*Disadvantage of prototype -
* 1.Different value for different object is not possible by using prototype
* 2.If two function is defined for multiple function wee cant use prototype
* 3.e1.prototype.designation="abc"; will get error*/
