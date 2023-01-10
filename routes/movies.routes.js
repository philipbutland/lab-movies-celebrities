// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie");
});

router.post("/movies/create", (req, res) => {
  console.log(req.body);
  const { title, genre, plot, cast } = req.body;
  Movies.create({ title: title, genre: genre, plot: plot, cast: cast })
    .then((result) => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/new-movie");
    });
});

module.exports = router;
