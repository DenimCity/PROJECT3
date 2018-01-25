
const express = require('express')
const router = express.Router()
const User   = require('../db/models/User')
const bodyParser = require('body-parser')




router.get('/', async (req, res) => {
  try{
    const users = await User.find({})
    res.json(users)
  } catch (error){
    console.log(error)
  }})


//to create new user
router.post('/api/users',  async (req, res)=> {
  
try {
  ///take the information from the form and save it to the variable newUser
  const newUser = new User(req.body.user)
  console.log(req.body)
  ///then save that new user and save tha info into a variable we can use to console
  //to that the user was saved
  const saved = await newUser.save()
  res.json(saved)
}catch(error){
  res.send(error)
}})









// router.patch('/:userId', async (req,res)=>{
//   const userId = req.params.userId
//   const updatedUserInfo = req.body
//   User.findByIdAndUpdate(userId, updatedUserInfo)
//   .then(()=>{
//     res.direct(`/users/${userId}`)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// })


// router.delete ('/:id', async (req, res) => {
   
//   try{ // Find the user
//   const user = await User.findById(req.params.id).remove()
//    const users = await User.find({})
//   //Save the updated change
//   res.send(users)
//   } catch (error){
//       res.send(error)
//   } 
// })



module.exports = router