const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
});

router.get("/admin", (req, res) => {
    res.render("admin", { tituloAdmin: "Bienvenido admin" }); 
});

module.exports = router;