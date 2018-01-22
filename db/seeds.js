require('dotenv').config()

const User = require('./models/User')
const Photographer = require('./models/Photographer')
const Photos = require('./models/Photos')

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
    instagram:'jeanlikdenim',
    camera:'Sony AR7II',
    lens:'24-70mm 2.8',
    photo:'https://i.imgur.com/PoTSPmN.jpg',
    photographers:[{
      firstName:'Gary',
      lastName:'Fong',
      website:'https://www.garyfong.com/'}],
    photos:[{
      img1:'https://i.imgur.com/phBGjPR.jpg',
      img2:'https://i.imgur.com/GAkAnn4.jpg',
      img3:'https://i.imgur.com/f3WIKxA.jpg',
      img4:'https://i.imgur.com/6cwZ4Y7.jpg' }]  
  })


  const Michelle = new User({
    firstName:'Michelle',
    lastName:'Alfred',
    instagram:'the_fit_queen',
    camera:'Canon T3i',
    lens:'50mm 1.8',
    photo:'https://i.imgur.com/PoTSPmN.jpg',
    photographers:[{
      firstName:'Marge',
      lastName:'Simpson',
      website:'http://www.simpsonsworld.com/'}],
    photos:[{
      img1:'https://i.pinimg.com/736x/d2/1e/50/d21e50b01d45b4c281b8b7e55e5f86a8--photography-surreal-magic-photography.jpg',
      img2:'https://farm4.staticflickr.com/3829/33207121940_81fc6b004e_b.jpg',
      img3:'http://www.lovepear.co.uk/wp-content/uploads/2013/06/bride-and-groom-wedding-portraits.jpg',
      img4:'http://clv.h-cdn.co/assets/17/04/980x490/landscape-1485198129-sam-7454-edited.jpg' }]  
  })

