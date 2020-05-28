const mongoose = require('mongoose')
const Mail = mongoose.model('Mail')

const pingHandler = (_, res) => {
    res.send('Healthy')
}

const mailHandler = async (_, res) => {
    let mails, error;

    try {
        mails = await Mail.find()
    } catch (e) {
        error = e
    }

    res.send({
        message: 'Get response from DB',
        service: 'Database service',
        status: 200,
        payload: mails || error
    })
}

const singleMailHandler = async ({params: {id}}, res) => {
    let mail, error;

    try {
        mail = await Mail.findOne({_id: id})
    } catch (e) {
        error = e
    }

    res.send({
        message: 'Get response from DB',
        service: 'Database service',
        status: 200,
        payload: mail || error
    })
}

module.exports = server => {
    server
        .get('/', pingHandler)
        .get('/mails', mailHandler)
        .get('/mails/:id', singleMailHandler)
}
