const express = require("express");
const app = express();
const router = require("./routes/cep");
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use("/", (req, res) => {
  res.send("API is working");
});

const port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
