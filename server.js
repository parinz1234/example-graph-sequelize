import express from 'express'



const PORT = 4000
const server = express()



server.get('/', (req, res) => {
  res.send('Hello World')
})


server.listen(PORT, () => console.log(`Graphql sever running at localhost port ${PORT}`))