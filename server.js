import { makeExecutableSchema } from 'graphql-tools'
import { ApolloServer } from "apollo-server-express"
import { ApolloEngine } from "apollo-engine"
import express from 'express'
import typeDefs from './src/schema'
import resolvers from './src/resolvers'
import { prisma } from './prisma/generated/prisma-client'

const app = express()

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  tracing: true,
  cacheControl: true,
  engine: false,
  context: {
    db: prisma
  },
})

server.applyMiddleware({ app })

const engine = new ApolloEngine()

const PORT = process.env.PORT || 4000

engine.listen({
  port: PORT,
  expressApp: app
}, () => {
  console.log(`Server running on port ${PORT}!`) //eslint-disable-line
})
