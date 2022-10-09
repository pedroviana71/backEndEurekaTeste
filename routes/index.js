const express = require("express");
const router = express.Router();
const axios = require("axios");
const redis = require("redis");
const client = redis.createClient();

try {
  (async () => {
    await client.connect();
    console.log("Connected to Redis");
  })();
} catch (error) {
  console.log(error);
}

router.get("/:cep", async (req, res) => {
  const { cep } = req.params;
  try {
    const data = await client.get(cep);

    if (data) {
      return res.json(JSON.parse(data));
    }

    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    await client.set(cep, JSON.stringify(address.data));
    return res.json(address.data);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "invalid CEP" });
  }
});

module.exports = router;
