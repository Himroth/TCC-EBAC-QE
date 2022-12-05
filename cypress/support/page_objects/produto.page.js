class produto {
    get botaoComprar() {return cy.get('.single_add_to_cart_button')}

    get botaoTamanho() {return cy.get('[class^="variable-item button-variable-item button-variable-item-"]')}

    get botaoCor() {return cy.get('[class^="variable-item button-variable-item button-variable-item-Blue"]')}

    get botaoVerCarrinho() {return cy.get('.woocommerce-message > .button')}

    get dadosDoProdutoNoCarrinho() {return  cy.get('.product-name > a')}

    get nomeDoProduto() {return cy.get('[class="name"]')}

}

export default new produto()
