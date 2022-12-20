class endereco {

    get botaoEditEndPagamento() { return cy.get(':nth-child(1) > .title > .edit') }

    get campoPagamentoNome() { return cy.get('#billing_first_name') }

    get campoPagamentoSobrenome() { return cy.get('#billing_last_name') }

    get campoPagamentoPais() { return cy.get('#select2-billing_country-container') }

    get campoPagamentosProcuraPais() { return cy.get('.select2-search__field') }

    get campoPagamentoEndereco() { return cy.get('#billing_address_1') }

    get campoPagamentoEndereco2() { return cy.get('#billing_address_2') }

    get campoPagamentoCidade() { return cy.get('#billing_city') }

    get campoPagamentoEstado() { return cy.get('#billing_state') }

    get campoPagamentoCep() { return cy.get('#billing_postcode') }

    get campoPagamentoFone() { return cy.get('#billing_phone') }

    get campoPagamentoEmail() { return cy.get('#billing_email') }

    get botaPagamentoSalvar() { return cy.get('.button') }

    get mensagemEnderecoSalvo() {return cy.get('.woocommerce-message') }

    get mensagemErroNome() { return cy.get('[data-id="billing_first_name"]') }

    get mensagemErroSobrenome() { return cy.get('[data-id="billing_last_name"]') }

    get mensagemErroEndereco1() { return cy.get('[data-id="billing_address_1"]') }

    get mensagemErroCidade() { return cy.get('[data-id="billing_city"]') }

    get mensagemErroEstado() { return cy.get('[data-id="billing_state"]') }

    get mensagemErroCep() { return cy.get('[data-id="billing_postcode"]') }

    get mensagemErroFone() { return cy.get('[data-id="billing_phone"]') }

    get mensagemErroEmail() { return cy.get('[data-id="billing_email"]') }
}

export default new endereco