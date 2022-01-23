const createProducer = require('../kafka/producer');

exports.postAirQualityLog = async (req, res) => {
    try {
        const data = req.body;
        await createProducer('airQualityLog', data);
        res.json({data: true, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (err) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}

exports.postTemperatureLog = async (req, res) => {
    try {
        const data = req.body;
        await createProducer('temperatureLog', data);
        res.json({data: true, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (err) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}

exports.postElectricConsumptionLog = async (req, res) => {
    try {
        const data = req.body;
        await createProducer('electricConsumptionLog', data);
        res.json({data: true, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (err) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}