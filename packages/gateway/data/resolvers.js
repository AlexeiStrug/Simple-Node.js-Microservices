const axios = require('axios')
const {serviceDatabase: {port}} = require('../config')

const {pushToQ} = require('../q/connect')

const hostname = `http://localhost`
const databasetUrl = `${hostname}:${port}`;

const mockMails = [
    {
        subject: 'My First Mail',
        receiver: 'test@test.com',
        content: 'hello world 1!'
    },
    {
        subject: 'My Second Mail',
        receiver: 'test@test.com',
        content: 'hello world 2!'
    }
]

const get = async path => (await axios.get(`${databasetUrl}/${path}`)).data.payload

const post = async (path, body) => (await axios.post(`${databasetUrl}/${path}`, {...body})).data.payload

const getMails = async () => {
    return (await axios.get(`${databasetUrl}/mails`)).data.payload
}

const getMail = async id => {
    return (await axios.get(`${databasetUrl}/mail/${id}`)).data.payload
}

const postMail = async body => {
    return (await axios.post(`${databasetUrl}/mails`, {...body})).data.payload
}

// module.exports = {
//     Query: {
//         mails: () => getMails(),
//         mail: (_, {id}) => getMail(id)
//     },
//     Mutation: {
//         mail: (_, args) => postMail(args)
//
//     }
// }


module.exports = {
    Query: {
        mails: () => get('mails'),
        mail: (_, {id}) => get(`mail/${id}`)
    },
    Mutation: {
        mail: (_, args) => {
            let result
            let error

            try {
                result = post(`mails`, args)
            } catch (e) {
                error = e
            }

            pushToQ(JSON.stringify(args))

            return result || error

        }

    }
}
