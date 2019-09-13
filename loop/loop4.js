//Declaration:using for loop with let
//1>using for loop with let and trying to re-initialize in different scope
for(let x=1;x<=2;x++)
{
    let z=10;
    console.log(x)
}

let z=30;
console.log(z)  //Re-declaration in let is possible in different scope.

console.log("================================")
//2>using for loop with let
for(let x=1;x<=2;x++)
{
    let z=10;
    console.log(x)
}