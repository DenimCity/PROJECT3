const mongoose = require('mongoose')
const Schema = require('../schema')
const Photo = mongoose.model('User', Schema.PhotosSchema)

module.exports = Photo