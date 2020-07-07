const { config } = require("chai");

describe("Test contact us page on webdriveruniversity", () => {
    beforeEach(function() {
      browser.url('http://10.21.12.131:3000/customer')
      browser.setWindowSize(1800, 1200);
    });
    it('should have the right title', async () => {
       // await ContactUs_PO.open();
        await expect(browser).toHaveTitle('PMO');
    })
});