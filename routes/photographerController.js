const express = require('express')
const router = express.Router()
const Photographer = require('../db/models/Photographer')
const bodyParser = require('body-parser')


///all photographer 
router.get('/', async(req, res) => {
  console.log("her from the photograhphers find route")
  try {
    const photographers = await Photographer.find({})
    console.log("when we hit the controller we see",photographers)
    res.json(photographers)
  } catch (error) {
    console.log(error)
  }
})

//to find a photographer
router.get('/:photographerId', (req, res) => {
  const photographerId = req.params.photographerId

  Photographer.findById(photographerId)
    .then((photographer) => {
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
    const user = await Photographer.findByIdAndRemove(req.params.photographerId)
    console.log(" i found the photographer and about to delete but photographer is", req.params.photographerId)
    console.log("from delete controller: we grabbed the photographer to delete", photographer)

    res.json(photographer)
  }catch(error){
    res.send(error)
  }
})

///to update a photographer
router.patch('/:photographersId', (req,res)=> {
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