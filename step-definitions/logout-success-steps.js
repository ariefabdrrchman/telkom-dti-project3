module.exports = function () {
    //steps no.1
    this.Given(/^user browse log in for user page$/, function () {
        helpers.loadPage(shared.pages.gameQooLogin)
    });

    //steps no.2
    this.Given(/^user fill the email field$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillEmail.performFill()
        })
    });

    //steps no.3
    this.Given(/^user fill the password field$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillPassword.performFill()
        })
    });

    //steps no.4
    this.Given(/^user click the button of login$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginClickButton.performClick()
        })
    });

    //steps no.5
    this.Given(/^user can see its homepage$/, function () {
        return driver.findElement(by.xpath("//span[contains(text(),'Halo, Dummy!')]"))
    });

    //steps no.6
    this.Given(/^user click toggle down$/, function () {
        return page.downClickButton.performClick()
    });

    //steps no.7
    this.When(/^user click logout button$/, function () {
        driver.sleep(2000).then(function(){
            return page.logoutClickButton.performClick()
        })
    });

    //steps no.8
    this.Then(/^user see homepage$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//span[contains(text(),'Masuk')]"))
    });
}