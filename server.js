import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'

import { schema } from './schema'

const PORT = 4000
const server = express()



server.get('/', (req, res) => {
  res.send('Hello World')
})

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.listen(PORT, () => console.log(`Graphql sever running at localhost port ${PORT}`))