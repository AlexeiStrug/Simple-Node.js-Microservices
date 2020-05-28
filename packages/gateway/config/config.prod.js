const {PORT, SERVICE_DB_PORT, Q_URI} = process.env;

module.exports = {
    port: PORT || 3000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 4000
    },
    q: {
        uri: Q_URI || 'amqp://axxwjhse:XFae-zq3RCF3ku1RrbZSdH8uu49wM8vw@hawk.rmq.cloudamqp.com/axxwjhse'
    }
}
