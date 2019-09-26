//setValue will set the value in the search bar what we are passing
describe('Module 1',function () {
    console.log("Hi");
    it('Script 1', function () {
        console.log("script-1")
    });
    it('Script-1', function () {
        browser.url("http://google.com");
        browser.pause(3000);
        browser.element("//input[@name='q']").setValue("JavaScript");
    });
});