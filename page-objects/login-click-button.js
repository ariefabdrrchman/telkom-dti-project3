module.exports = {

    url: 'https://www.gameqoo.id/identity/account/login',

    elements: {
        loginClickButton: by.xpath("//button[normalize-space()='Masuk']")
    },

    performClick: function () {
        var selector = page.loginClickButton.elements.loginClickButton;
        return driver.findElement(selector).click(selector);
    }
};