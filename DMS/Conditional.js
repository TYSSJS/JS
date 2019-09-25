/*---------------------------------------------CONDITIONAL--------------------------------------------------*/
/*Conditional are use of compare the two values and '=='will compare the content of the values.
* '===' this will compare the contents as well as type of the values.*/
/*
//1.Scenario
var x=12;
var y=13;
if (x=16)// it is re-initialising x and then it is returning boolean value as re-initialising is possible in var.
{
    console.log("hello");
}

 */

/*
//2.Scenario
if (12;) // syntax error- Unexpected token;
{
    console.log("running")
}

12;// accepted by compiler
 */

/*
//3.Scenario
if (12)// accepts because as the 12 number is defined that why compiler able to recognise.
{
    console.log("Running");
}

 */


/*
//4.Scenario
if (0)// it returns true because 0 is defined.
{
    console.log("Running");
}
 */

/*
//5.Scenario
if (-12)// accepts
{
    console.log("Running");
}
 */

/*
//6.Scenario
if ('hello')// accepts
{
    console.log("Running");
}
 */

/*
//7.Scenario
if ('0')//accepts
{
    console.log("Running");
}
 */

/*
//8.Scenario
if ('-0')// accepts
{
    console.log("Running");
}
 */

/*
//9.Scenario
if (0.5)// accepting but it returns true.
{
    console.log("Running");
}
 */

/*
//10.Scenario
if ("0")//accepting and returns true
{
    console.log("Running");
}
 */

