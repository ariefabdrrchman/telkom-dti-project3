module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        loginFillPassword: by.xpath("//input[@id='Input_Password']")
    },

    performFill: function () {
        var selector = page.loginFillPassword.elements.loginFillPassword;
        return driver.findElement(selector).sendKeys(shared.pages.log_password_s);
    }
};