module.exports = function () {
    //steps no.1
    this.Given(/^user browse login page$/, function () {
        helpers.loadPage(shared.pages.gameQooLogin)
    });

    //steps no.2
    this.Given(/^user fill email field$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillEmail.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill password field$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillPassword.performFill()
        })
    });

    //steps no.4
    this.When(/^user click login button$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginClickButton.performClick()
        })
    });

    //steps no.5
    this.Then(/^user can see home page$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//span[contains(text(),'Halo, Dummy!')]"))
    });
}