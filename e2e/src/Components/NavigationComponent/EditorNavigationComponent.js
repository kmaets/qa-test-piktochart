import {By} from 'selenium-webdriver';

/**
 * Class covers editor navigation top bar
 */
export default class EditorNavigationComponent {
    constructor(driver) {
        this.driver = driver;
    }
    
    async enterTitle(title) {
        await this.driver.findElement(By.css(SELECTORS.titleInput)).click();
        await this.driver.findElement(By.css(SELECTORS.titleInput)).sendKeys(title);
    }
    
    async clickSaveButton() {
        await this.driver.findElement(By.css(SELECTORS.saveButton)).click();
        await this.waitForSaved();
    }

    async clickPreviewButton() {
        await this.driver.findElement(By.css(SELECTORS.previewEnterButton)).click();
    }

    async waitForSaved() {
        await this.driver.wait( () => {
            return this.driver.findElement(By.css(SELECTORS.saveButton)).getText().then( (title) => {
                return title.includes('Saved');
            });
        }, 5000);
    }
}

const SELECTORS = {
    previewEnterButton: 'button[id="editor-preview-enter"]',
    saveButton: 'button[data-action="save"]',
    titleInput: 'input[placeholder="Enter your title here"]',
}