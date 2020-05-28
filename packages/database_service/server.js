const app = require('express')()
const bodyParser = require('body-parser')

const config = require('./config')
const {port} = config


app.use(bodyParser.json())

require('./dbutil')(config)
require('./routes/get')(app)
require('./routes/post')(app)

app.listen(port, () => {
    console.log(`Listening ${port} port.`)
})

