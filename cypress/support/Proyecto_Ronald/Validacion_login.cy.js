class validacion_login {

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


//credenciales vacias
credenciales_vacias (){
    let tiempo=1000
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
}

//credenciales invalidas
credenciales_invalidas(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("ddiaz@gmail.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
}

//credenciales validas
credenciales_validas(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get("#passwordInput").clear().should("be.visible").click().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get("#loginForm > button").should("be.visible").click()
    cy.wait(tiempo)
}
cerrar_sesion(){
    let tiempo=1000
    cy.get("#settingsDropdown").should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .dropdown-item').should("be.visible").click()
    cy.wait(tiempo)
}

}//final

export default validacion_login;