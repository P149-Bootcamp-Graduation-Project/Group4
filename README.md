
# Energy Tracking Systems for Public Schools

With this project, it is aimed to increase energy saving in public schools. It is aimed to read the data and make sense of them by processing them through sensors that transmit air quality, temperature and electricity consumption values to be placed in the classrooms of the schools.
### P149 Patika.dev Inavitas Node.js Graduation Project Group3

This project has a reader-api to read all datas in the postgres
tables and consumer, producer api to get all datas from sensors
by using IoT principles and error-logger api to store errors that are catched on consumer api


## Project Structure

![ProjectStructure](https://i.ibb.co/B67HSLs/mimari.png)


## 🛠 Technology Stacks

**Project Management:** GerritHub, GitHub, JIRA/Atlassian

**Server:** Node, Express, Redis, PostgreSQL, MongoDB, Kafka

**Libraries:** kafkajs, pg-promise, mongodb, redis, jsonwebtoken, http-status-codes, bcrypt



## Run Locally

Clone the project

```bash
  git clone https://github.com/P149-Bootcamp-Graduation-Project/Group4
```

Go to the each api file

```bash
  cd api
```

Install dependencies on each api

```bash
  npm install
```

Start the server on each api

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### for base-api

    APP_PORT=5000
    APP_PREFIX="/api/v1"

    PG_DB_HOST="88.198.26.82"
    PG_DB_PORT=5432
    PG_DB_NAME="patika"
    PG_DB_USERNAME="group3"
    PG_DB_PASSWORD="Password1"

    REDIS_HOST=88.198.26.82
    REDIS_PORT=6379
    REDIS_PASSWORD=dd3j5sKmUHVD6xpG
    REDIS_DB_INDEX=3
    REDIS_EXPIRATION_TIME=3600

    JWT_SECRET=secret
    JWT_ACCESS_TOKEN_TIME=30m
    JWT_REFRESH_TOKEN_TIME=30d

    BCRYPT_ROUND=10

#### for logger-api

    APP_PREFIX=/api/v1
    APP_PORT=5001
    MONGO_DEFAULT_DB=group4
    MONGO_PASS=tDVRDyxJbdjF7k9G

#### for producer-api
    KAFKA_HOST=127.0.0.1
    KAFKA_PORT=9092
    APP_PORT=3002
#### for consumer-api
    KAFKA_HOST=127.0.0.1
    KAFKA_PORT=9092

    APP_PORT=3003

    PG_DB_HOST="88.198.26.82"
    PG_DB_PORT=5432
    PG_DB_NAME="patika"
    PG_DB_USERNAME="group3"
    PG_DB_PASSWORD="Password1"

    MONGO_DEFAULT_DB=group4
    MONGO_PASS=tDVRDyxJbdjF7k9G
## Authors

- [@muslumcanozata](https://github.com/muslumcanozata)
- [@semanuraltintas](https://github.com/semanuraltintas)
- [@AydinSinan](https://github.com/AydinSinan)
- [@nurayklc](https://github.com/nurayklc/)





## References

- [Layered Structure for ExpressJS](https://github.com/yasinfmd/youtubeSourceCode/tree/main/expresejs%20katmanl%C4%B1%20mimari%20basic)
- [JWT Authentication w/ Redis](https://github.com/Sid-Shanker/jwt-auth-nodejs)
- [NodeJS-Skeleton](https://github.com/ivanbarayev/nodejs-skelton)
- [Go-Random-Generator](https://github.com/ivanbarayev/go-random-generator)
- [Kafkajs](https://github.com/tulios/kafkajs)
- [Mongodb Documentation](https://docs.mongodb.com/manual/introduction/)
- [GerritHub](http://gerrithub.io/)
- [Jira | Atlassian](https://www.atlassian.com/software/jirae)
