import { loginPage } from "../support/page_objects";

describe('Login na plataforma', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    context('Funcionalidade de login e suas validações', () => {
        it('Valida se ao preencher dados inexistentes nos campos usuário e senha o sistema avisa o usuário', () => {
            loginPage.botaoUsuario.click()
            loginPage.campoUsuario.type('teste1234111@teste.com.br')
            loginPage.campoPassword.type('senha787867856')
            loginPage.botaoLogin.click()
            loginPage.mensagemDeAviso.should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        });

        it('Valida se é possível realizar o login com usuário cadastrado', () => {
            loginPage.botaoUsuario.click()
            loginPage.campoUsuario.type('teste_aluno13@teste.com')
            loginPage.campoPassword.type('teste@teste.com')
            loginPage.botaoLogin.click()
            loginPage.mensagemPosLogin.should('contain', 'Olá, teste_aluno13 (não é teste_aluno13? Sair)')
        });
    });
});