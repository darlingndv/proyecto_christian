/// <reference types="cypress" />

describe('Funciones para type', () =>{
    it("Type --> Enter", () =>{
        cy.visit('https://www.google.co.ve/?hl=es')
        cy.title().should('eq','Google')
        cy.wait(1500)

        cy.get("[name='q']").type("Cypress io {enter}" )
        cy.wait(2000)
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()

    })


})// cirerre describe