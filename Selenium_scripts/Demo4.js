//Work with Multiple scripts using it

describe('Something-1',function() {
    console.log("S-1");
    it('Something-2', function () {
        console.log("S-2");

    });

    it('Something-3', function () {
        console.log("S-3");
        browser.url("http:\\www.gmail.com")
        });
    console.log("S-5");
});