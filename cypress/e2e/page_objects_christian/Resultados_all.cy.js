import Resultados_all from '../../support/Proyecto_Christian/Resultados_all.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_all()

    master.VisitHome()

    it("Validación de usuarios para ingresar a la página", () =>{
        master.credenciales_validas()
        master.busqueda_all()
    })


})// cierre describe