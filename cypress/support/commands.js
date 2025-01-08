// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('texto_visible', (selector, texto, t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('boton', (selector, t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)
})

Cypress.Commands.add('dropdawn', (selector, selector2, selector3, t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)
    cy.get(selector2).should("be.visible").click()
    cy.wait(tiempo)
    cy.get(selector3).should("be.visible").click()
    cy.wait(tiempo)
    
})

Cypress.Commands.add('bloque_qa', (email, password, t) => {
    let tiempo=t
    cy.get("#Email").clear().should("be.visible").click().type(email)
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type(password)
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.get("#settingsDropdown").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(".dropdown-item").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(".profile-logout-btn").should("be.visible").click()
    cy.wait(tiempo)
})