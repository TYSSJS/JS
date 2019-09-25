//addValue function lets us to send the value to the webelement without clearing the textbox
//it generally appends the text already present in the webelement textbox
describe('Module 1',function(){
    it('Script 1', function(){
        browser.url('http://www.google.com');
        browser.pause(10000);
        browser.element("//input[@name ='q']").addValue("JAVA");
        browser.pause(3000);

    });
});