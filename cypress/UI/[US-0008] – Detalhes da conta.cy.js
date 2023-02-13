/// <reference types="cypress" />
const {usuario} = require ('../fixtures')
var faker = require('faker');
import { detalhesDaContaPage } from "../support/page_objects";

describe('Funcionalidade detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/edit-account/')
        cy.loginUsingUI(usuario.usuario, usuario.senha)
    });

    context('Validar o uso da funcionalidade detalhes da conta', () => {
        it('Valida se ao editar o cadastro o sistema salva', () => {
            let nomeFaker = faker.name.firstName()
            let sobrenomeFaker = faker.name.lastName()

            detalhesDaContaPage.nome.clear().type(nomeFaker)
            detalhesDaContaPage.sobreNome.clear().type(sobrenomeFaker)
            detalhesDaContaPage.buttonSave.click()
            detalhesDaContaPage.mensagemSave.should('contain', 'Detalhes da conta modificados com sucesso.')
        });

        it('Valida se o sistema exibe a mensagem de quais campos são obrigatórios', () => {
            detalhesDaContaPage.nome.clear()
            detalhesDaContaPage.displayName.clear()
            detalhesDaContaPage.sobreNome.clear()
            detalhesDaContaPage.email.clear()
            detalhesDaContaPage.buttonSave.click()

            detalhesDaContaPage.mensagemNome.should('contain', 'Nome é um campo obrigatório.')
            detalhesDaContaPage.mensagemSobrenome.should('contain', 'Sobrenome é um campo obrigatório.')
            detalhesDaContaPage.mensagemDisplayName.should('contain', 'Nome de exibição é um campo obrigatório.')
            detalhesDaContaPage.mensagemEmail.should('contain', 'Endereço de e-mail é um campo obrigatório.')
        });
    });
    
    
});
