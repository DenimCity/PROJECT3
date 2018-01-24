
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
  }
})

router.get('/something', (req, res) => {
  res.send('hello')
})

// router.post('/', (req, res)=> {
//   const newUser = req.body 
//     console.log(`new user ${newUser}`)
//     User.create(newUser)
//     .then(() => {
//       //going to user React to redirect
//       // res.redirect('/users')
//     })
//     .catch((error) => {
//       console.log(error)
//     })

//   })

// router.get('/:userId', (req, res) => {
//   const userId = req.params.userId

//   User.findById(userId)
//     .then((user) => {
//       res.json('users/show', {
//         user
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })


// router.put('/:userId', (req, res)=>{
//   const userId = req.params.userId
//   const updatedUserInfo = req.body

//     User.findByIdAndUpdate(userId, updatedUserInfo)
//     .then(()=>{
//       ///using React for this function
//         // res.redirect(`/users/${userId}`)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// router.get('/:userId/edit', (req, res) => {
//   const userId = req.params.userId
//   console.log(userId)
//   User.findById(userId)
//     .then((user) => {
//       res.json('users/edit', {
//         user 
//       })
//     })
// })

// router.get('/:userId/delete', (req, res) => {
//   const userId = req.params.userId

//   User.findByIdAndRemove(userId)
//     .then(() => {
//       // res.redirect('/users')
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

module.exports = router