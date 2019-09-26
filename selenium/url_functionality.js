//it will take the system to the particular url whatever we are mentioning in the function i.e "browser.url(url)
describe('Module 1',function () {
    console.log("Hi");
    it('Script-1', function () {
        browser.url("http://google.com");
        browser.pause(3000);
    });
});