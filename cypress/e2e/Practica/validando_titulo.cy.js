/// <reference types="cypress" />

describe('Seccion 1 validando titulo', () =>{
    it("Test validar el titulo", () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')

        cy.log ("Ok la funcion tittle funciono bien")

    })






    
})// cirerre describe