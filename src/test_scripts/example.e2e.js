import AuthFlow from '../test_flow/AuthFlow';
import User from '../entities/User';

const userTest = new User('khiemltv@gmail.com', 'khiemluc2903')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        const Auth = new AuthFlow(userTest.email, userTest.password)
        Auth
            .openLoginPage()
            .doLogin()
            .verifyNavigateToNotificationPage()
    });
});


