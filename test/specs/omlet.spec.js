const OmletMain_PO = require('../../page-objects/OmletMain_PO');

describe('Login function test', function () {
  beforeEach(() => {
    OmletMain_PO.open();
    this.timeout(20000);
  });

  it('should login successfully with correct id and password', () => {
    // login/register page
    OmletMain_PO.loginSignUpButton.click();
    OmletMain_PO.loginButton.waitForDisplayed(5000);

    // login page
    OmletMain_PO.loginButton.click();
    OmletMain_PO.nextButton.waitForDisplayed(5000);

    // input id/pwd
    OmletMain_PO.InputID.setValue('funoffline');
    OmletMain_PO.InputPW.setValue('offlinetest');
    OmletMain_PO.nextButton.click();
    browser.pause(10000);
  });

  it('should logout successfully', () => {
    // back to main page
    OmletMain_PO.userName.waitForDisplayed(10000);
    OmletMain_PO.userName.click();
    OmletMain_PO.menuLogout.waitForDisplayed(3000);
    OmletMain_PO.menuLogout.click();
    OmletMain_PO.loginSignUpButton.waitForDisplayed(5000);
    const title = browser.getTitle();
    expect(title).to.equal('Omlet Arcade');
  });
});

describe('Take screenshot test', () => {
  it('should take and save screenshot of profile page', () => {
    browser.url('https://omlet.gg/profile/sassygaming');
    const infoText = $('.subtitle');
    infoText.waitForDisplayed(10000);
    browser.saveScreenshot('./sassygaming-profile.png');
  });
});