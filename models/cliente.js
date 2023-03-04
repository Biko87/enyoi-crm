const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nombre:  String,
  apellido: String,
  empresa: String,
  email: String,
  telefono: String
});

// Crear el modelo
const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;