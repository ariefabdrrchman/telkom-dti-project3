module.exports = function () {
    //steps no.1
    this.Given(/^user fill email field with right username$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillEmail.performFill()
        })
    });

    //steps no.2
    this.Given(/^user fill password field with wrong password$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillWrongPassword.performFill()
        })
    });

    //steps no.3
    this.When(/^user click the log in button$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginClickButton.performClick()
        }) 
    });

    //steps no.4
    this.Then(/^user can see popup message$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//div[@role='alert']"))
    });
}