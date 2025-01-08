import Validacion_login from '../../support/Proyecto_Christian/Validacion_login.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Validacion_login()

    master.VisitHome()

    it("Validación de usuarios para ingresar a la página", () =>{
        master.credenciales_vacias()
        master.credenciales_invalidas()
        master.credenciales_validas()
        master.cerrar_sesion()
    })


})// cierre describe