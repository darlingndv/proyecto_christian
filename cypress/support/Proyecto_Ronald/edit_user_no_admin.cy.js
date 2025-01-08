class edit_user_no_admin {

    VisitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('http://localhost:8081/'),
            cy.title().should('eq','Elecciones 2024')
            cy.wait(tiempo)
            cy.get('.nav-item > .header-nav-a-link').should("be.visible").click()
            cy.wait(tiempo)
        })
    }


//Editar usuarios con perfil no admin
Editar_user_no_admin(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.get("#settingsDropdown").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(1) > .dropdown-item').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('body > div > main > div > div.btn-container > div.first-btns > button:nth-child(1)').click()
    cy.wait(tiempo)
    cy.get('#Nombre').clear().should("be.visible").type("a")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)
    cy.get('#Apellido').clear().should("be.visible").type("a")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)
    cy.get('#Nombre').clear().should("be.visible").type("Darling")
    cy.wait(tiempo)
    cy.get('#Apellido').clear().should("be.visible").type("Diaz")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)
}

}//final

export default edit_user_no_admin;