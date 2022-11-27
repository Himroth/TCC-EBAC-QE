class produto {
    get botaoComprar() {return cy.get('.single_add_to_cart_button')}

    get botaoTamanho() {return cy.get('[class^="variable-item button-variable-item button-variable-item-"]')}

    get botaCor() {return cy.get('[class^="variable-item button-variable-item button-variable-item-Blue"]')}

}

export default new produto()
