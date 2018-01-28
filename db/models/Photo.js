const mongoose = require('mongoose')
const Schema = require('../schema')
const Photo = mongoose.model('Photo', Schema.PhotoSchema)

module.exports = Photo