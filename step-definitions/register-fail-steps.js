module.exports = function () {
    //steps no.1
    this.Given(/^user browse page for sign up or register$/, function () {
        helpers.loadPage(shared.pages.gameQooRegister)
    });

    //steps no.2
    this.Given(/^user fill fullname field$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillFullname.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill email with registered email$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillRegEmail.performFill()
        })
    });

    //steps no.4
    this.Given(/^user fill username field with already registered username$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillRegUsername.performFill()
        })
    });

    //steps no.5
    this.Given(/^user fill the password$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillPassword.performFill()
        })
    });

    //steps no.6
    this.Given(/^user click button of accept terms and conditions$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickAccept.performClick()
        })
    });

    //steps no.7
    this.When(/^user click the make account button$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickMakeAccount.performClick()
        })
    });

    //steps no.8
    this.Then(/^user see error pop up message or alert$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//div[@role='alert']"))
    });
}