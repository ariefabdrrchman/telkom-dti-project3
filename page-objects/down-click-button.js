module.exports = {

    url: 'https://www.gameqoo.id/',

    elements: {
        downClickButton: by.xpath("//span[@class='d-none d-xl-inline-block']")
    },

    performClick: function () {
        var selector = page.downClickButton.elements.downClickButton;
        return driver.findElement(selector).click(selector);
    }
};