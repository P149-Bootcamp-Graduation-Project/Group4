const express = require("express");
const app = express();
const helmet = require("helmet");
const dotenv = require("dotenv");
const createConsumer = require('./kafka/consumer');

dotenv.config();

app.use(helmet());
app.use(express.json());

createConsumer();

app.listen(process.env.APP_PORT, () => {
  console.log("Server Running " + process.env.APP_PORT);
});