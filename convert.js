function convertOrigin(origin) {
    let destino = {
        "menu": []
    }
    origen.participantFigurePersonalData.map(
        (e,index) => {
            destino.menu[index] = {
                titulo: '',
                contenido: ''
            }
          let contenidoContactForms = []
          e.participantFigureContactForms.map((c)=> {
              contenidoContactForms.push({
                   "tipo": "block", "titulo": c.description, "valor": c.value 
              })
              
          })
              destino.menu[index].titulo = e.selector;
              destino.menu[index].contenido = {
                  "titulo": e.selector,
                  "cuerpo":[
                      {
                          "posicion": 1,
                          "titulo": "Datos Personales",
                          "tipo": "agrupacion",
                          "bloques": [
                            {
                              "tipo": "threeBlock",
                              "contenido": [
                                { "tipo": "block", "titulo": "Nombre", "valor": e.name },
                                { "tipo": "block", "titulo": "Sexo", "valor": e.gender },
                                { "tipo": "block", "titulo": "Permiso", "valor": e.licenseType }
                              ]
                            },
                            {
                              "tipo": "threeBlock",
                              "contenido": [
                                { "tipo": "block", "titulo": "NIF", "valor": e.nif },
                                { "tipo": "block", "titulo": "Estado Civil", "valor": e.civilStatus },
                                { "tipo": "block", "titulo": "Fecha Carnet", "valor": e.licenseDate }
                              ]
                            },
                            {
                              "tipo": "threeBlock",
                              "contenido": [
                                { "tipo": "block", "titulo": "Nacimiento", "valor": e.birthDate },
                                { "tipo": "block", "titulo": "Tipo", "valor": e.type },
                                { "tipo": "block", "titulo": "Nacionalidad", "valor": e.nationality }
                              ]
                            }
                          ]
                        },
                        {
                          "posicion": 2,
                          "titulo": "Domicilios",
                          "tipo": "agrupacion",
                          "bloques": [
                            {
                              "tipo": "threeBlock",
                              "contenido": [
                                { "tipo": "select", "titulo": "Tipo", "valores": e.participantFigureAddressList[0].dsType },
                                { "tipo": "block", "titulo": "Provincia", "valor": e.participantFigureAddressList[0].province },
                                { "tipo": "block", "titulo": "Localidad", "valor": e.participantFigureAddressList[0].location }
                              ]
                            },
                            {
                              "tipo": "threeBlock",
                              "contenido": [
                                { "tipo": "block", "titulo": "", "valor": "" },
                                { "tipo": "block", "titulo": "Dirección", "valor": e.participantFigureAddressList[0].fullAddress },
                                { "tipo": "block", "titulo": "Apartado de correos", "valor": e.participantFigureAddressList[0].postalCode }
                              ]
                            },
                            {
                              "tipo": "threeBlock",
                              "contenido": [
                                { "tipo": "block", "titulo": "", "valor": "" },
                                { "tipo": "block", "titulo": "Código Postal", "valor": "08130" },
                                { "tipo": "block", "titulo": "", "valor": "" }
                              ]
                            }
                          ]
                        },
                        {
                          "posicion": 3,
                          "titulo": "Formas de contacto",
                          "tipo": "agrupacion",
                          "bloques": [
                            {
                              "tipo": "threeBlock",
                              "contenido": contenidoContactForms
                            }
                          ]
                        }
                  ]
              } 
  
          
        }
    )
    
    return destino
  }
