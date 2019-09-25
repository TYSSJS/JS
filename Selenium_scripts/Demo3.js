//Enter the data to input box and appending

describe('Something-1',function() {

    it('Something-3', function () {
        browser.url("http:\\www.google.co.in");
         browser.pause(5000);
         browser.element("//input[@name='q']").setValue("JavaScript");
        browser.pause(5000);
        browser.element("//input[@name='q']").addValue("JAVA");
        browser.pause(5000);



    });

});
