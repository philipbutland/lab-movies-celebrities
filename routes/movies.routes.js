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
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title: title, genre: genre, plot: plot, cast: cast })
    .then((result) => {
      console.log(result, "***");
      res.render("movies", { result });
    })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/new-movie");
    });
});

router.get('/movies',(req,res)=>{
  Movie.find()
  .populate('cast')
  .then((result)=>{
      console.log(result)
      res.render("movies/movies",{result})
  })
})


module.exports = router;
