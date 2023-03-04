const express = require("express");
const router = express.Router();

// arrayClientes

const Cliente = require('../models/cliente');

router.get('/', async (req, res) => {
    try {
        const arrayClientes = await Cliente.find();
        // console.log(arrayClientes)
        res.render("clientes", {
            listaClientes: "Aquí irán todas las mascotas",
            arrayClientes
        })
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;