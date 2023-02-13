/// <reference types="cypress" />
const {produtoPage} = require ('../support/page_objects')
const {tamanho, cor, nomeProduto} = require ('../fixtures')

describe('Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/product'+nomeProduto['linkAbominable-hoodie'])

  });

  context('Funcionalidade de adicionar produto no carrinho', () => {
    it('Valida se é possível adicionar produto no carrinho sem preencher os campos obrigatórios', () => {
      produtoPage.botaoComprar.click({force: true})
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Selecione uma das opções do produto antes de adicioná-lo ao carrinho.')
      })
  
    })

    it('Valida se é possível adicionar produto no carrinho selecionando cor e tamanho', () => {
      produtoPage.botaoTamanho.contains(tamanho.XS).click({force: true})
      produtoPage.botaoCor.contains(cor.blue).click({force: true})
      produtoPage.botaoComprar.click()
      produtoPage.botaoVerCarrinho.click()
      produtoPage.dadosDoProdutoNoCarrinho.should('contain', nomeProduto.nomeProduto)
      produtoPage.dadosDoProdutoNoCarrinho.should('contain', tamanho.XS)
      produtoPage.dadosDoProdutoNoCarrinho.should('contain', cor.blue)

    });
  });
 
})
