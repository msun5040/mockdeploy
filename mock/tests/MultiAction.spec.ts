import { test, expect } from '@playwright/test';


// If you needed to do something before every test case...
test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8000/');

  })

// tests that null commands just create new lines
test('onclicking submit with nothing loaded', async ({page}) => {
    await expect(page.getByLabel('Command input')).toBeVisible()

    // click the button without anything filled
    await page.getByLabel('submit-button').click();
    await expect(page.getByLabel('command-separator'))
        .toBeVisible()
})


