module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillRegUsername: by.xpath("//input[@id='username']")
    },

    performFill: function () {
        var selector = page.registerFillRegUsername.elements.registerFillRegUsername;
        return driver.findElement(selector).sendKeys(shared.pages.reg_username_f);
    }
};