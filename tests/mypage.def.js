
const { test, expect } = require('@playwright/test');
const { filenameWithTimestampCreator } = require('../tools/tools.js');


module.exports = function run_function(this_settings) {

    const screenshot = filenameWithTimestampCreator('./images/mypage/', this_settings.id);
    let context;
    let page;


    // Login
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext({
            recordVideo: { dir: 'videos/' }, // record videos for every run
            acceptDownloads: true
        });
        page = await context.newPage();
        await page.goto(this_settings.domain + '/login', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector(".email");
        await page.type('.email', this_settings.username);
        await page.type('.pass', this_settings.password);
        await page.screenshot({ path: screenshot.path('should_be_visible_filled_login_form') });
        await page.click('.login-button');
    }, 25000);


    test.describe('selected environment: ' + this_settings.id, () => {

        test.describe('user account', () => {

                test('should take an account details photo', async () => {
                    await page.goto(this_settings.domain + '/user/account');
                    await page.waitForSelector(".details");
                    await page.screenshot({ path: screenshot.path('should_be_visible_account_details')})
                }, 9000);

		})

	})
}