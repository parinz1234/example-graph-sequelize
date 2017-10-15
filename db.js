import Sequelize from 'sequelize'
import redis from 'redis'

const mySQL = new Sequelize(
  'playplay',
  'root',
  '1234',
  {
    host: '192.168.99.100',
    dialect: 'mysql',
    timezone: '+07:00'
  }
)

const redis = redis.createClient({
  host: '192.168.99.100',
  port: 6380
})

export {
  mySQLConnection,
  redis
}