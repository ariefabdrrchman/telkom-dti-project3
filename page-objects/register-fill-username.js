module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillUsername: by.xpath("//input[@id='username']")
    },

    performFill: function () {
        var selector = page.registerFillUsername.elements.registerFillUsername;
        return driver.findElement(selector).sendKeys(shared.pages.reg_username_s);
    }
};