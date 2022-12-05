class catalogo {

    get botaProxPagina() {return cy.get('.next')}

    get botaPaginaAnterior() {return cy.get('.prev')}


}

export default new catalogo