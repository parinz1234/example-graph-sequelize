import { Router } from 'express'
import { graphqlExpress } from 'graphql-server-express'
import { schema } from '../../../schema'

const routers = Router()

routers.use('/', graphqlExpress({
  schema
}))

export default routers



