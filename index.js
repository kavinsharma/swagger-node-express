const express = require("express");
const app = express();
const port = 8000;
const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Inf4mation Documentaion listening on port ${port}`);
});
