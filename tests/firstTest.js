const mypage=require('../pages/elements.js')
module.exports = {
    '@tags':['ecosia'],
    'Demo test Ecosia.org': function(browser){
        browser
            .url('https://www.ecosia.org')
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.visible(mypage.Elements.button.btnCloseIcon)
            .click(mypage.Elements.button.btnCloseIcon)
            .assert.visible(mypage.Elements.inputs.inputSearch)
            .setValue(mypage.Elements.inputs.inputSearch,'nightwatch')
            .assert.visible(mypage.Elements.button.btnSearch)
            .click(mypage.Elements.button.btnSearch)
            .assert.containsText(mypage.Elements.text.textNightwat,'Nightwatch.js')
            .end();
    }
}
