module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        searchGameNonExist: by.xpath("//input[@placeholder='Cari judul di All Games...']")
    },

    performFill: function () {
        var selector = page.searchGameNonExist.elements.searchGameNonExist;
        return driver.findElement(selector).sendKeys(shared.pages.searchGames_nonExist);
    }
};