class meusPedidos {

    get numeroPedido() {return cy.get('.woocommerce-orders-table__header-order-number > .nobr')}

    get dataPedido() {return cy.get('.woocommerce-orders-table__cell-order-date')}

    get statusPedido() {return cy.get('.woocommerce-orders-table__cell-order-status')}

    get totalDoPedido() {return cy.get('.woocommerce-orders-table__cell-order-total')}

    get acoes() {return cy.get('.woocommerce-orders-table__cell-order-actions')}

    get botaVisualizar() {return cy.get('.woocommerce-button')}

    get tituloTelaDetalhesPedido() {return cy.get('.woocommerce-order-details__title')}
}

export default new meusPedidos