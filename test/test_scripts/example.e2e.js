import AuthFlow from '../test_flow/AuthFlow';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        const Auth = new AuthFlow('khiemltv@gmail.com', 'khiemluc2903')
        Auth
            .openLoginPage()
            .doLogin()
            .verifyNavigateToNotificationPage()
    });
});


