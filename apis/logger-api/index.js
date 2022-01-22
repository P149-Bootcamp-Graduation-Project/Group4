const express = require("express");
const app = express();
const helmet = require("helmet");
const router = require('./app/routes/route');
const config = require('./app/configs/config');
config.serverConfig.installServerConfigs();

app.use(helmet());
app.use(express.json());
app.use(`${process.env.APP_PREFIX}`, router);

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running " + process.env.APP_PORT);
});