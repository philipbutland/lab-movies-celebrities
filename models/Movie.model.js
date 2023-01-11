const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [String],
  // cast_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Celebrity" }],
});

module.exports = model("Movies", movieSchema);
