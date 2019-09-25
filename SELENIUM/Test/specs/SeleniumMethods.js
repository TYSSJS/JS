/*Reference browser is required inorder to do any action on the browser*/
describe('Methods',function()
{
    console.log("Welcome to Javascript");
    it('script-1',function() {
        console.log("welcome to mocha");
    });

    //1.to enter the url - url method is used
    it("Enter_URL",function() {
        browser.url("https://www.google.co.in");
    });

    // 2.pause()-hardcode wait -haulting the execution for 2sec
    it("pause_Method",function() {
        browser.pause(2000);
    });

    //browser.element(by.xpath("").setValue("");other framework it will work except mocha
    /*-----------------Xpath------------------*/
    //3.element() - is used to find the element
    it("element_Method",function() {
        browser.element("//input[@name=\"q\"]");
        browser.pause(2000);
    });

    //4.setValue() - it clear the value and set the value
    it("setValue_Method",function() {
        browser.element("//input[@name=\"q\"]").setValue("Javascript");
        browser.pause(2000);
        browser.element("//input[@name=\"q\"]").setValue("Java");
        browser.pause(2000);
    });

    //5.addValue() - it is used to append the value
    it("addValue_Method",function () {
        browser.element("//input[@name=\"q\"]").addValue("Javascript");
        browser.pause(2000);
    });

    //6.setValue() with empty - it clear the values
    it("setValue_Methodempty",function() {
        browser.element("//input[@name=\"q\"]").setValue("");
        browser.pause(2000);
        browser.element("//input[@name=\"q\"]").addValue("Javascript");
        browser.pause(2000);
    });

    //7.clearElement() - it is used to clear the element
    it("clearElement_Method",function() {
        browser.clearElement("//input[@name=\"q\"]");
        browser.pause(1000);
    });
});




//2.first execute describe then it will execute it
/*describe('something-1',function ()
{
    console.log("from describe");
    it("something-2",function ()
    {
        console.log("s-1");
    });
    console.log("stmt-2");
    it("something-3",function()
    {
        console.log("s-2");
    });
})*/