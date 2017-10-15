import express from 'express'
import { graphiqlExpress } from 'graphql-server-express'
import apiV1 from './api/v1'

const PORT = 4000
const server = express()

server.use('/v1', apiV1)

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/v1/graphql'
}))

server.listen(PORT, () => console.log(`Graphql sever running at localhost port ${PORT}`))