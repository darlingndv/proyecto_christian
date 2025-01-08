/// <reference types="cypress" />

describe('Introducción a los assert', () =>{
    it("Demo a los assert", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get("#edit-name").should("be.visible").type("Darling")
        cy.wait(1000)
        cy.get("#edit-email").should("be.visible").type("darndv@gmail.com")
        cy.wait(1000)
        cy.get("#edit-subject").should("be.visible").type("This is course of Cypress")
        cy.wait(1000)
        cy.get("#edit-message").should("be.visible").type("The life with God is beatifull")
        cy.wait(1000)
        

    })






    
})// cirerre describe