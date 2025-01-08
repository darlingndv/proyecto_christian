class Validacion_registro{

VisitHome(){
    let tiempo=1000
    before(()=>{
        cy.visit('http://localhost:8081/'),
        cy.title().should('eq','Elecciones 2024')
        cy.wait(tiempo)
        cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
        cy.wait(tiempo)
    })
}

//validación de formulario de registro
Registro_validacion(){
    let tiempo=1000
        cy.get('.account-container').contains("Regístrate ahora").click()
        cy.wait(tiempo)
        cy.get('#Nombre').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('#Apellido').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('#Email').should("be.visible").type("A@gmail.com")
        cy.wait(tiempo)
        cy.get('#passwordInput').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('#registerForm > button').should("be.visible").click()
        cy.wait(tiempo)
}

//Validar cuando un registro es existente
Registro_existente(){
    let tiempo=1000
        cy.get('#Nombre').should("be.visible").clear().type("Da")
        cy.wait(tiempo)
        cy.get('#Apellido').should("be.visible").clear().type("Da")
        cy.wait(tiempo)
        cy.get('#Email').should("be.visible").clear().type("ddiaz@teravisiontech.com")
        cy.wait(tiempo)
        cy.get('#passwordInput').should("be.visible").clear().type("Lucas2.12")
        cy.wait(tiempo)
        cy.get('#registerForm > button').should("be.visible").click()
        cy.wait(tiempo)
}


}//final

export default Validacion_registro;