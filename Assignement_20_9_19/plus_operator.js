//1.number with all combination
var n =12;
console.log(n+12);
console.log(n+1.3);
console.log(n+(-3));
console.log(n+"rs");
console.log(n+'r');
console.log(n+"$");
console.log(n+",15rs");
console.log(n+true);
console.log(n+false);
console.log(n+'true');
console.log(n+'false');
console.log(n+null);
console.log(n+'null');
console.log(n+undefined); //NaN
console.log(typeof NaN);
console.log(n+function ()
{
    return;
})
console.log(n+[,10,"hi",null,undefined]);
console.log(n+{
    k1:"hi",
    k2:"23",
    k3:12,
}) //12[object Object]

//2.String with all combination
var s= "good moring";
console.log(s+true);
console.log(s+false);
console.log(s+"true");
console.log(s+"false");
console.log(s+null);
console.log(s+undefined);
console.log(s+function ()
{
    return 12;
});
console.log(s+[12,"hi",true]);
console.log(s+{
    k1:"hi",
    k2:"good",
}) //good moring[object Object]
console.log("**************");

//3.boolean with all combination
console.log(true+true);
console.log(false+false);
console.log(true+null);
console.log(false+null);
console.log(true+false);
console.log(true+undefined);//NaN
console.log(false+undefined);//NaN
console.log(true+function () {
    console.log("hi");
    return 12;
});

//4.null with other combination
console.log(null+null);
console.log(null+undefined);//NaN
console.log(null+function ()
{
    console.log("hi");
});
console.log(null+[12,"hi",null]);
console.log(null+{
    k1:"hi",
    k2:12,
})//null[object object]

//5.undefined with other combination
console.log(undefined+undefined); //NaN
console.log(undefined+function ()
{
    console.log("hi");
    return 10;
})
console.log(undefined+{
    k1:"hi",
    k2:12,
})

//6.function with other combination
console.log(function ()
{
    console.log("hi");
}+function ()
{
    console.log("good");
});
console.log(function () {
    console.log("hi")
}+[12,"hi",null]);
console.log(function()
{
    console.log("hi");
}+{
    k1:"hi",
    k2:12,
})

//7.array with combination
console.log(["hi",12,'n']+[18,"hi",'c']);
console.log([12,"hi",null]+{
    k1:12,
    k2:"hi",
    k3:'c',
})

//8.object with combination
console.log({
    k1:"12",
    k2:"hi",
    k3:12,

}+{
    k1:12,
    k2:"hi",
    k3:'c',
})