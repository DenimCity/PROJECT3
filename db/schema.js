//connecting mongoose 
const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise



const PhotosSchema = new Schema({
  img1:{type:String},
  img2: {type:String},
  img3: {type: String},
  img4:{type:String}
})

const PhotographerSchema = new Schema({
  firstName: {type: String},
  lastName:{type: String},
  website: {type: String},
  photo: {type: String}
},
  {usePushEach: true}
)

const UserSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  instagram: {type: String},
  camera: {type: String},
  lens: {type: String},
  photo: {type: String,default: 'http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png'},
  photos:[PhotosSchema],
  photographers: [PhotographerSchema],
},

{usePushEach: true},
) 

module.exports ={
  UserSchema,
  PhotographerSchema,
  PhotosSchema
}