//Pause function gives a delay to the browser
//It works in the same manner Thread.sleep works in Java
//This is a hardcoded wait
describe('Module 1',function(){
    it('Script 1', function(){
        browser.url('http://www.google.com');
        browser.pause(3000);

    });
});