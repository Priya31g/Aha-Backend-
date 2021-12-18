const mongoose = require("mongoose");

const ahaOriginalsSchema = new mongoose.Schema(
  {
    imageurl: { type: String },
    genre: { type: String },
    imdbid: { type: String },
    title: { type: String },
    imdbrating: { type: Number },
    released: { type: Number },
    synopsis: { type: String },
    type: { type: String },
  },
  { versionKey: false }
);

const AhaOriginals = mongoose.model("ahaoriginals", ahaOriginalsSchema);

module.exports = AhaOriginals;
