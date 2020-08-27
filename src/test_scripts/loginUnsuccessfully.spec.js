import AuthFlow from '../test_flow/AuthFlow';
import User from '../entities/User';

const userTest = new User('khiemltv@gmail.com', 'invalid')

describe('My Login application', () => {
    it('should cannot login with invalid credentials', () => {
        const Auth = new AuthFlow(userTest.email, userTest.password)
        Auth
            .openLoginPage()
            .doLogin()
            .verifyAlertWhenInputInvalidPassword()
    });
});


