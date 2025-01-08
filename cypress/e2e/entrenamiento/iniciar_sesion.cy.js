/// <reference types="cypress" />

describe('Bienvenido al curso de Cypress seccion 1', () =>{
    it("Mi primer test Hola Mundo", () =>{
        cy.log("Hola Mundo")
        cy.visit('http://localhost:8081/')
        cy.wait(3000)
        cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
        cy.wait(3000)
        cy.get('#Email').should("be.visible").type("adsdddddffffdfdffdddddddddddddddddddddddddddddddddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddddddddddddddddddd@gmail.com")
        cy.wait(1000)
        cy.get('#loginForm > button').should("be.visible").click()
        cy.wait(3000)
        cy.get('#passwordInput').should("be.visible").type("T")
        cy.wait(1000)
    })
})