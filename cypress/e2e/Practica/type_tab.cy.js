/// <reference types="cypress" />

require('cypress-plugin-tab')

describe('Ejemplo funcion tab', () =>{
    it("Ejemplo tab", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get('#edit-name').type('Darling')
        cy.wait(1000).tab().
        type('darlingndv@gmail.com')
        cy.wait(1000).tab().
        type('Tessting')
    })




    
})// cirerre describe