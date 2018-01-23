const express = require('express')
const router = express.Router()

///to get the homepage


router.get('/', (req,res)=>{
  res.render('index', {title: "Welcome To ClickedIn!"})
})