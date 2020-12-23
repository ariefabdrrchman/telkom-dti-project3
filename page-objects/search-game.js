module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        searchGame: by.xpath("//input[@placeholder='Cari judul di All Games...']")
    },

    performFill: function () {
        var selector = page.searchGame.elements.searchGame;
        return driver.findElement(selector).sendKeys(shared.pages.searchGames_exist);
    }
};