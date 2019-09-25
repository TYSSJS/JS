/* describe ("Method",function () {
   it("First-1",function () {
        console.log("Welcome to Mocha");
        browser.url("https://www.google.in");
        browser.pause(3000);
       // browser.element(by.xpath("").setValue("")); other framework it will work except mocha
/!*-----------------X--Path------------------------------*!/
        //setValue Method--clear the value and set the value--
        browser.element("//input[@name='q']" ).setValue("Java");// java they are using sendKey Method and findElement
        browser.pause(3000);
        browser.element("//input[@name='q']" ).setValue("JavaScript");
        //only appending also possible using addmethod
        browser.element("//input[@name='q']" ).addValue("Python");
        //clear and click method
        browser.clearElement("//input[@name='q']" );
        browser.element("//input[@name='q']" ).addValue("Python");

        browser.pause(3000);
    });*/



//Describe have two Parameters (String, Function)---describe work like global
describe ("Method",function () {
//it--have two parameters (string, function)--it method work like a Script and inside the describe we have to keep multiple script
//1)---First Welcome the Mocha
    it("First-1",function () {
        console.log("Welcome to Mocha");
    });
 //2)--We need the reference Keyword in browser and Enter the Url
    it("Enter-Url",function () {
        browser.url("https://www.google.in");
    });
    //3--Its waiting Sometime based on client requirements---mocha options we have to set timeout
    it("Pause-Method",function () {
        browser.pause(3000);
    });
    /*--4--Locator that lets you use HTML code to find the element where its Locating based on id ,class,name,
    CssSelector,XPath className,LinkText,partiallyLinkText
     */
    it("Element-Method",function () {
             browser.element("//input[@name='q']" );
    });
    //5--setValue Method--First clear the value and set the value based on sequence
    it("Set-Value_Method",function () {
        browser.element("//input[@name='q']" ).setValue("Java");
    });
    //6---This Block works based on same like Clear Method
    it("Set-ValuewithEmpty",function () {
        browser.element("//input[@name='q']" ).setValue("");
    });
    //7-----addvalue Method doing concadination or append along with setValue Method
    it("Add-value-Method",function () {
        browser.element("//input[@name='q']" ).setValue("Selenium");
        browser.element("//input[@name='q']" ).addValue("Python");
    });
    //8---This Method Clear All the values
    it("ClearElement-Method",function () {
        browser.clearElement("//input[@name='q']" );
        browser.element("//input[@name='q']" ).addValue("Python");
    });

});