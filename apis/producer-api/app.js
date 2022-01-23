const express = require("express");
const app = express();
const helmet = require("helmet");
const sensorController = require('./controller/sensorController');
const dotenv = require("dotenv");

dotenv.config()


app.use(helmet());
app.use(express.json());

app.post('/air', sensorController.postAirQualityLog);
app.post('/temperature', sensorController.postTemperatureLog);
app.post('/electricity', sensorController.postElectricConsumptionLog);

app.listen(process.env.APP_PORT, () => {
  console.log("Server Running " + process.env.APP_PORT);
});