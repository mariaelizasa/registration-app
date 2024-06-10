const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/registration");
});

router.get("/registration", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../../../frontend/" });
});

router.post("/registration", (req, res) => {
  const { email, name, cpf, telephone, password } = req.body;
  if (!email | !name | !cpf | !telephone | !password) {
    return res
      .status(400)
      .json({ error: "Os campos obrigatórios devem ser preenchidos" });
  }
  res.status(200).json({ message: "Dados recebidos com sucesso" });
});

module.exports = router;
