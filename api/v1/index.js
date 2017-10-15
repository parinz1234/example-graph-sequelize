import { Router } from 'express'
import rest from './rest'
import graphql from './graphql'
import bodyParser from 'body-parser'
const routers = Router()

routers.use('/rest', rest)
routers.use('/graphql', bodyParser.json(), graphql)

export default routers


