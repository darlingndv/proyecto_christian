/// <reference types="cypress" />

describe('ejemplo types pageUP y pageDown', () =>{
    it.only("Type up primero", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get("#edit-name").type('{pageup}')
        cy.wait(2000)
    })

    it.only("Type down segundo", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get("#edit-name").type('{pagedown}')
        cy.wait(2000)
    })
    
    it("Test validar el titulo", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get("#edit-name").type('{pageup}')
        cy.wait(2000)
    })

    it("Test validar el titulo", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get("#edit-name").type('{pagedown}')
        cy.wait(2000)
    })

    it("Test validar el titulo", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get("#edit-name").type('{pagedown}')
        cy.wait(2000)
    })

    

})