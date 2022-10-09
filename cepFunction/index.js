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

const setRedis = async (key, value) => {
  client.set(key, value);
};

const getRedis = async (key) => {
  return client.get(key);
};

const getCep = async (cep) => {
  const data = await getRedis(cep);

  try {
    if (data) {
      return JSON.parse(data);
    }
    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setRedis(cep, JSON.stringify(address.data));
    return address.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCep;
