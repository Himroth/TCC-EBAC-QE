/// <reference types="cypress" />
const {produtoPage, catalogoPage} = require ('../support/page_objects')

describe('Testes do catálogo de produto0s', () => {
    beforeEach(() => {
        cy.visit('/produtos')
    });
    context('Testando as funcionalidades do catálogo de produtos', () => {
        it('Validando se o catálogo exibe apenas 9 produtos por página', () => {
            produtoPage.nomeDoProduto.should('have.length', 9)
            
        });

        it('Validando se ao clicar no botão next muda de página', () => {
            catalogoPage.botaProxPagina.click()
            catalogoPage.botaPaginaAnterior.should('exist')
        });
    });
    
});
