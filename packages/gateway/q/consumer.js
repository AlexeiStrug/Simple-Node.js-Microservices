const ampq = require('amqplib/callback_api')

const q = 'test_q'

ampq.connect('amqp://axxwjhse:XFae-zq3RCF3ku1RrbZSdH8uu49wM8vw@hawk.rmq.cloudamqp.com/axxwjhse', (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err)

        ch.assertQueue(q, {durable: true})
        ch.consume(q, msg => {
            console.log('I got a message ', msg.content.toString())
        }, {noAck: true})
    })
})
