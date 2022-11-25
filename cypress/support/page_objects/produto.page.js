class produto {
    get botaoComprar() {return cy.get('.single_add_to_cart_button')}

    get botaoTamanho() {return ('.button-variable-item-'+tamanho)}

    get botaCor() {return cy.get('.button-variable-item-')}


    selectTamanho(tamanho) {
        this.botaoTamanho+tamanho

    }

}

export default new produto()
