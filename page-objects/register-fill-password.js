module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillPassword: by.xpath("//input[@id='password']")
    },

    performFill: function () {
        var selector = page.registerFillPassword.elements.registerFillPassword;
        return driver.findElement(selector).sendKeys(shared.pages.reg_password_s);
    }
};