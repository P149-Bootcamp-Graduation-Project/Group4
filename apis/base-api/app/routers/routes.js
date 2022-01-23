const userRouter = require("./userRoutes").userRouter;
const authRouter = require("./authRoutes").authRouter;
const logElectricConsumptionRouter = require("./logElectricConsumptionRoutes").logElectricConsumptionRouter;
const logTemperatureRouter = require("./logTemperatureRoutes").logTemperatureRouter;
const logAirQualityRouter = require("./logAirQualityRoutes").logAirQualityRouter;
const classRouter = require("./classRoutes").classRouter;
const schoolRoutes = require("./schoolRoutes").schoolRouter;
const sensorRoutes = require("./sensorRoutes").sensorRouter;




module.exports = {
    userRouter,
    authRouter,
    logElectricConsumptionRouter,
    logTemperatureRouter,
    logAirQualityRouter,
    classRouter,
    schoolRoutes,
    sensorRoutes
}