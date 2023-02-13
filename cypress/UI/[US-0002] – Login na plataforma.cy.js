/// <reference types="cypress" />
import { loginPage } from "../support/page_objects";
const {usuario} = require ('../fixtures')

describe('Login na plataforma', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    context('Funcionalidade de login e suas validações', () => {
        it('Valida se ao preencher dados inexistentes nos campos usuário e senha o sistema avisa o usuário', () => {
            loginPage.botaoUsuario.click()
            cy.loginUsingUI('teste_aluno1223@teste.com', 'teste@teste.com')
            loginPage.mensagemDeAviso.should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        });

        it('Valida se é possível realizar o login com usuário cadastrado', () => {
            loginPage.botaoUsuario.click()
            cy.loginUsingUI(usuario.usuario, usuario.senha)
            loginPage.mensagemPosLogin.should('contain', 'Olá, teste_aluno13 (não é teste_aluno13? Sair)')
        });
    });
});
