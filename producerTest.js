const KafkaProducer = require('./KafkaProducer.js');

const producer = new KafkaProducer('myTopic');

producer.connect(() => {
  setInterval(() => {
    producer.send('Hello world!');
  }, 3000);
});