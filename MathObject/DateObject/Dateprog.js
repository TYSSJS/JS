//Assignment on Date function program

var dt=new Date();
console.log(dt.getDate());// for sunday value starts from 0
console.log(dt.getDay());
console.log(dt.getFullYear());
console.log(dt.getMonth());//for month its 0-11
console.log(dt.toDateString())//returns string value of todays date
console.log((dt.toString()))//returns string values of date and time
console.log((dt.getHours()))
console.log(dt.toLocaleString())//returns date and time
console.log(dt.toTimeString())//returns time