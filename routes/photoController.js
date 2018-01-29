const express = require('express')
const router = express.Router()
const Photo  = require('../db/models/Photo')
const bodyParser = require('body-parser') 
const User = require('../db/models/User') 

///all photos 
router.get('/', async(req, res) => {
  console.log("here from the photos controller")
  try {
    const photos = await Photo.find({})
    console.log("yea i found the photo data", photos)
    res.json(photos)
  } catch (error) {
    console.log(error)
  }
})

///for version 2
// //to find a photo
// router.get('/:photoId', (req, res) => {
//   const userId = req.params.userId

//   User.findById(userId)
//     .then((user) => {
//       res.json(user)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })


// //to add a  new photo
// router.post('/', async(req, res) => {
//   try {
//     const newPhoto = await Photo.create(req.body)
//     res.json(newPhoto)
//   } catch (error) {
//     console.log(error)
//   }
// })

// //to delete a photos
// router.delete('/:userId/delete', async (req,res)=> {
//   console.log('here from  the delete controller, you hit the route')
//   try {
//     const user = await User.findByIdAndRemove(req.params.userId)
//     console.log(" i found the photo and its", req.params.userId)
//     console.log("from delete controller in photos: we grabbed the photo to delete", photo)

//     res.json(photo)
//   }catch(error){
//     res.send(error)
//   }
// })

// ///to update a photo
// router.patch('/:photoId', (req,res)=> {
//   const photoId = req.params.userId
//   const updateInfo = req.body
//   User.findByIdAndUpdate(photoId, updateInfo)
//   .then(()=> {
//     res.json()
//   }).catch((error)=>{
//     console.log(error)
//   })
// })
module.exports = router