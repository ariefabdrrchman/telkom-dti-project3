module.exports = function () {
    //steps no.1
    this.Given(/^user browse register page$/, function () {
        helpers.loadPage(shared.pages.gameQooRegister)
    });

    //steps no.2
    this.Given(/^user fill full name field$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillFullname.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill email$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillEmail.performFill()
        })
    });

    //steps no.4
    this.Given(/^user fill username$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillUsername.performFill()
        })
    });

    //steps no.5
    this.Given(/^user fill password$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillPassword.performFill()
        })
    });

    //steps no.6
    this.Given(/^user click accept terms and conditions$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickAccept.performClick()
        })
    });

    //steps no.7
    this.When(/^user click make an account$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickMakeAccount.performClick()
        })
    });

    //steps no.8
    this.Then(/^user see home page$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//span[contains(text(),'Halo, Dummy!')]"))
    });
}