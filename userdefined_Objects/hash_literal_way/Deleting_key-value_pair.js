//1.Deleting key-value pair in an object
var x=
    {
        k1:"hi",
        k2:12,
        k3:'c',
        k4:true,
    };
console.log(x);
delete x.k1;
console.log(x);
console.log(x.k1);

/*We cannot delete an object by delete x;
* or 'use strict'delete x; becos we are trying to delete memory location*/