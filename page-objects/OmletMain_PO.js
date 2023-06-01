import Base_PO from './Base_PO';

class OmletMain_PO extends Base_PO {
  open() {
    super.open('https://omlet.gg/');
  }

  get loginSignUpButton() {
    return $('.omlet-bar-login-button');
  }

  get userName() {
    return $('.user-name');
  }

  get menuLogout() {
    return $('#menu_logout');
  }

  get loginButton() {
    return $('.buttonS');
  }

  get nextButton() {
    return $("[src='\/img\/oma_btn_signin_continue_normal\.png']");
  }

  get InputID() {
    return $('#omid');
  }

  get InputPW() {
    return $('#pass');
  }
}

module.exports = new OmletMain_PO();