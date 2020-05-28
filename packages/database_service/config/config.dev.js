const {PORT} = process.env;

module.exports = {
    port: PORT || 4000,
    mongoURI: 'mongodb://admin:admin@cluster0-shard-00-00-i9yid.mongodb.net:27017,cluster0-shard-00-01-i9yid.mongodb.net:27017,cluster0-shard-00-02-i9yid.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
}
