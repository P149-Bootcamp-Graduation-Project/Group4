const express = require("express");
const app = express();
const helmet = require("helmet");
const routes = require('./app/routers/routes');
const config = require('./app/configs/config');
const { routesConstants, authConstants} = require('./app/routers/constants');

config.serverConfig.installServerConfigs();

app.use(helmet());
app.use(express.json());

app.use(`${process.env.APP_PREFIX}${routesConstants.USERS}`, routes.userRouter);
app.use(`${process.env.APP_PREFIX}${routesConstants.SCHOOLS}`, routes.schoolRoutes);
app.use(`${process.env.APP_PREFIX}${routesConstants.SENSORS}`, routes.sensorRoutes);
app.use(`${process.env.APP_PREFIX}${routesConstants.CLASSES}`, routes.classRouter);
app.use(`${process.env.APP_PREFIX}${routesConstants.LOG_TEMPERATURES}`, routes.logTemperatureRouter);
app.use(`${process.env.APP_PREFIX}${routesConstants.LOG_AIR_QUALITY}`, routes.logAirQualityRouter);
app.use(`${process.env.APP_PREFIX}${routesConstants.LOG_ELECTRIC_CONSUMPTION}`, routes.logElectricConsumptionRouter);
app.use(`${process.env.APP_PREFIX}${authConstants.TOKEN}`, routes.authRouter);


app.listen(process.env.APP_PORT, () => {
    console.log("Server Running " + process.env.APP_PORT);
});