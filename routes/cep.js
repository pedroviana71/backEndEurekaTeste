const express = require("express");
const router = express.Router();
const redis = require("redis");
const client = redis.createClient();
const axios = require("axios");

client
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((err) => {
    console.log(err);
  });

router.get("/:cep", async (req, res) => {
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
    return res.json({ error });
  }
});

module.exports = router;
