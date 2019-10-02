/**
 * User already created an account in our application (piktochart.com).
 * After signing in, he/she goes to infographics and searches for an organization structure template.
 * Pick one from the search result list and edits the name in the structure.
 * When you are done, save the template and check how it looks like in presentation mode.
 * When work is done, user logs out.
 */

import chromedriver from 'chromedriver';
import {expect} from 'chai';
import {initializeDriver} from '../../initializeDriver';
import MainPageScene from '../Scenes/MainPageScene';
import LoginScene from '../Scenes/LoginScene';
import EditorScene from '../Scenes/EditorScene';
import InfographicScene from '../Scenes/InfographicScene';
import EditorNavigationComponent from '../Components/NavigationComponent/EditorNavigationComponent';
import LogoutModalComponent from '../Components/LogoutModalComponent';
import SidebarComponent from '../Components/SidebarComponent';
import UserSettingComponent from '../Components/NavigationComponent/UserSettingComponent';

describe('Test scenerio for https://piktochart.com', function () {
    this.timeout(60000);

    let driver;

    beforeEach(async () => {
        await chromedriver.start();
        driver = await initializeDriver();
        await driver.manage().window().maximize();
    });

    afterEach(async () => {
        await driver.quit();
        await chromedriver.stop();
    });

    it('Should login in to https://piktochart.com, choose template, rename it, save, open preview and logout', async () => {
        const mainPage = new MainPageScene(driver);
        const login = new LoginScene(driver);
        const editor = new EditorScene(driver);
        const infographic = new InfographicScene(driver);
        const editorNavigation = new EditorNavigationComponent(driver);
        const logoutModal = new LogoutModalComponent(driver);
        const sidebar = new SidebarComponent(driver);
        const userSetting = new UserSettingComponent(driver);

        await mainPage.goToURL();
        await mainPage.clickLogin();

        await login.typeInEmail();
        await login.typeInPassword();
        await login.clickSignIn();

        let pageTitle = await driver.getTitle();
        expect(pageTitle).to.contain('Dashboard');

        await sidebar.clickSidebarElement('Infographic');
        await infographic.searchTemplate();
        await infographic.selectThumbnail(2);
        await infographic.clickThumbnailButton('Use Template');

        const window = await driver.getAllWindowHandles();
        await driver.switchTo().window(window[1]);

        pageTitle = await driver.getTitle();
        expect(pageTitle).to.contain('Editor');
        
        await editor.waitForEditor();
        await editorNavigation.enterTitle('My title');
        await editorNavigation.clickSaveButton();
        await editorNavigation.clickPreviewButton();
        await editor.waitForPreview();

        await userSetting.clickUserDropDown(); 
        await userSetting.logoutUser();
        await logoutModal.confirmLogout();
    });
});
