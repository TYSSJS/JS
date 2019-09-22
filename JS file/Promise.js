/*var x=new Promise(function(resolve,reject)
{
resolve('Success')

});
"C:\Program Files\nodejs\node.exe" C:\Users\saritha\Desktop\Webstorm\JS\Promise.js

Process finished with exit code 0
*/
/*
var x=new Promise(function(resolve,reject)
{
    reject('Failure')

});
"C:\Program Files\nodejs\node.exe" C:\Users\saritha\Desktop\Webstorm\JS\Promise.js
(node:8928) UnhandledPromiseRejectionWarning: Failure
(node:8928) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:8928) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

    Process finished with exit code 0

*/

var x=new Promise(function(resolve,reject)
{


});

console.log(x)
