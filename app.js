const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

// conexión a DB
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ao3w8sh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./routes/routes'));
app.use('/clientes', require('./routes/clientes'));

app.use((req, res, next) => {
    res.status(404).render("404", { titulo: "Página 404" });
});

app.listen(port, () => {
  console.log(`escuchando en el puerto http://localhost:${port}`);
});