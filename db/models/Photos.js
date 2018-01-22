const mongoose = require('mongoose')
const Schema = require('../schema')
const Photos = mongoose.model('User', Schema.PhotosSchema)

module.exports = Photos