describe ("Method",function () {
    //7-----addvalue Method doing concadination or append along with setValue Method
    it("Add-value-Method",function () {
        browser.element("//input[@name='q']" ).setValue("Selenium");
        browser.element("//input[@name='q']" ).addValue("Python");
    });

});