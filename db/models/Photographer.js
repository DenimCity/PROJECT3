const mongoose = require('mongoose')
const Schema = require('../schema')
const Photographer = mongoose.model('User', Schema.PhotographerSchema)

module.exports = Photographer