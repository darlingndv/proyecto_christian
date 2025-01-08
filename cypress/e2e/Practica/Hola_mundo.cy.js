/// <reference types="cypress" />

describe('Bienvenido al curso de Cypress seccion 1', () =>{
    it("Mi primer test Hola Mundo", () =>{
        cy.log("Hola Mundo")
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')

        cy.wait(3000)
    })
})