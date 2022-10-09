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

const getRedis = (key) => {
  console.log("entrei get redis");
  return client.get(key);
};

module.exports = { setRedis, getRedis };
