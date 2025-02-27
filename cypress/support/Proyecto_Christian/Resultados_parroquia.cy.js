class Resultados_parroquia {

    VisitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('http://localhost:8081/'),
            cy.title().should('eq','Elecciones Presidenciales 2024')
            cy.wait(tiempo)
            cy.get(':nth-child(2) > .nav-item > .nav-link').should("be.visible").click()
            cy.wait(tiempo)
        })
    }


//Iniciar sesion
credenciales_validas(){
    let tiempo=1000
    cy.get("#Email").clear().should("be.visible").click().type("ddiaz@teravisiontech.com")
    cy.wait(tiempo)
    cy.get('#Password').clear().should("be.visible").click().type("Lucas2.12")
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .btn').should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .nav-link').should("be.visible").click()
    cy.wait(tiempo)
}

//Búsqueda por Parroquia
busqueda_parroquia(){
    let tiempo=1000
    cy.get('#parroquia').should("be.visible").select('Pq. 23 De Enero')
    cy.wait(tiempo)
    cy.get('#search-button').should("be.visible").click()
    cy.wait(tiempo)
    cy.get(':nth-child(6) > thead > tr > :nth-child(1)').should("be.visible")
    cy.wait(tiempo)
    cy.get('footer').scrollIntoView()
}

}//final

export default Resultados_parroquia;