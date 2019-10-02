import {By, until} from 'selenium-webdriver';

/**
 * Class covers dashboard elements
 */
export default class DashboardScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Waits for dashboard to load
     */
    async waitForDashboard() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.dashboard)), 10000);
    }
}

const SELECTORS = {
    dashboard: 'div[id="pikto-dashboard"]'
}