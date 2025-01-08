class listar_user_admin {

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


//Listar usuarios con perfil admin
listar_user_admin(){
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
}

}//final

export default listar_user_admin;