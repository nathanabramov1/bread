// how to use: run this file by typing "node seed/bread.js"

const data = `[
    {
      "name": "Rye",
      "hasGluten": true,
      "baker":"Phoebe",
      "image": "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "name": "French",
      "hasGluten": true,
      "baker":"Monica",
      "image": "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      "name": "Gluten-Free",
      "hasGluten": false,
      "baker":"Phoebe",
      "image": "https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "name": "Pumpernickel",
      "hasGluten": true,
      "baker":"Chandler",
      "image": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "name": "Wonder Bread",
      "hasGluten": true,
      "baker": "Joey",
      "image": "https://m.media-amazon.com/images/I/41mHGfEASmL.jpg"
    }
  ]`

const mongoose = require('mongoose')
require('dotenv').config()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

const seed = async () => {
  const clear = await Bread.deleteMany({})
  const insertedBreads = await Promise.all(
    JSON.parse(data).map(async breadObject => {
      const foundBaker = await Baker.findOne({name: breadObject.baker})
      breadObject.baker = foundBaker._id
      return await Bread.create(breadObject)
    })
  )
  console.log(insertedBreads)
  return insertedBreads
}

const main = async () => {

    // MONGOOSE CONNECT
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => console.log("connected at:", process.env.MONGO_URI))
    .catch(err => console.log(err))

    await seed()

    mongoose.connection.close()

}

main()