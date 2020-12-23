module.exports = {

    url: 'https://www.gameqoo.id/identity/account/register?returnUrl=%2F',

    elements: {
        registerFillFullname: by.xpath("//input[@id='fullname']")
    },

    performFill: function () {
        var selector = page.registerFillFullname.elements.registerFillFullname;
        return driver.findElement(selector).sendKeys(shared.pages.reg_fullName);
    }
};