import {By} from 'selenium-webdriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class covers some login form elements
 */
export default class LoginScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Types user email in login form
     */
    async typeInEmail() {
        await this.driver.findElement(By.css(SELECTORS.emailInput)).sendKeys(TEST_PARAMETERS.LOGIN_USER_EMAIL);
    }

    /**
     * Types user password in login form
     */
    async typeInPassword() {
        await this.driver.findElement(By.css(SELECTORS.passwordInput)).sendKeys(TEST_PARAMETERS.LOGIN_USER_PASSWORD);
    }

    /**
     * Clicks submit login form
     */
    async clickSignIn() {
        await this.driver.findElement(By.css(SELECTORS.signIn)).click();
    }
}

const SELECTORS = {
    emailInput: 'input[id="user_email"]',
    passwordInput: 'input[id="user_password"]',
    signIn: 'input[id="km_user_login"]'
}