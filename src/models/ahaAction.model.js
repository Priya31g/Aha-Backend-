const mongoose = require("mongoose");

const ahaAction = new mongoose.Schema(
  {
    image: { type: String },
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

const AhaAction = mongoose.model("actions", ahaAction);

module.exports = AhaAction;
