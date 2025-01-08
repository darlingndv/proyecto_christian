import Resultados_municipio from '../../support/Proyecto_Christian/Resultados_municipio.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_municipio()

    master.VisitHome()

    it("Validación de usuarios para ingresar a la página", () =>{
        master.credenciales_validas()
        master.busqueda_municipio()
    })


})// cierre describe