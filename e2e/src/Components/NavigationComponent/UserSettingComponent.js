import {By, until} from 'selenium-webdriver';

/**
 * Class covers user menu navigation
 */
export default class UserSettingComponent {
    constructor(driver) {
        this.driver = driver;
    }
    
    async clickUserDropDown() {
        await this.driver.findElement(By.css(SELECTORS.userNavBar)).click();
        await this.waitForUserMenu();
    }
    
    async waitForUserMenu() {
        const userNavBar = await this.driver.findElement(By.css(SELECTORS.userMenu));
        await this.driver.wait(until.elementIsVisible(userNavBar), 5000);
    }

    async logoutUser() {
        await this.driver.findElement(By.css(SELECTORS.logout)).click();
    }
}

const SELECTORS = {
    userNavBar: 'li[class="navbar-usersetting"]',
    userMenu: 'ul[class^="navbar-usersetting-dropdown-menu"]',
    logout: 'a[id="pikto-menu-logout-btn"]',
    
}