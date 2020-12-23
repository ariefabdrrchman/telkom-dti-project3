module.exports = function () {
    //steps no.1
    this.Given(/^user browse page for register$/, function () {
        helpers.loadPage(shared.pages.gameQooRegister)
    });

    //steps no.2
    this.Given(/^user fill full name box$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillFullname.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill unregistered email$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillEmail.performFill()
        })
    });

    //steps no.4
    this.Given(/^user fill username field with registered username$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillRegUsername.performFill()
        })
    })

    //steps no.5
    this.Given(/^user fill user password$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillPassword.performFill()
        })
    });

    //steps no.6
    this.Given(/^user click accept terms and conditions button$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickAccept.performClick()
        })
    });

    //steps no.7
    this.When(/^user click make account$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickMakeAccount.performClick()
        })
    });

    //steps no.8
    this.Then(/^user see pop up error message$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//div[@role='alert']"))
    });
}