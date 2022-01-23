const kafka = require("./kafka");

async function createProducer(topic, data) {
    try {
        const producer = kafka.producer();
        console.log("Producer'a bağlanılıyor..");
        await producer.connect();
        console.log("Bağlantı başarılı.");

        const message_result = await producer.send({
            topic: topic,
            messages: [
                {
                    value: JSON.stringify(data),
                    partition: 0
                }
            ]
        });
        console.log("Gonderim işlemi başarılıdır", JSON.stringify(message_result));
        await producer.disconnect();
    } catch (error) {
        console.log("Bir Hata Oluştu", error);
    }
}

module.exports = createProducer;
