const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.use("/", (req, res) => {
  res.send("API is working");
});

const port = process.env.PORT || 3001;

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

module.exports = server;
