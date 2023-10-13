import { test, expect } from '@playwright/test';


// If you needed to do something before every test case...
test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8001/');

  })

// tests that null commands just create new lines
test('onclicking submit with nothing loaded', async ({page}) => {
    await expect(page.getByLabel('Command input')).toBeVisible()

    // click the button without anything filled
    await page.getByLabel('submit-button').click();
    await expect(page.getByLabel('command-separator'))
        .toBeVisible()
})

test('on loading successfully, then error, then successful', async ({page}) => {
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_csv yes');
  await page.getByLabel('submit-button').click();

  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByLabel('submit-button').click();

  await expect(page.getByLabel('view-response')).
  toBeVisible()

  // table headers are visible?
  await expect(page.getByText('one')).toHaveCount(2)
  await expect(page.getByText('two')).toHaveCount(2)
  await expect(page.getByText('three')).toHaveCount(2)
  await expect(page.getByText('four')).toHaveCount(2)
  await expect(page.getByText('five')).toHaveCount(2)

  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_csv no');
  await page.getByLabel('submit-button').click();

  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByLabel('submit-button').click();

  await expect(page.getByLabel('view-error')).
  toContainText('No dataset has been loaded at this time')

  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_csv yes');
  await page.getByLabel('submit-button').click();

  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByLabel('submit-button').click();

  await expect(page.getByLabel('view-response')).toHaveCount(2)

  // table headers are visible?
  await expect(page.getByText('one')).toHaveCount(4)
  await expect(page.getByText('two')).toHaveCount(4)
  await expect(page.getByText('three')).toHaveCount(4)
  await expect(page.getByText('four')).toHaveCount(4)
  await expect(page.getByText('five')).toHaveCount(4)
})
