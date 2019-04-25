# Kafka lab
https://kafka.apache.org/
Start off by taking a look at this guide: https://learning.oreilly.com/library/view/kafka-the-definitive/9781491936153/ch04.html
driver api here: https://github.com/SOHU-Co/kafka-node 

## Getting started
get latest images
```
docker-compose pull 
```

## Start services
```
docker swarm init
docker stack deploy -c docker-compose.yml kafka-demo
```

## Run demo apps
```
node start ./consumerTest.js
node start ./producerTest.js
```

## Todo for lab
- Implement a simple queue service for simple usecase, website tracking
- Have a producer that writes a random number between 0 and 1000 to the queue, this will simulate seconds spent on page
- Have a consumer continuously read from the stream every minute, and log the number of events that were over 500 seconds