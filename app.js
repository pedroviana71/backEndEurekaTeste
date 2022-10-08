const express = require("express");
const app = express();
const axios = require("axios");
var cors = require("cors");

const redis = require("redis");
const client = redis.createClient();

const port = 3001;

app.use(cors());
app.use(express.json());

client
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api", async (req, res) => {
  res.send("API is working");
});

app.get("/api/:cep", async (req, res) => {
  const { cep } = req.params;
  const data = await client.get(cep);
  try {
    if (data) {
      return res.send(JSON.parse(data));
    }
    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    client.set(cep, JSON.stringify(address.data));
    return res.json(address.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: "CEP inválido" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
