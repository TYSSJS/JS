//it will pause the browser for 5 seconds before automatically closed
describe('Module 1',function () {
    console.log("Hi");
    it('Script-1', function () {
        browser.url("http://google.com");
        browser.pause(5000);
    });
});