const resolvers = require('./resolvers')
const {ApolloServer, gql} = require('apollo-server-express')

const typeDefs = `
    type Query {
        mails: [Mail]
        mail(id: String!): Mail
    }
    
    type Mutation {
        mail(subject: String!, receiver: String!, content: String!): Mail
    }
    
    type Mail {
        subject: String
        receiver: String
        content: String
        _id: String!
    }
`

module.exports = new ApolloServer({typeDefs, resolvers})
