class registro_user_admin_normal {

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


//Registrar usuarios no admin con perfil admin
registro_user_admin_normal(){
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
    cy.get('body > div > main > div > div.btn-container > div.second-btns > button:nth-child(1)').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#Nombre').should("be.visible").type("A")
    cy.wait(tiempo)
    cy.get('#Apellido').should("be.visible").type("A")
    cy.wait(tiempo)
    cy.get('#Email').should("be.visible").type("A@gmail.com")
    cy.wait(tiempo)
    cy.get('#passwordInput').should("be.visible").type("A")
    cy.wait(tiempo)
    cy.get('#Nombre').should("be.visible").clear().type("Karla")
    cy.wait(tiempo)
    cy.get('#Apellido').should("be.visible").clear().type("Rojas")
    cy.wait(tiempo)
    cy.get('#Email').should("be.visible").clear().type("darndv@gmail.com")
    cy.wait(tiempo)
    cy.get('#passwordInput').should("be.visible").clear().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get('#Role').should("be.visible").select('Admin')
    cy.wait(tiempo)
    cy.get('#registerForm > button').should("be.visible").click()
    cy.wait(tiempo)
}

}//final

export default registro_user_admin_normal;