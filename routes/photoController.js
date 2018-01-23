const express = require('express')
const router = express.Router()
const Photo  = require('../db/models/Photo')
const bodyParser = require('body-parser') 
const User = require('../db/models/User') 





router.get('/', (req,res)=> {
  const userId = req.params.userId
  User.findById(userId)
  .then((user)=> {
    res.json({
      user
    })
  })
})


module.exports = router