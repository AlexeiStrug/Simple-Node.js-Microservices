const path = require('path')

const basePath = path.join(__dirname, '/packages')

module.exports = {
    apps: [{
        name: 'Gateway',
        script: basePath + '/gateway/server.js',
        watch: true,
        env: {
            PORT: 3001,
            SERVICE_DB_PORT: 4001,
            Q_URI: 'amqp://axxwjhse:XFae-zq3RCF3ku1RrbZSdH8uu49wM8vw@hawk.rmq.cloudamqp.com/axxwjhse'
        }
    }, {
        name: 'Database_server',
        script: basePath + '/database_service/server.js',
        watch: true,
        env: {
            PORT: 4001
        }
    }, {
        name: 'Mailing_server',
        script: basePath + '/mailing_service/server.js',
        watch: true,
        env: {
            Q_URI: 'amqp://axxwjhse:XFae-zq3RCF3ku1RrbZSdH8uu49wM8vw@hawk.rmq.cloudamqp.com/axxwjhse'
        }
    }]
};
