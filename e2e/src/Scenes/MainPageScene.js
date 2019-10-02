import {By} from 'selenium-webdriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class covers some main page elements
 */
export default class MainPageScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Pass URL to open it in browser
     */
    async goToURL() {
        await this.driver.get(TEST_PARAMETERS.PIKTOCHART_URL);
    }

    /**
     * Click login to open form
     */
    async clickLogin() {
        await this.driver.findElement(By.css(SELECTORS.loginButton)).click();
    }

    /**
     * Click sing up to open form
     */
    async clickSignUp() {
        await this.driver.findElement(By.css(SELECTORS.signUpButton)).click();
    }
}

const SELECTORS = {
    loginButton: '[id="log_in-header"]',
    signUpButton: '[id="sign_up-header"]',
}