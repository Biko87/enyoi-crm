const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.render("clientes", { 
        arrayClientes: [{
            "_id": {
              "$oid": "63ee193babd8f30fd6c50ef0"
            },
            "nombre": "Brayam",
            "apellido": "Martinez",
            "empresa": "DEVCRAYONS",
            "email": "bikobb87@gmail.com",
            "telefono": "123456",
            "__v": 0
          },{
            "_id": {
              "$oid": "63ee1dfd96c2a80256adcc62"
            },
            "nombre": "Piedad",
            "apellido": "Perdomo",
            "empresa": "Distribuidora PYP",
            "email": "distribuidora pyp@mail.com",
            "telefono": "0987654",
            "__v": 0
          },{
            "_id": {
              "$oid": "63f114b553b5172d2e82a29f"
            },
            "nombre": "Victor",
            "apellido": "Martínez",
            "empresa": "DEVCRAYONS",
            "email": "victor@devcrayons.com",
            "telefono": "423423423",
            "__v": 0
          }]
    })
})


module.exports = router;