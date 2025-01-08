import Resultados_parroquia from '../../support/Proyecto_Christian/Resultados_parroquia.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Resultados_parroquia()

    master.VisitHome()

    it("Validación de usuarios para ingresar a la página", () =>{
        master.credenciales_validas()
        master.busqueda_parroquia()
    })


})// cierre describe