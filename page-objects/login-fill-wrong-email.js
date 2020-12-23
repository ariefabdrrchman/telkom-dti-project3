module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        loginFillEmail: by.xpath("//input[@id='Input_Email']")
    },

    performFill: function () {

        var selector = page.loginFillEmail.elements.loginFillEmail;
        return driver.findElement(selector).sendKeys(shared.pages.log_username_f);
    }
};
