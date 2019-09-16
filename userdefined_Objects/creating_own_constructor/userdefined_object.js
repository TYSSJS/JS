//1.Function behaves like a constructor-
function employee(name,salery)
{

}
var e = new employee();

//2.to find function is object or array
function employee(name,salery)
{

}
var e = new employee();
console.log(e);

//3.Assigning value during object creation
function employee(name,salery)
{

}
var e = new employee("anitha",30,000);
console.log(e);

//4.Holding value which has been assigned
function employee(name,salery)
{
    this.a=name;
}
var e1 = new employee("anitha",30000);
var e2 = new employee("soumya",15000);
console.log(e1);
console.log(e2);