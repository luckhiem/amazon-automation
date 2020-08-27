import LoginPage from '../pages/login.po';
import ElementHandler from '../common/ElementHandler';
import BrowserHandler from '../common/BrowserHandler';
import Config from '../EnvConfig'

const BTN_LOGIN_NAV = '#nav-link-accountList';
const TEXT_LOCATOR = '.transaction-approval-word-break';
const ALERT_TITLE_LOCATOR = "#auth-error-message-box .a-alert-heading";
const ALERT_CONTENT_LOCATOR = "#auth-error-message-box .a-list-item";

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
            .inputEmail(this._email)
            .clickOnBtnContinue()
            .inputPassword(this._password)
            .clickOnBtnSignIn()

        return this
    }

    verifyNavigateToNotificationPage(){
        const NOTIFICATION_SENT_VALUE = "To complete the sign-in, approve the notification sent to:";
        ElementHandler.verifyText(TEXT_LOCATOR, NOTIFICATION_SENT_VALUE)
    }

    verifyAlertWhenInputInvalidPassword(){
        const ALERT_TITLE_VALUE = "There was a problem";
        const ALERT_CONTENT_VALUE = "Your password is incorrect";
        ElementHandler.verifyText(ALERT_TITLE_LOCATOR, ALERT_TITLE_VALUE);
        ElementHandler.verifyText(ALERT_CONTENT_LOCATOR, ALERT_CONTENT_VALUE);
    }
}

