/// <reference types="cypress" />

describe('ejemplo de click', () =>{
    it("Click", () =>{
        cy.viewport(1920, 1080) // Set viewport to 550px x 750px
        cy.visit('https://ts-api-qa.teravisiontech.cloud/manage/')
        cy.wait(1000)

        cy.get('#id_username').should("be.visible").type("admin@teravisiontech.com")
        cy.wait(1000)
        cy.get('#id_password').should("be.visible").type("Team1234")
        cy.wait(1000)
        cy.get('.submit-row > input').should("be.visible").click()
        cy.wait(1000)
        cy.get('#logout-form > button').should("be.visible").click()
        cy.wait(1000)


    })






    
})// cirerre describe