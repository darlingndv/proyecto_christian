/// <reference types="cypress" />

describe('ejemplo de click', () =>{
    it("Click", () =>{
        cy.viewport(1920, 1080) // Set viewport to 550px x 750px
        cy.visit('http://localhost:8081/')
        cy.wait(3000)
        cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
        cy.wait(3000)

        cy.get('.account-container').contains("Regístrate ahora").click()
        cy.wait(2000)
        cy.get('#Nombre').should("be.visible").type("A")
        cy.wait(2000)
        cy.get('#Apellido').should("be.visible").type("A")
        cy.wait(2000)
        cy.get('#Email').should("be.visible").type("A@gmail.com")
        cy.wait(2000)
        cy.get('#passwordInput').should("be.visible").type("A")
        cy.wait(2000)

        cy.get('#registerForm > button').should("be.visible").click()
    })






    
})// cirerre describe