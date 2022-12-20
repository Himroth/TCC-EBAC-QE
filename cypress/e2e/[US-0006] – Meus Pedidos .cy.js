import { loginPage, meusPedidosPage } from "../support/page_objects";

describe('Funcionalidade meus pedidos', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/orders/')
        loginPage.campoUsuario.type('teste_aluno13@teste.com')
        loginPage.campoPassword.type('teste@teste.com')
        loginPage.botaoLogin.click()
    });
    context('Validar funcionalidades do menu meus pedidos', () => {
        it('Valida se são exibidas as colunas Pedido, Data, Status, Total e Ações', () => {
            meusPedidosPage.numeroPedido.should('exist')
            meusPedidosPage.dataPedido.should('exist')
            meusPedidosPage.statusPedido.should('exist')
            meusPedidosPage.totalDoPedido.should('exist')
            meusPedidosPage.acoes.should('exist')
        });

        it('Validar se abre a tela de visualizar detalhamento', () => {
            meusPedidosPage.botaVisualizar.click()
            meusPedidosPage.tituloTelaDetalhesPedido.should('exist')
        });
    });

});