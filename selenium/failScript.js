//script will be failed because we are passing console statement inside it function
describe('Module 1',function () {
    console.log("Hi");
    it('Script-1', function () {
        console.log("Hi");
    });
});