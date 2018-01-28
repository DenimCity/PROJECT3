const express = require('express')
const router = express.Router()
const Photo  = require('../db/models/Photo')
const bodyParser = require('body-parser') 
const User = require('../db/models/User') 

///all photos 
router.get('/', async(req, res) => {
  try {
    const photos = await Photo.find({})
    res.json(photos)
  } catch (error) {
    console.log(error)
  }
})

//to find a phot
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


//to create new photo
router.post('/', async(req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    console.log(error)
  }
})

//to delete a photos
router.delete('/:userId/delete', async (req,res)=> {
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

///to update a photo
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