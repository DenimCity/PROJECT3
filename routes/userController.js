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


router.delete('/:id', async (req,res)=> {
  console.log('here from  the delete controller')
  try {
    const user = await User.findByIdAndRemove(req.params.id)
    console.log("from delete controller: the delete route", user)
    res.json(user)
  }catch(error){
    res.send(error)
  }
})


module.exports = router