const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')
const bodyParser = require('body-parser')


///all users 
router.get('/', async(req, res) => {
  try {
    const users = await User.find({})
    console.log("here we have a problem", users )
    res.json(users)
  } catch (error) {
    console.log("here is a problem",error)
  }
})

//to find a user
router.get('/:userId', (req, res) => {
  const userId = req.params.userId

  User.findById(userId)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
    })
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

//to delete a user
router.delete('/:userId', async (req,res)=> {
  console.log('here from  the delete controller, you hit the route')
  try {
    const user = await User.findByIdAndRemove(req.params.userId)
    console.log(" i found the user and about to delete but user is", req.params.userId)
    console.log("from delete controller: we grabbed the user to delete", user)

    res.json(user)
  }catch(error){
    res.send(error)
  }
})

///to update a user
router.patch('/:userId', (req,res)=> {
  const userId = req.params.userId
  const updateInfo = req.body
  User.findByIdAndUpdate(userId, updateInfo)
  .then(()=> {
    res.json()
  }).catch((error)=>{
    console.log(error)
  })
})

module.exports = router