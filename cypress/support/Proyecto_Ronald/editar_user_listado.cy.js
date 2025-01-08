class editar_user_listado {

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


//Editar el primer usuario del listado  con perfil admin
editar_user_listado(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("adminuser@gmail.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("AdminUser93.")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
    cy.get("#settingsDropdown").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(1) > .dropdown-item').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('body > div > main > div.profile-container > div.btn-container > div.second-btns > button:nth-child(2)').should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(1) > :nth-child(5) > .btn').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#Nombre').clear().should("be.visible").type("a")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)
    cy.get('#Apellido').clear().should("be.visible").type("a")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)
    cy.get('#Nombre').clear().should("be.visible").type("Maria")
    cy.wait(tiempo)
    cy.get('#Apellido').clear().should("be.visible").type("Suarez")
    cy.wait(tiempo)
    cy.get('#updateUserForm > button').click()
    cy.wait(tiempo)


//Editar el segundo usuario del listado  con perfil admin
    cy.get('body > div > main > div.profile-container > div.btn-container > div.second-btns > button:nth-child(2)').should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(2) > :nth-child(5) > .btn > .fas').should("be.visible").click()
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
    cy.get('body > div > main > div.profile-container > div.btn-container > div.second-btns > button:nth-child(2)').should("be.visible").click()
    cy.wait(tiempo)
}


}//final

export default editar_user_listado;