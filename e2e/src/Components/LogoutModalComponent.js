import {By, until} from 'selenium-webdriver';

/**
 * Class covers logout modal elements
 */
export default class LogoutModalComponent {
    constructor(driver) {
        this.driver = driver;
    }

    async confirmLogout() {
        await this.waitLogoutModal();
        await this.driver.findElement(By.css(SELECTORS.logoutModal)).findElement(By.css(SELECTORS.okButton)).click();
    }

    async waitLogoutModal() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.logoutModal)), 5000);
        const modal = await this.driver.findElement(By.css(SELECTORS.logoutModal));
        await this.driver.wait(until.elementIsVisible(modal), 5000);
    }
}

const SELECTORS = {
    logoutModal: 'div[class="modal fade show d-block"] div[class="modal-content"]',
    okButton: 'footer[class="modal-footer"] button:last-child',
}