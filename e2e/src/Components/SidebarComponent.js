import {By, until} from 'selenium-webdriver';

/**
 * Class covers some sidebar elements
 */
export default class SidebarComponent {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Waits for sidebar
     */
    async waitForSidebar() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.sidebar)), 10000);
    }

    /**
     * Clicks choosen sidebar element
     */
    async clickSidebarElement(element) {
        await this.waitForSidebar();
        const sidebar = await this.driver.findElement(By.css(SELECTORS.sidebar));
        
        switch (element) {
            case 'Dashboard':
                await sidebar.findElement(By.css(SELECTORS.dashboard)).click();
                break;
            case 'Infographic':
                await sidebar.findElement(By.css(SELECTORS.infographic)).click();
                break;
            case 'Presentation':
                await sidebar.findElement(By.css(SELECTORS.presentation)).click();
                break;
        }
    }
}

const SELECTORS = {
    sidebar: 'div[id="sidebar"]',
    dashboard: 'a[id="sidebar-dashboard-tt"]',
    infographic: 'a[id="sidebar-infog-tt"]',
    presentation: 'a[id="sidebar-presentation-tt"]',
}