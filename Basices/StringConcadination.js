console.log(1+true);
console.log(1+false);
console.log(2+undefined);
console.log(3+null);
console.log(4+NaN);
console.log(5+'true');
console.log("hi"+"bye");
console.log(2+[2,5,7,9,5]);
console.log(6+{b:10,c:"hi"});
console.log("hmmmm"+{b:10,c:"hi"});
console.log("praveen"+[2,5,7,9,5]);
console.log(true+"ok");
console.log(true+false);
console.log(true+false+null);
console.log(true+[2,5,6,7]);
console.log(null+[10,20]);
console.log(undefined+[10]);
console.log(true+{c:202});
console.log({c:20}+{b:20});
console.log([20,50]+{b:50})
console.log([20,30]+[10,50]);
function fun() {
    console.log("tata")
    return 20;
}
function fun1()
{
    return 30;
}
console.log(fun()+20);
console.log(fun+20);
console.log(fun()+"hi");
console.log(fun+"hi");
console.log(fun()+[10,0])
console.log(fun()+true)
console.log(fun()+{m:20})
console.log(fun()+fun1())

