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


router.patch()

// router.post('/', (req,res)=>{   const newUser = req.body
// User.create(newUser) }).catch((error)=> {   console.log(error) })
// router.patch('/:userId', async (req,res)=>{   const userId =
// req.params.userId   const updatedUserInfo = req.body
// User.findByIdAndUpdate(userId, updatedUserInfo)   .then(()=>{
// res.direct(`/users/${userId}`)   })   .catch((error)=>{ console.log(error) })
// }) 


router.delete ('/:id', async (req, res) => { 
  try{ 
  // Find the user const
user = await User.findById(req.params.id).remove()    
const users = await User.find({}) 
res.send(users)   
} catch (error){
res.send(error)   
} })

module.exports = router