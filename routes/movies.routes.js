// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
const router = require("express").Router();

// all your routes here

router.get("/movies/create", (req, res) => {
  Celebrity.find().then((allCelebrities) => {
    console.log(allCelebrities);
    res.render("movies/new-movie", { allCelebrities });
  });
});

router.post("/movies/create", (req, res) => {
  console.log(req.body);
  const { title, genre, plot, cast_id } = req.body;
  Movie.create({ title: title, genre: genre, plot: plot, cast_id: cast_id })
    .then((result) => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/new-movie");
    });
});

router.get('/movies/:movieId',(req,res)=>{
  console.log(req.params)
  Movie.findById(req.params.movieId).populate("cast_id")
  .then((result)=>{
      console.log(result)
      res.render('movies/movie-details',result)
  })
})


router.get("/movies", (req, res) => {
    Movie.find().populate("cast_id")
    .then((result) => {
      console.log(result);
      res.render("movies/movies", { result });
    });
});



router.get('/movies/:movieId/edit',(req,res)=>{
  Movie.findById(req.params.movieId)
  .then((movieToEdit)=>{
      console.log(movieToEdit)
      Celebrity.find("cast_id")
      res.render('movies/edit-movie',movieToEdit)
  })
})


router.post('/movies/:movieId/edit',(req,res)=>{
  console.log(req.body)
  const {title, genre, plot, cast_id} = req.body
  Movie.findByIdAndUpdate(req.params.movieId,{title: title, genre: genre, plot: plot, cast_id: cast_id })
  .then(()=>{
      console.log("Success Movie updated")
      res.redirect('/movies')
  })
})



router.post('/movies/:movieId/delete',(req,res)=>{
  console.log(req.params.movieId)
  Movie.findByIdAndRemove(req.params.movieId)
  .then(()=>{
      res.redirect('/movies')
  })
})

module.exports = router;
