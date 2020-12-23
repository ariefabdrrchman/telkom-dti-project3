module.exports = function () {
    //steps no.1
    this.Given(/^user browse page for register or sign up$/, function () {
        helpers.loadPage(shared.pages.gameQooRegister)
    });

    //steps no.2
    this.Given(/^user fill fullname box$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillFullname.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill registered email$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillRegEmail.performFill()
        })
    });

    //steps no.4
    this.Given(/^user fill username field with unregistered username$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillUsername.performFill()
        })
    });

    //steps no.5
    this.Given(/^user fill user the password$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerFillPassword.performFill()
        })
    });

    //steps no.6
    this.Given(/^user click the accept terms and conditions button$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickAccept.performClick()
        })
    });

    //steps no.7
    this.When(/^user click make account button$/, function () {
        driver.sleep(2000).then(function(){
            return page.registerClickMakeAccount.performClick()
        })
    });

    //steps no.8
    this.Then(/^user see error message$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//div[@role='alert']"))
    });
}