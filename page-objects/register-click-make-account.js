module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerClickMakeAccount: by.xpath("//button[normalize-space()='Buat akun']")
    },

    performClick: function () {
        var selector = page.registerClickMakeAccount.elements.registerClickMakeAccount;
        return driver.findElement(selector).click(selector);
    }
};