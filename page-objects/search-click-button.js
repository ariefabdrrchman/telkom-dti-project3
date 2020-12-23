module.exports = {

    url: 'https://www.gameqoo.id/game',

    elements: {
        searchClickButton: by.xpath("//button[@class='btn btn-light border-left-0']")
    },

    performClick: function () {
        var selector = page.searchClickButton.elements.searchClickButton;
        return driver.findElement(selector).click(selector);
    }
};