/* eslint no-console: 0 */
const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const PageAPI = require('./datasources/page')
const infoTypeDef = require('./datasources/page/home/info/schema')
const headerTypeDef = require('./datasources/page/home/header/schema')
const contentTypeDef = require('./datasources/page/home/content/schema')
const { queryTypeDef, pageConnectionTypeDef, pageTypeDef } = require('./schema')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({
  typeDefs: [queryTypeDef, pageTypeDef, pageConnectionTypeDef, infoTypeDef, headerTypeDef, contentTypeDef],
  resolvers,
})

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    pageAPI: new PageAPI(),
  }),
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
