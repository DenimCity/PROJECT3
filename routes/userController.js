const express = require('express')
const router = express.Router()
const User = require('../db/models/User')
const bodyParser = require('body-parser')

router.get('/', async(req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.log(error)
  }
})

//to create new user
router.post('/', async(req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    console.log(error)
  }
})


// //to delete the user 
// router.delete('/:id', async(req, res) => {
//   try {
//     // Find the user const
//     user = await User
//       .findById(req.params.id)
//       .remove()
//     const users = await User.find({})
//     res.send(users)
//   } catch (error) {
//     res.send(error)
//   }
// })

module.exports = router