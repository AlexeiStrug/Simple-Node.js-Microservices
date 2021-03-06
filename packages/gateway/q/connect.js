const ampq = require('amqplib/callback_api')
const {q: {uri}} = require('../config')

const q = 'test_q'
let channel = null

ampq.connect(uri, (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err)

        ch.assertQueue(q, {durable: true})

        channel = ch;

    })
})

const pushToQ = msg => {
    if (!channel) setTimeout(pushToQ(msg), 1000)
    channel.sendToQueue(q, new Buffer.from(msg))

    return {m: 'done'}
}

module.exports = {
    pushToQ
}
