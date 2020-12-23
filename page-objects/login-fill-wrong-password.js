module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        loginFillWrongPassword: by.xpath("//input[@id='Input_Password']")
    },

    performFill: function () {
        var selector = page.loginFillWrongPassword.elements.loginFillWrongPassword;
        return driver.findElement(selector).sendKeys(shared.pages.log_password_f);
    }
};