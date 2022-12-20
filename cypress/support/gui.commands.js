import { loginPage } from "../support/page_objects";

Cypress.Commands.add('loginUsingUI', (usuario, senha)=>{
    loginPage.campoUsuario.type(usuario)
    loginPage.campoPassword.type(senha)
    loginPage.botaoLogin.click()
    
})