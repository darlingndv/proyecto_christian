import Resultados_estado from '../../support/Proyecto_Christian/Resultados_estado.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_estado()

    master.VisitHome()

    it("Validación de usuarios para ingresar a la página", () =>{
        master.credenciales_validas()
        master.busqueda_estado()
    })


})// cierre describe