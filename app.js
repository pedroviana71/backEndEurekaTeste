const express = require("express");
const redis = require("redis");
const app = express();
const client = redis.createClient();

const axios = require("axios");

var cors = require("cors");

const port = 3001;

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  const { cep } = req.query;
  try {
    client
      .connect()
      .then(() => {
        console.log("Connected to Redis");
        client.set("visits", "550");
      })
      .catch((err) => {
        console.log(err);
      });
    const teste = await client.get("visits");
    console.log(teste);
    const data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return res.json(data.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: "CEP inválido" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
