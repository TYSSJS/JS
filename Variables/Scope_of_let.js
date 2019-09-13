/*//1.To check let is local scope in for-loop
for(let x=1;x<=2;x++)
{
  console.log(x);
}
console.log(x); //Error:x is not defined*/

for(let x=1;x<=2;x++)
{
    let z=5;
    console.log(x);
}
console.log(z); //Error: z is not defined

/*for (let x=1;x<=2;x++)
{
    console.log(x);
}
console.log(z); //Error:z is not defined*/
