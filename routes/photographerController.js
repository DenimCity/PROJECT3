const express = require('express')
const router = express.Router()
const Photographer = require('../db/models/Photographer')
const bodyParser = require('body-parser')


///all photographer 
router.get('/', async(req, res) => {
  try {
    const photographers = await Photographer.find({})
    res.json(photographers)
  } catch (error) {
    console.log(error)
  }
})

//to find a photographer
router.get('/:photographerId', (req, res) => {
  const userId = req.params.photographerId

  Photographer.findById(photograherId)
    .then((user) => {
      res.json(photographer)
    })
    .catch((err) => {
      console.log(err)
    })
})


//to create new photographer
router.post('/', async(req, res) => {
  try {
    const newPhotographer = await Photographer.create(req.body)
    res.json(newPhotograher)
  } catch (error) {
    console.log(error)
  }
})

//to delete a photographer
router.delete('/:photographerId/delete', async (req,res)=> {
  console.log('here from  the delete controller, you hit the route')
  try {
    const user = await Photographer.findByIdAndRemove(req.params.userId)
    console.log(" i found the photographer and about to delete but photographer is", req.params.photographerId)
    console.log("from delete controller: we grabbed the photographer to delete", photographer)

    res.json(user)
  }catch(error){
    res.send(error)
  }
})

///to update a photographer
router.patch('/:photographerId', (req,res)=> {
  const photographerId = req.params.photographerId
  const updateInfo = req.body
  Photographer.findByIdAndUpdate(photographerId, updateInfo)
  .then(()=> {
    res.json()
  }).catch((error)=>{
    console.log(error)
  })
})

module.exports = router