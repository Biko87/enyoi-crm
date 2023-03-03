const express = require("express");
const app = express();
const port = 3500;

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