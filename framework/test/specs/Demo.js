//keeping 2-it inside describe
describe('module',function(){
    console.log("s-1");
    it('script-1',function () {
        console.log("Welcome to mocha");
    })
    it('script-2',function(){
        console.log("s-2");
    })
    console.log("s-4");

//entering url
    it('script-3',function () {
        browser.url("https://www.google.com/");
    })
    // using pause() to delay but it will not show in console about waiting time
    it('script-4',function()
    {
        browser.pause(9000);
    })
    //finding element by using element() and passing parameter as locator
   // and sending data by setValue()
    //setValue() wil clear the data first and give the data
    it('Script-5',function(){
        browser.element("//input[@name='q']").setValue("javascript");
    })
    // so, in command it will clear 2-times as we are doing operation on the same element and then it will pass the value
    it('Script-6',function(){
    // browser.pause(5000);
    browser.element("//input[@name='q']").setValue("java")
})
  // without clearing , pass the value in that element by using addValue()
    // addValue() will pass the data in the element without clearing means will append
    it("String-7",function () {
        browser.pause(5000);
        browser.element("//input[@name='q']").addValue("Selenium")
    })


    })


