/// <reference types="cypress" />
import { enderecosPage } from "../support/page_objects";
const {usuario} = require ('../fixtures')

describe('Funcionalidade Endereços', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/edit-address/')
        cy.loginUsingUI(usuario.usuario, usuario.senha)

    });
    context('Validando as funcionalidades da página endereço', () => {
        it('Cadastrar um endereço de cobrança', () => {
            enderecosPage.botaoEditEndPagamento.click()
            enderecosPage.campoPagamentoNome.clear().type('Helton')
            enderecosPage.campoPagamentoSobrenome.clear().type('Imroth')
            enderecosPage.campoPagamentoPais.click()
            enderecosPage.campoPagamentosProcuraPais.type('Botsuana').type('{enter}')
            enderecosPage.campoPagamentoEndereco.clear().type('teste1')
            enderecosPage.campoPagamentoEndereco2.clear().type('teste')
            enderecosPage.campoPagamentoCidade.clear().type('teste')
            enderecosPage.campoPagamentoEstado.clear().type('teste')
            enderecosPage.campoPagamentoCep.clear().type('890530300')
            enderecosPage.campoPagamentoFone.clear().type('12345678')
            enderecosPage.campoPagamentoEmail.clear().type('teste@teste.com')
            enderecosPage.botaPagamentoSalvar.click()
            enderecosPage.mensagemEnderecoSalvo.should('contain', 'Endereço alterado com sucesso.')
        });

        it('Validar se obriga os campos obrigatórios', () => {
            enderecosPage.botaoEditEndPagamento.click()
            enderecosPage.campoPagamentoNome.clear()
            enderecosPage.campoPagamentoSobrenome.clear()
            enderecosPage.campoPagamentoEndereco.clear()
            enderecosPage.campoPagamentoEndereco2.clear()
            enderecosPage.campoPagamentoCidade.clear()
            enderecosPage.campoPagamentoEstado.clear()
            enderecosPage.campoPagamentoCep.clear()
            enderecosPage.campoPagamentoFone.clear()
            enderecosPage.campoPagamentoEmail.clear()
            enderecosPage.botaPagamentoSalvar.click()
            enderecosPage.mensagemErroNome.should('contain', 'Nome é um campo obrigatório.')
            enderecosPage.mensagemErroSobrenome.should('contain', 'Sobrenome é um campo obrigatório.')
            enderecosPage.mensagemErroEndereco1.should('contain', 'Endereço é um campo obrigatório.')
            enderecosPage.mensagemErroCidade.should('contain', 'Cidade é um campo obrigatório.')
            enderecosPage.mensagemErroEstado.should('contain', 'Estado é um campo obrigatório.')
            enderecosPage.mensagemErroCep.should('contain', 'CEP é um campo obrigatório.')
            enderecosPage.mensagemErroFone.should('contain', 'Telefone é um campo obrigatório.')
            enderecosPage.mensagemErroEmail.should('contain', 'Endereço de e-mail é um campo obrigatório.')
        });
    });
});
