
    //No-1-open browser enter url and sending values

    describe("module",function () { //descrive method of mocha

        // No.1 Open browser enter url

    it('script-1', function () {
        console.log("s-2")
        browser.url("https://www.google.com");
        browser.pause(5000);
    });

        // No.2 open browser enter url and sending values use Pause methods

        it('script-1', function () {
            console.log("s-2")
            browser.url("https://www.google.com");
            browser.pause(5000);
            browser.element("//input[@name='q']").setValue("javascript")
            browser.pause(5000);
            browser.element("//input[@name='q']").setValue("java")

        });

        // No.3 open browser enter url sending values and Append new values

        it('script-1', function () {
            console.log("s-2")
            browser.url("https://www.google.com");
            browser.pause(5000);
            browser.element("//input[@name='q']").setValue("javascript")
            browser.pause(5000);
            browser.element("//input[@name='q']").addValue("java")// APPEND NEW VALUE TO ELEMENT

        });

      // No-4  Using  Text() to locate the element

        it('script-1', function () {
            console.log("s-2")
            browser.url("https://www.google.com");
            browser.pause(5000);
            browser.element("//input[text()='search']")

        });

        // No-5  Using  Contains() to locate the element

        it('script-1', function () {
            console.log("s-2")
            browser.url("https://www.google.com");
            browser.pause(5000);
            browser.element("//a[contains(text(),'Active");

        });



    // No-6  Using  AND "or" to locate the element


        it('script-1', function () {
            console.log("s-2")
            browser.url("https://www.google.com");
            browser.pause(5000);
            browser.element("//input[@id='un1'AND @name='tb1]");

        });


        // No-7  Using  AND "or" to locate the element


        it('script-1', function () {
            console.log("s-2")
            browser.url("https://www.google.com");
            browser.pause(5000);
            browser.element("//a[@x='b']/input[@id='un1'AND @name='tb1]");

        });















