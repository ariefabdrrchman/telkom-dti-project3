module.exports = function () {
    //steps no.1
    this.Given(/^user browse login pages$/, function () {
        helpers.loadPage(shared.pages.gameQooLogin)
    });

    //steps no.2
    this.Given(/^user fill email box$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillEmail.performFill()
        })
    });
    
    //steps no.3
    this.Given(/^user fill password box$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginFillPassword.performFill()
        })
    });

    //steps no.4
    this.Given(/^user click login$/, function () {
        driver.sleep(2000).then(function(){
            return page.loginClickButton.performClick()
        })
    });

    //steps no.5
    this.Given(/^user can see homepage$/, function () {
        return driver.findElement(by.xpath("//span[contains(text(),'Halo, Dummy!')]"))
    });

    //steps no.6
    this.Given(/^user go to game page$/, function () {
        helpers.loadPage(shared.pages.gameQooGames)
    });


    //steps no.7
    this.Given(/^user fill search with game$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchGame.performFill()
        })
    });

    //steps no.8
    this.When(/^user click the search button$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchClickButton.performClick()
        })
    });

    //steps no.9
    this.Then(/^user see the game$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//a[normalize-space()='Main Sekarang']"))
    });
}