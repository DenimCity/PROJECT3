require('dotenv').config()

const User = require('./models/User')
const Photographer = require('./models/Photographer')
const Photo = require('./models/Photo')
const mongoose = require('mongoose')
// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose
  .connection
  .once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })

mongoose
  .connection
  .on('error', (error) => {
    console.error(`
      MongoDB connection error!!! 
      ${error}
    `)
    process.exit(-1)
  })

  const Jean = new User({
    firstName:'Paul',
    lastName:'George',
    instagram:'@PaulEyeView',
    camera:'Sony AR7II',
    lens:'24-70mm 2.8',
    photo:'https://i.imgur.com/PoTSPmN.jpg',
  })

  const Michelle = new User({
    firstName:'Monna',
    lastName:'Thompson',
    instagram:'@The_Camera_Queen',
    camera:'Canon T3i',
    lens:'50mm 1.8',
    photo:'https://i.imgur.com/lko39vz.jpg',
      
  })

  const Steve = new User({
    firstName: 'Steve',
    lastName: 'Serrano',
    instagram: '@SESimages',
    camera: 'Fujima',
    lens: '24mm 1.8',
    photo: 'https://i.imgur.com/KiEwS9g.jpg',
  })

  const Ozzie = new User({
    firstName: 'Josh',
    lastName: 'Cunningham',
    instagram: '@OzonePhotos',
    camera: 'Nikon',
    lens: '24-70mm 2.8',
    photo: 'https://i.imgur.com/aZqPH6m.jpg'
  })

  const Emanuella = new User({
    firstName: 'Mariah',
    lastName: 'Griffin',
    instagram: '@KeerpYourEyeOnThePrize',
    camera: 'Sony AR7 II',
    lens: '50mm 1.8',
    photo: 'https://i.imgur.com/6cwZ4Y7.jpg'
  })
  const Sean = new User({
    firstName: 'Sean',
    lastName: 'D',
    instagram: 'SeanD1',
    camera: 'Canon MkII',
    lens: '70-200mm 2.8',
    photo: 'https://i.imgur.com/Y5LWTra.jpg'
  })


  

const Gary = new Photographer({
firstName:'Sam',
lastName:'Kolder',
photo:'https://i.imgur.com/FkChwv8.jpg',
instagram:'Sam_Kolder',
website:'https://www.instagram.com/sam_kolder'
})

const Marge = new Photographer({
  firstName: 'Jessica',
  lastName:'Bubb',
  website: 'http://www.rusticbones.com/',
  photo: 'https://i.imgur.com/4uxYI5m.jpg',
  instagram:'rusticbones',
})

const Homer = new Photographer({
  firstName: 'Brandon',
  lastName:'Woelfel',
  website: 'https://www.brandonwoelfel.com/',
  photo: 'https://i.imgur.com/9si2Juh.jpg',
  instagram:'brandonwoelfel',
})

const Upload1 = new Photo ({
  img:'https://i.imgur.com/phBGjPR.jpg',

})


const Upload3 = new Photo ({
  img:'https://i.imgur.com/GAkAnn4.jpg',
})
const Upload4 = new Photo ({
  img:'https://i.imgur.com/f3WIKxA.jpg',
})
const Upload5 = new Photo ({
  img:'https://i.imgur.com/qf7XGg9.jpg', 
})
const Upload6 = new Photo ({
  img:'https://i.imgur.com/WNpGmAu.jpg',
})
const Upload7 = new Photo ({
  img:'https://i.imgur.com/llS7sCc.jpg',
})

const Upload9 = new Photo ({
  img:'https://i.imgur.com/srlfBko.jpg',
})


  User.remove({}).then(()=>{
    console.log('Users planted in database')
    Jean.save()
    Michelle.save()
    Steve.save()
    Ozzie.save()
    Emanuella.save()
    return Sean.save()
    
  })

  Photographer.remove({}).then(()=>{
    console.log('Photographers saved')
    Gary.save()
    Marge.save()
    return Homer.save()
  }) 
  Photo.remove({}).then(()=>{
    console.log('Photos saved!!')
     Upload1.save()
     Upload3.save()
     Upload4.save()
     Upload5.save()
     Upload6.save()
     Upload7.save()
    return Upload9.save()
    
  })

  .then(()=>{
    mongoose.connection.close()
    
    console.log(`Finished seeding database...
    Disconnected from Mongo`)
  })
