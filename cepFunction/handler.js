const getCep = require("./index");

const cepHandler = async (req, res) => {
  const { cep } = req.params;
  try {
    const data = await getCep(cep);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { cepHandler };
