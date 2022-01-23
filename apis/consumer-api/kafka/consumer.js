const kafka = require("./kafka");

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
                console.log(
                    `Gelen Mesaj ${result.message.value}, Par => ${result.partition}`
                );
            }
        });
    } catch (error) {
        console.log("Bir Hata Oluştu", error);
    }
}

module.exports = createConsumer;