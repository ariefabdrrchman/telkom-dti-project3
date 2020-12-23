module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerClickAccept: by.xpath("//label[normalize-space()='Setuju dengan Syarat dan Ketentuan']")
    },

    performClick: function () {
        var selector = page.registerClickAccept.elements.registerClickAccept;
        return driver.findElement(selector).click(selector);
    }
};