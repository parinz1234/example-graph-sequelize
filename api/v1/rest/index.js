import { Router } from 'express'

const routers = Router()

routers.get('/', (req, res) => res.send('Response from rest root'))

export default routers
