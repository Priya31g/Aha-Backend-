const mongoose = require("mongoose");

const ahaTop10Schema = new mongoose.Schema(
  {
    imageurl: { type: String },
    genre: { type: Array },
    imdbid: { type: String },
    title: { type: String },
    imdbrating: { type: Number },
    released: { type: Number },
    synopsis: { type: String },
    type: { type: String },
  },
  { versionKey: false }
);

const ahaTop10 = mongoose.model("top10", ahaTop10Schema);

module.exports = ahaTop10;
