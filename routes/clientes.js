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
});

// Crear Cliente
router.get('/crear-cliente', (req, res)=> {
    res.render('crear-cliente');
});

router.post('/', async (req, res) => {
    const body = req.body
    try {
        const clienteDB = new Cliente(body)
        await clienteDB.save()
        res.redirect('/clientes')
    } catch (error) {
        console.log('error', error)
    }
});

// Leer único documento
router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const clienteDB = await Cliente.findOne({ _id: id })
        // console.log(clienteDB)
        res.render('detalle', {
            cliente: clienteDB,
            error: false
        })
    } catch (error) {
        console.log('erroooooooooorrr', error)
        res.render('detalle', {
            error: true,
            mensaje: 'Ese cliente no se existe'
        })
    }
});

// Eliminar
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    // console.log('id desde backend', id)
    try {

        const clienteDB = await Cliente.findByIdAndDelete({ _id: id });
        // console.log(clienteDB)

        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/mascotas')
        if (!clienteDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
});

// Editar
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // console.log(id)
    // console.log('body', body)

    try {
        const clienteDB = await Cliente.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(clienteDB)
        res.json({
            estado: true,
            mensaje: 'Cliente Editado Exitosamente'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Opss Hubo Un Error'
        })
    }
});

module.exports = router;