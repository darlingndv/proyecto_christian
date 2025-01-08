class Cambiar_contraseña {

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


//Cambiar contraseña regresando a mi perfil
Cambiar_contraseña(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get('#Password').clear().should("be.visible").click().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .btn').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('.navbar-collapse > :nth-child(2) > :nth-child(1) > .nav-link').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('p > a').should("be.visible").click()
    cy.wait(tiempo)

//Cambiar contraseña - Validacion de campos
cy.get('.navbar-collapse > :nth-child(2) > :nth-child(1) > .nav-link').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#CurrentPassword').should("be.visible").type("A")
    cy.wait(tiempo)
    cy.get('.d-grid > .btn').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#NewPassword').should("be.visible").type("A")
    cy.wait(tiempo)
    cy.get('#CurrentPassword').clear().should("be.visible").type("Lucas2.20")
    cy.wait(tiempo)
    cy.get('#NewPassword').clear().should("be.visible").type("Lucas2.12")
    cy.wait(tiempo)
    cy.get('.d-grid > .btn').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#Email').should("be.visible").click().type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get('.d-grid > .btn').should("be.visible").click()
    cy.wait(tiempo)
}
}//final

export default Cambiar_contraseña;