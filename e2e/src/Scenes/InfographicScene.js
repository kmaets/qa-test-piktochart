import {By, until} from 'selenium-webdriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class covers some infographic elements
 */
export default class InfographicScene {
    constructor(driver) {
        this.driver = driver;
    }
 
    async searchTemplate() {
        await this.waitForSearch();
        const searchInput = await this.driver.findElement(By.css(SELECTORS.searchInput))
        await searchInput.sendKeys(TEST_PARAMETERS.INFOGRAPHIC_TEMPLATE);
        await this.driver.findElement(By.css(SELECTORS.foundElement)).click();
    }
    
    async selectThumbnail(item) {
        await this.waitForThumbnails();
        const thumbnailItem = await this.driver.findElements(By.css(SELECTORS.thumbnailItem));
        const actions = this.driver.actions();
        await actions.move({origin: thumbnailItem[item]}).perform();
        await this.driver.sleep(500);
    }
    
    // 'Use Template' or 'Prview' button
    async clickThumbnailButton(button) {
        await this.waitForThumbnailButtons();
        await this.driver.findElement(By.linkText(button)).click();
    }
    
    async waitForSearch() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.searchBar)), 5000);
        const search = await this.driver.findElement(By.css(SELECTORS.searchBar));
        await this.driver.wait(until.elementIsVisible(search), 5000);
    }

    async waitForThumbnails() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.thumbnails)), 5000);
        const thumbnails = await this.driver.findElement(By.css(SELECTORS.thumbnails));
        await this.driver.wait(until.elementIsVisible(thumbnails), 5000);
    }

    async waitForThumbnailButtons() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.thumbnailButtons)), 5000);
    }
}

const SELECTORS = {
    searchBar: 'div[class="dashboard-search-bar"]',
    searchInput: 'div[class="dashboard-search-bar"] > div',
    foundElement: 'li[class="multiselect__element"]',
    thumbnails: 'div[class^="dashboard-thumbnail-view"]',
    thumbnailItem: 'ul[class*="thumbnail-list"] > li',
    thumbnailButtons: 'div[class="dashboard-onhover"]',
}