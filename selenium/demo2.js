describe('Module 1',function () {
    console.log("Hi");
    it('Script 1', function () {
        console.log("script-1")
    });
    it('Script-1', function () {
        browser.url("http://google.com");
        browser.pause(3000);
        browser.element("//input[@name='q']").setValue("JavaScript");
        browser.pause(3000);
        browser.element("//input[@name='q']").addValue(" Baba");
        browser.pause(3000);
    });
});