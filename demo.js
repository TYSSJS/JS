//console.log("hello")

describe('Module', function() {
    console.log("test1");
    it('Script name', function() {
        console.log("Welcome to Mocha framework");
        browser.url("https://www.google.co.in");
        browser.pause(5000);
        browser.element("//input[@name='q']").setValue("JavaScript");
        browser.pause(5000);
        browser.element("//input[@name='q']").addValue("Java");
        browser.pause(5000);
        //

    });
});

