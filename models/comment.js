let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
//let nodeifyit = require('nodeifyit')
let nodeify = require('bluebird-nodeify')

require('songbird')

let commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Comment', commentSchema)
