// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const { findByIdAndUpdate } = require('../models/Celebrity.model')
const Celebrities = require('../models/Celebrity.model')


const router = require("express").Router();

// all your routes here

router.get('/celebrities/create',(req,res)=>{
    res.render('celebrities/new-celebrity')
})

router.post('/celebrities/create',(req,res)=>{
    console.log(req.body)
    const {name,occupation,catchPhrase} = req.body
    Celebrities.create({name:name,occupation:occupation,catchPhrase:catchPhrase})
    res.redirect('/celebrities')
})


 router.get('/celebrities',(req,res)=>{
     Celebrities.find()
     .then((result)=>{
         console.log(result)
         res.render('celebrities/celebrities',{result})
     })
 })


module.exports = router;
