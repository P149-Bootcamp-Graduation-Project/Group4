const kafka = require("./kafka");
const { postgresConnection, mongo_client } = require('../db/db');

async function createConsumer() {
    try {

        const consumer = kafka.consumer({
            groupId: "group3"
        });


        console.log("Consumer'a bağlanılıyor..");
        await consumer.connect();
        console.log("Bağlantı başarılı.");

        // Consumer Subscribe..
        await consumer.subscribe({
            topic: "airQualityLog",
            fromBeginning: true
        });

        // Consumer Subscribe..
        await consumer.subscribe({
            topic: "electricConsumptionLog",
            fromBeginning: true
        });

        // Consumer Subscribe..
        await consumer.subscribe({
            topic: "temperatureLog",
            fromBeginning: true
        });

        await consumer.run({
            autoCommit: true,
            eachMessage: async result => {
                const data = JSON.parse(result.message.value);
                console.log(data);
                if (result.topic === "airQualityLog") {
                    await postgresConnection.db.query('insert into patika.group3.log_air_quality (school_id, class_id, sensor_id, sensor_data, read_at) ' +
                        `values(${Number(data.id)}, ${Number(data.id)}, ${Number(data.id)}, '${data.sensor_data}', to_timestamp(${Number(data.time_stamp)} / 1000.0))`,)
                        .then()
                        .catch(async err => {
                            console.log(err.message);
                            await mongo_client
                                .db("test")
                                .collection('group4')
                                .insertOne({
                                    "topic": result.topic,
                                    "data": data,
                                    "error": err,
                                    "errorMessage": err.message,
                                    "created_at": Date.now(),
                                    "is_solved": 0
                                })
                        });
                }
                else if (result.topic === "electricConsumptionLog") {
                    await postgresConnection.db.query('insert into patika.group3.log_electricity_consumption (school_id, class_id, sensor_id, sensor_data, read_at) ' +
                        `values(${Number(data.id)}, ${Number(data.id)}, ${Number(data.id)}, '${data.sensor_data}', to_timestamp(${Number(data.time_stamp)} / 1000.0))`)
                        .catch(async err => {
                            console.log(err.message)
                            await mongo_client
                                .db("test")
                                .collection('group4')
                                .insertOne({
                                    "topic": result.topic,
                                    "data": data,
                                    "error": err,
                                    "errorMessage": err.message,
                                    "created_at": Date.now(),
                                    "is_solved": 0
                                })
                        });
                }
                else if (result.topic === "temperatureLog") {
                    await postgresConnection.db.query('insert into patika.group3.log_temperature (school_id, class_id, sensor_id, sensor_data, read_at) ' +
                        `values(${Number(data.id)}, ${Number(data.id)}, ${Number(data.id)}, '${data.sensor_data}', to_timestamp(${Number(data.time_stamp)} / 1000.0))`,)
                        .catch(async err => {
                            await mongo_client
                                .db("test")
                                .collection('group4')
                                .insertOne({
                                    "topic": result.topic,
                                    "data": data,
                                    "error": err,
                                    "errorMessage": err.message,
                                    "created_at": Date.now(),
                                    "is_solved": 0
                                })
                        });
                }
            }
        });
    } catch (error) {
        console.log("Bir Hata Oluştu", error);
    }
}

module.exports = createConsumer;