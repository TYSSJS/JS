//1.To check var is global scope in- for() loop
for(var x=1;x<=2;x++)
{
    console.log(x);
}
console.log(x);

for(var x=1;x<=2;x++)
{
    var z=10;
    console.log(x);
}
console.log(z);

