class Validacion_registro{

    VisitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('http://localhost:8081/'),
            cy.title().should('eq','Elecciones Presidenciales 2024')
            cy.wait(tiempo)
            cy.get(':nth-child(2) > .nav-item > .nav-link').should("be.visible").click()
            cy.wait(tiempo)
        })
    }

//validación de formulario de registro
Registro_validacion(){
    let tiempo=1000
    cy.get('.text-primary').contains("Crea una aquí").click()
        cy.wait(tiempo)
        cy.get('#Email').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('#Password').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('#Name').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('#LastName').should("be.visible").type("A")
        cy.wait(tiempo)
        cy.get('.d-grid > .btn').should("be.visible").click()
        cy.wait(tiempo)
}

//Validar cuando un registro es existente
Registro_existente(){
    let tiempo=1000
    cy.get('#Email').clear().should("be.visible").type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get('#Password').clear().should("be.visible").type("Lucas2.12")
    cy.wait(tiempo)
    cy.get('#Name').clear().should("be.visible").type("Darling")
    cy.wait(tiempo)
    cy.get('#LastName').clear().should("be.visible").type("Diaz")
    cy.wait(tiempo)
    cy.get('.d-grid > .btn').should("be.visible").click()
    cy.wait(tiempo)
}


}//final

export default Validacion_registro;