import LoginPage from '../pages/login.po';
import ElementHandler from '../common/ElementHandler';

const btnLoginNav = '#nav-link-accountList';
const TEXT_LOCATOR = '.transaction-approval-word-break'

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

    verifyNavigateToNotificationPage(){
        const text = "To complete the sign-in, approve the notification sent to:";
        ElementHandler.verifyText(TEXT_LOCATOR, text)
    }
}

