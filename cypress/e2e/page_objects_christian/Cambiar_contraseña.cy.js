import Cambiar_contraseña from '../../support/Proyecto_Christian/Cambiar_contraseña.cy'
/// <reference types="cypress" />

describe('Page objects Models', () =>{

    const master=new Cambiar_contraseña()

    master.VisitHome()

    it("Validación de cambio de constraseña", () =>{
        master.Cambiar_contraseña()

    })


})// cierre describe