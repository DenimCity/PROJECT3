const mongoose = require('mongoose')
const Schema = require('../schema')
const Photographer = mongoose.model('Photographer', Schema.PhotographerSchema)

module.exports = Photographer