
const express = require('express')
const router = express.Router()
const User  = require('../db/models/User')
const bodyParser = require('body-parser')



router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
  .catch((err) => console.log(err))
})


module.exports = router