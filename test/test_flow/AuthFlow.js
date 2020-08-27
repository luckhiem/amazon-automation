import LoginPage from '../pages/login.po';
import ElementHandler from '../common/ElementHandler';

const btnLoginNav = '#nav-link-accountList';

export default class Auth {
    constructor(email, password) {
        this._username = email;
        this._password = password;
    }

    openLoginPage() {
        browser.url(`https://www.amazon.com/`)
        ElementHandler.click(btnLoginNav);

        return this
    }

    doLogin() {
        LoginPage
            .inputEmail(this._username)
            .clickOnBtnContinue()
            .inputPassword(this._password)
            .clickOnBtnSignIn()

        return this
    }
}

