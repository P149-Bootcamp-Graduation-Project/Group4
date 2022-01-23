const express = require("express");
const app = express();
const helmet = require("helmet");
const {serverConfig} = require("./configs/config");
const createConsumer = require('./kafka/consumer');

serverConfig.installServerConfigs();

app.use(helmet());
app.use(express.json());

createConsumer();

app.listen(process.env.APP_PORT, () => {
  console.log("Server Running " + process.env.APP_PORT);
});