class login {

    get botaoUsuario() {return cy.get('.icon-user-unfollow')}

    get campoUsuario() {return cy.get('#username')}

    get campoPassword() {return cy.get('#password')}

    get botaoLogin() {return cy.get('.woocommerce-form > .button')}

    get mensagemDeAviso() {return  cy.get('.woocommerce-error')}

    get mensagemPosLogin() {return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')}

    get tituloTelaLogin() {return cy.get(':nth-child(1) > h2')}


}

export default new login