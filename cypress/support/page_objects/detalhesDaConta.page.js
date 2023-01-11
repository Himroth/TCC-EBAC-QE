class detalhesDaConta {

    get nome() {return cy.get('#account_first_name')}

    get sobreNome() {return cy.get('#account_last_name')}

    get buttonSave() {return cy.get('.woocommerce-Button')}

    get mensagemSave() {return cy.get('.woocommerce-message')}

    get displayName() {return cy.get('#account_display_name')}

    get email() {return cy.get('#account_email')}

    get mensagemNome() {return cy.get('[data-id="account_first_name"]')}

    get mensagemSobrenome() {return cy.get('[data-id="account_last_name"]')}

    get mensagemDisplayName() {return cy.get('[data-id="account_display_name"]')}

    get mensagemEmail() {return cy.get('[data-id="account_email"]')}

}

export default new detalhesDaConta