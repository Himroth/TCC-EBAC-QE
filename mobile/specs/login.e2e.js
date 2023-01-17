const homePage = require("../pageobjects/home.page")
const loginPage = require("../pageobjects/login.page");
const myStorePage = require("../pageobjects/myStore.page");

let usuario = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let urlLoja = 'http://lojaebac.ebaconline.art.br/'

describe('Acessar o painel de adminstração da loja EBAC', () => {

    it('Fazer login no painel de adminstração com credenciais válidas', async () => {
        await homePage.goToLogin()
        await loginPage.setStoreAddress(urlLoja)
        await loginPage.continue()
        await loginPage.continueWithStore()
        await loginPage.login(usuario, password)
        await loginPage.continueTwoFactor()
        await loginPage.passwordTwo(password)
        await loginPage.continueAfterTwoFactorPass()

        expect(await myStorePage.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStorePage.getStoreName()).toEqual('EBAC - Shop')

    });
});