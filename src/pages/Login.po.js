import ElementHandler from '../common/ElementHandler';

const emailTXB = '#ap_email';
const passwordTXB = '#ap_password';
const btnContinue = '#continue';
const btnSignIn = '#auth-signin-button';

class LoginPage {
    /**
     * @param {string} email    email //email of person registered
     */
    inputEmail(email) {
        ElementHandler.setValue(emailTXB, email);
        return this;
    }

    clickOnBtnContinue() {
        ElementHandler.click(btnContinue);
        return this;
    }

    /**
     * @param {string} password    password //password of person registered
     */
    inputPassword(password) {
        ElementHandler.setValue(passwordTXB, password);
        return this;
    }

    clickOnBtnSignIn() {
        ElementHandler.click(btnSignIn);
        return this;
    }
}

export default new LoginPage();
