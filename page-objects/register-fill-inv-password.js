module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillInvPassword: by.xpath("//input[@id='password']")
    },

    performFill: function () {
        var selector = page.registerFillInvPassword.elements.registerFillInvPassword;
        return driver.findElement(selector).sendKeys(shared.pages.reg_password_f);
    }
};