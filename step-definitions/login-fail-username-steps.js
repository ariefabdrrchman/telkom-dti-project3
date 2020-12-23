module.exports = function () {
    //steps no.1
    this.Given(/^user fill email field with wrong username$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillWrongEmail.performFill()
        })
    });

    //steps no.2
    this.Given(/^user fill password field with right password$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillPassword.performFill()
        })
    });

    //steps no.3
    this.When(/^user click the login button$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginClickButton.performClick()
        })
    });

    //steps no.4
    this.Then(/^user can see pop up message$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//div[@role='alert']"))
    });
}