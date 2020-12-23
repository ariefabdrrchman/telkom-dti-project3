module.exports = function () {
    //steps no.1
    this.Given(/^user browse game page to search$/, function () {
        helpers.loadPage(shared.pages.gameQooGames)
    });

    //steps no.2
    this.Given(/^user fill non exist game on search field$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchGameNonExist.performFill()
        })
    });

    //steps no.3
    this.When(/^user clicking the search button$/, function () {
        driver.sleep(2000).then(function(){
            return page.searchClickButton.performClick()
        })
    });

    //steps no.4
    this.Then(/^user can see warning pop up$/, function () {
        driver.sleep(2000)
        return driver.findElement(by.xpath("//p[@class='text-dark mb-4']"))
    });
}