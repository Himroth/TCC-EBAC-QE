const homePage = require("../pageobjects/home.page")
const loginPage = require("../pageobjects/login.page");
const produtoPage = require("../pageobjects/produto.page")

let usuario = ''
let password = ''
let urlLoja = 'http://lojaebac.ebaconline.art.br/'

describe('Validar as funcionaliade do catálogo de produtos', () => {

    before( async () => {
        await homePage.goToLogin()
        await loginPage.setStoreAddress(urlLoja)
        await loginPage.continue()
        await loginPage.continueWithStore()
        await loginPage.login(usuario, password)
        await loginPage.continueTwoFactor()
        await loginPage.passwordTwo(password)
        await loginPage.continueAfterTwoFactorPass()
    });


    it('Validar se o usuário consegue acessar o catálogo de produtos', async () => {
        await produtoPage.tapButtonProduct()
        expect(await produtoPage.namePageProduct()).toBeTruthy()
        expect(await produtoPage.getProductNamePageToolbar()).toEqual('Products')

    });

    
});
