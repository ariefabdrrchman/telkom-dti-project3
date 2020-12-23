module.exports = function () {
    //steps no.1
    this.Given(/^user browse page to sign up or register$/, function () {
        helpers.loadPage(shared.pages.gameQooRegister)
    });

    //steps no.2
    this.Given(/^user fill name field$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillFullname.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill unregistered email in the field$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillEmail.performFill()
        })
    });

    //steps no.4
    this.Given(/^user fill unregistered username in the field$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillUsername.performFill()
        })
    });

    //steps no.5
    this.Given(/^user fill incorrect password$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillInvPassword.performFill()
        })
    });

    //steps no.6
    this.Given(/^user click the button of accept terms and conditions$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickAccept.performClick()
        })
    });

    //steps no.7
    this.When(/^user click the make an account button$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickMakeAccount.performClick()
        })
    });

    //steps no.8
    this.Then(/^user see error$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//div[@role='alert']"))
    });
}