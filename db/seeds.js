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
    firstName:'Jean',
    lastName:'Altidor',
    instagram:'Jeanlikdenim',
    camera:'Sony AR7II',
    lens:'24-70mm 2.8',
    photo:'https://i.imgur.com/PoTSPmN.jpg',
  })

  const Michelle = new User({
    firstName:'Michelle',
    lastName:'Alfred',
    instagram:'The_Fit_Queen',
    camera:'Canon T3i',
    lens:'50mm 1.8',
    photo:'https://i.imgur.com/lko39vz.jpg',
      
  })

  const Steve = new User({
    firstName: 'Steve',
    lastName: 'Serrano',
    instagram: 'SESimages',
    camera: 'Fujima',
    lens: '24mm 1.8',
    photo: 'https://i.imgur.com/KiEwS9g.jpg',
  })

  const Ozzie = new User({
    firstName: 'Ozzie',
    lastName: 'Cunningham',
    instagram: '@_bendLikeBanana',
    camera: 'Nikon',
    lens: '24-70mm 2.8',
    photo: 'https://i.imgur.com/aZqPH6m.jpg'
  })

  const Emanuella = new User({
    firstName: 'Emanuella',
    lastName: 'Dorcil',
    instagram: '@TheOnly_Ea',
    camera: 'Sony AR7 II',
    lens: '50 1.8',
    photo: 'https://i.imgur.com/6cwZ4Y7.jpg'
  })
  const Sean = new User({
    firstName: 'Sean',
    lastName: 'D',
    instagram: 'SeanD1',
    camera: 'Canon MkII',
    lens: '70-200 2.8',
    photo: 'https://i.imgur.com/Y5LWTra.jpg'
  })


  

const Gary = new Photographer({
firstName:'Gary',
lastName:'Fong',
photo:'https://petapixel.com/assets/uploads/2014/12/garyfong.jpg',
instagram:'GaryFong4Real',
website:'https://www.garyfong.com/'
})

const Marge = new Photographer({
  firstName: 'Marge',
  lastName:'Simpson',
  website: 'http://www.simpsonsworld.com/',
  photo: 'https://s-media-cache-ak0.pinimg.com/originals/97/59/ef/9759ef4e74d095b3a2f4aff7af016695.jpg',
  instagram:'margebouviersimpson',
})

const Homer = new Photographer({
  firstName: 'Homer',
  lastName:'Simpson',
  website: 'https://en.wikipedia.org/wiki/Homer_Simpson',
  photo: 'https://i.imgur.com/sDVPVPl.jpg',
  instagram:'mr.homersimpson',
})

const Upload1 = new Photo ({
  img:'https://i.imgur.com/phBGjPR.jpg',

})

const Upload2 = new Photo ({
  img:'https://i.imgur.com/VopCByG.jpg',
  
})
const Upload3 = new Photo ({
  img:'https://i.imgur.com/GAkAnn4.jpg',
})
const Upload4 = new Photo ({
  img:'https://i.imgur.com/f3WIKxA.jpg',
})
const Upload5 = new Photo ({
  img:'https://i.imgur.com/S3sGKnu.jpg', 
})
const Upload6 = new Photo ({
  img:'https://i.imgur.com/WNpGmAu.jpg',
})
const Upload7 = new Photo ({
  img:'https://i.imgur.com/llS7sCc.jpg',
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
     Upload2.save()
     Upload3.save()
     Upload4.save()
     Upload5.save()
     Upload6.save()
    return Upload7.save()
    
  })

  .then(()=>{
    mongoose.connection.close()
    
    console.log(`Finished seeding database...
    Disconnected from Mongo`)
  })
