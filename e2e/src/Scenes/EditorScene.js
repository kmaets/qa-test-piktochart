import {By, until} from 'selenium-webdriver';

/**
 * Class covers editor elements
 */
export default class EditorScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Wait for editor to load
     */
    async waitForEditor() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.editorWrapper)), 5000);
        const editor = await this.driver.findElement(By.css(SELECTORS.editorWrapper));
        await this.driver.wait(until.elementIsVisible(editor), 5000);
    }

    /**
     * Waits for preview to load
     */
    async waitForPreview() {
        await this.driver.wait(until.elementLocated(By.css(SELECTORS.editorPreviewWrapper)), 5000);
        const editorPreview = await this.driver.findElement(By.css(SELECTORS.editorPreviewWrapper));
        await this.driver.wait(until.elementIsVisible(editorPreview), 5000);
    }
}

const SELECTORS = {
    editorWrapper: 'div[class="editor-pikto-wrapper"]',
    editorPreviewWrapper: 'div[class$="editor-preview-mode"]',
}