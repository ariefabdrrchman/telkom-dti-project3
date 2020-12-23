module.exports = function () {
    //steps no.1
    this.Given(/^user browse games page$/, function () {
        helpers.loadPage(shared.pages.gameQooGames)
    });

    //steps no.2
    this.Given(/^user fill search field$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchGame.performFill()
        })
    });

    //steps no.3
    this.When(/^user click search button$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchClickButton.performClick()
        })
    });

    //steps no.4
    this.Then(/^user can see the game$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//a[normalize-space()='Main Sekarang']"))
    });
}