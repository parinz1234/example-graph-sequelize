import Sequelize from 'sequelize'
import { resolver } from 'graphql-sequelize'
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList
} from 'graphql'


const mySQLConnection = new Sequelize(
  'playplay',
  'root',
  '1234',
  {
    host: '192.168.99.100',
    dialect: 'mysql',
    timezone: '+07:00',
    logging: false 
  }
)


let Banner = mySQLConnection.define('banners', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true
  },
  banner_img: {
    type: Sequelize.DataTypes.STRING
  },
  highlight_mobile: {
    type: Sequelize.DataTypes.STRING
  },
  banner_url: {
    type: Sequelize.DataTypes.STRING
  },
  banner_type: {
    type: Sequelize.DataTypes.STRING
  },
  createdAt: {
    type: Sequelize.DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DataTypes.DATE,
    field: 'updated_at',
  },
  deletedAt: {
    type: Sequelize.DataTypes.DATE,
    field: 'deleted_at',
  }
})


let bannerType = new GraphQLObjectType({
  name: 'Banner',
  description: 'A Banner',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    banner_img: {
      type: GraphQLString
    },
    highlight_mobile: {
      type: GraphQLString
    },
    banner_url: {
      type: GraphQLString
    },
    banner_type: {
      type: GraphQLString
    }
  }
})

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      banners: {
        type: new GraphQLList(bannerType),
        args: {
          id: { type: GraphQLInt }
        },
        async resolve(parentValue, args) {
          let bannerList = []
          if (args.id == 1) {
            bannerList = await Banner.findAll({ where: { id: args.id } })
          } else {
            bannerList = await Banner.findAll()
          }
          return bannerList
        }
      }
    }
  })
})


// let schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       banners: {
//         // The resolver will use `findOne` or `findAll` depending on whether the field it's used in is a `GraphQLList` or not.
//         type: new GraphQLList(bannerType),
//         args: {
//           id: {
//             description: 'id of the user',
//             type: new GraphQLNonNull(GraphQLInt)
//           },
//           // An arg with the key limit will automatically be converted to a limit on the target
//           limit: {
//             type: GraphQLInt
//           },
//           // An arg with the key order will automatically be converted to a order on the target
//           order: {
//             type: GraphQLString
//           }
//         },
//         resolve: resolver(Banner)
//       }
//     }
//   })
// });


export {
  schema
}