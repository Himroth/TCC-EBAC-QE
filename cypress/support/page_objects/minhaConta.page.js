class minhaConta {

    get primeiraMensagemDaTela() {return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')}

    get segundaMensagemDaTela() {return cy.get('.woocommerce-MyAccount-content > :nth-child(3)')}

    get botaoSair() {return cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a')}

}

export default new minhaConta 