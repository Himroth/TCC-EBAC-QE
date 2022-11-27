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

    it.only('Valida se é possível adicionar produto no carrinho selecionando cor e tamanho', () => {
      produtoPage.botaoTamanho.contains(tamanho.XS).click({force: true})
      produtoPage.botaCor.contains(cor.blue).click({force: true})
      produtoPage.botaoComprar.click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.product-name > a').should('contain', nomeProduto.nomeProduto)
      cy.get('.product-name > a').should('contain', tamanho.XS)
      cy.get('.product-name > a').should('contain', cor.blue)

    });
  });
 
})