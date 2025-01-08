class Perfil_user {

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




//Perfil usuario con user admin
credenciales_validas(){
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
    cy.get("#settingsDropdown").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .dropdown-item').should("be.visible").click()
    cy.wait(tiempo)
}

//Perfil usuario con user no admin
credenciales_validas_normal(){
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
    
}

}//final

export default Perfil_user;