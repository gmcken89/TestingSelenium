const {By, Key, Builder } = require('selenium-webdriver')

async function searchGoogle() {
    //Build a chrome driver
    let driver = await new Builder().forBrowser('chrome').build()

    //Search Google
    await driver.get('https://www.google.com')
    await driver.findElement(By.css('#lst-ib')).sendKeys('test' + Key.ENTER)

    // Click on the fist link
    await driver.findElement(By.css('.g h3')).click()
}

searchGoogle()
