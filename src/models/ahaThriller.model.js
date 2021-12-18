const mongoose = require("mongoose");

const ahaThrillerSchema = new mongoose.Schema(
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

const ahaThriller = mongoose.model("thriller", ahaThrillerSchema);

module.exports = ahaThriller;
