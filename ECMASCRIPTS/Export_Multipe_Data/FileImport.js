//1.only non_static methods can be imported by using reference of the variable
/*var x = require ("../Export_Multipe_Data/FileExport.js");
console.log(x.fun());
console.log(x.fun1());
console.log(x);*/

//2.All static & non-static methods can be imported
/*var x = require("../Export_Multipe_Data/FileExport.js");
console.log(x.fun());
console.log(new x().fun1());*/

//3.Only static methods can be imported
var x = require("../Export_Multipe_Data/FileExport.js");
console.log(x);