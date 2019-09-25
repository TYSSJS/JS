describe ("Method",function () {
    //8---This Method Clear All the values
    it("ClearElement-Method",function () {
        browser.clearElement("//input[@name='q']" );
        browser.element("//input[@name='q']" ).addValue("Python");
    });

});