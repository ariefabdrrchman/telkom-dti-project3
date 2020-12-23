module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillEmail: by.xpath("//input[@id='email']")
    },

    performFill: function () {
        var selector = page.registerFillEmail.elements.registerFillEmail;
        return driver.findElement(selector).sendKeys(shared.pages.reg_email_s);
    }
};