module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillRegEmail: by.xpath("//input[@id='email']")
    },

    performFill: function () {
        var selector = page.registerFillRegEmail.elements.registerFillRegEmail;
        return driver.findElement(selector).sendKeys(shared.pages.reg_email_f);
    }
};