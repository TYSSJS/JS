/*//1.variable without var,let,const declared globally
x=12;
console.log(x);*/

/*//2.first is see without decleration using it
console.log(x);
x=12;*/

/*3. if instruction is x=12; depends on previous line if it is declared
then it is initilized else it is bot decleration and initilization.*/

//4.to check within the function
function fun()
{
    x=12;
}
fun();
console.log(x);

