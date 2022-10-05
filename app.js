const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  const { cep } = req.body;
  console.log(cep);
  try {
    const data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return res.json(data.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: "CEP inválido" });
  }
});

app.listen(3000, () => console.log(`Server running on port ${port}`));
