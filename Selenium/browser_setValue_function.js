//setValue function lets us to send the value to the webelement
//It clears the textbox and then sends the value to the  webelement textbox
describe('Module 1',function(){

    it('Script 1', function(){
        browser.url('http://www.google.com');
        browser.pause(10000);
        browser.element("//input[@name ='q']").setValue("JavaScript");
        browser.pause(3000);

    });
});