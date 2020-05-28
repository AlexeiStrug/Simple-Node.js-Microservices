const app = require('express')()
const bodyParser = require('body-parser')
const {port} = require('./config')
const schema = require('./data/schema')

schema.applyMiddleware({app})

app
    .use(bodyParser.json())
    .listen(port, () => {
        console.log(`Listening ${port} port.`)
    })

