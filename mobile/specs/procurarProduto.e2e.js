const homePage = require("../pageobjects/home.page")
const loginPage = require("../pageobjects/login.page");
const produtoPage = require("../pageobjects/produto.page")

let usuario = ''
let password = ''
let urlLoja = 'http://lojaebac.ebaconline.art.br/'

describe('Procurar um produto e validar se o produto correto é achado', () => {
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

    it('Procura um produto e valida se achou', async () => {
        await produtoPage.tapButtonProduct()
        await produtoPage.esperaOProcurar()
        await produtoPage.clicaCampoProcurar()
        await produtoPage.esperaCampoInsereTexto()
        await produtoPage.preencheCampoInsereTexto()
        await produtoPage.waitCampoSorte()
        await produtoPage.waitProdutoNome()
        expect(await produtoPage.waitProdutoNome()).toBeTruthy()
        expect(await produtoPage.waitProdutoNome()).toEqual('Abominable Hoodie')
    });
});
