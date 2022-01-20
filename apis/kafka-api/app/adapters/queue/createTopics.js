const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
 
const topicsToCreate = [{
  topic: 'topicTemperature',
  partitions: 0
},
{
  topic: 'topicAir',
  partitions: 0
},
{
  topic: 'topicElectricity',
  partitions: 0
}]
 
client.createTopics(topicsToCreate, (error, result) => {
  // result is an array of any errors if a given topic could not be created
  console.log("Cerate Topics...")
});