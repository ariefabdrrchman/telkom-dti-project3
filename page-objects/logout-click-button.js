module.exports = {

    url: 'https://www.gameqoo.id/',

    elements: {
        logoutClickButton: by.xpath("//button[normalize-space()='Keluar']")
    },

    performClick: function () {
        var selector = page.logoutClickButton.elements.logoutClickButton;
        return driver.findElement(selector).click(selector);
    }
};