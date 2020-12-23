module.exports = function () {
    //steps no.1
    this.Given(/^user browse user login pages$/, function () {
        helpers.loadPage(shared.pages.gameQooLogin)
    });

    //steps no.2
    this.Given(/^user fill in email field$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillEmail.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill in password field$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillPassword.performFill()
        })
    });

    //steps no.4
    this.Given(/^user click button of login$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginClickButton.performClick()
        })
    });

    //steps no.5
    this.Given(/^user able to see homepage$/, function () {
        return driver.findElement(by.xpath("//span[contains(text(),'Halo, Dummy!')]"))
    });

    //steps no.6
    this.Given(/^user went game page$/, function () {
        helpers.loadPage(shared.pages.gameQooGames)
    });

    //steps no.7
    this.Given(/^user fill search field with non exist game$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchGameNonExist.performFill()
        })
    });

    //steps no.8
    this.When(/^user click search button icon$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchClickButton.performClick()
        })
    });

    //steps no.9
    this.Then(/^user see the game which doesn't exist$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//p[@class='text-dark mb-4']"))
    });
}