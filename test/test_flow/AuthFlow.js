import LoginPage from '../pages/login.po';
import ElementHandler from '../common/ElementHandler';
import BrowserHandler from '../common/BrowserHandler';
import Config from '../EnvConfig'

const BTN_LOGIN_NAV = '#nav-link-accountList';
const TEXT_LOCATOR = '.transaction-approval-word-break'

export default class Auth {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    openLoginPage() {
        BrowserHandler.navigate(Config.url)
        ElementHandler.click(BTN_LOGIN_NAV);

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

