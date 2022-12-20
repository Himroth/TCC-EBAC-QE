import { loginPage, minhaContaPage } from "../support/page_objects";

describe('', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
        loginPage.campoUsuario.type('teste_aluno13@teste.com')
        loginPage.campoPassword.type('teste@teste.com')
        loginPage.botaoLogin.click()
    });
    context('Validando as funcionalidades do painel minha conta', () => {
        it('Validando se exibe a mensagem de boas vindas', () => {
            minhaContaPage.primeiraMensagemDaTela.should('contain', 'Olá, teste_aluno13 (não é teste_aluno13? Sair)' )
            minhaContaPage.segundaMensagemDaTela.should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.' )
        });

        it('Validando se o botão Sair do painel minha conta volta para a tela de login', () => {
            minhaContaPage.botaoSair.click()
            loginPage.tituloTelaLogin.should('contain', 'Login')
        });
    });
});