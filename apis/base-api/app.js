const express = require("express");
const app = express();
const helmet = require("helmet");
const routes = require('./app/routers/routes');
const config = require('./app/configs/config');
const { routesConstants } = require('./app/routers/constants');

config.serverConfig.installServerConfigs();

app.use(helmet());
app.use(express.json());
app.use(`${process.env.APP_PREFIX}${routesConstants.USERS}`, routes.userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running " + process.env.APP_PORT);
});