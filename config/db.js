const mongo = require('mongoose')
require('dotenv').config()
// console.log(12 ,process.env.DATA_URL);
mongo.connect(`mongodb://localhost:27017/${process.env.DATA_URL}`)

module.exports = mongo
