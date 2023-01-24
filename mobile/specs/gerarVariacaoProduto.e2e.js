const homePage = require("../pageobjects/home.page")
const loginPage = require("../pageobjects/login.page");
const produtoPage = require("../pageobjects/produto.page")

let usuario = ''
let password = ''
let urlLoja = 'http://lojaebac.ebaconline.art.br/'

describe('Validar geração de variação de produto sem preço', () => {

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

    it('Gerar uma nova variação e deixar sem preço para validar a mensagem de preço faltando', async () => {
        await produtoPage.tapButtonProduct()
        await produtoPage.esperaOProcurar()
        await produtoPage.clicaCampoProcurar()
        await produtoPage.esperaCampoInsereTexto()
        await produtoPage.preencheCampoInsereTexto()
        await produtoPage.waitCampoSorte()
        await produtoPage.waitProdutoNome()
        await produtoPage.clickOnProduct()
        await produtoPage.esperaBotaoVariations()
        await produtoPage.clicaBotaVariations()
        await produtoPage.clicaBotaoGerar()
        await produtoPage.esperaMsgPreco()
        
        expect(await produtoPage.esperaMsgPreco()).toBeTruthy()
        expect(await produtoPage.esperaMsgPreco()).toEqual("Variations without price won't be shown in your store")
    });
});
