const mongoose = require("mongoose");

const ahaNewlyAddedSchema = new mongoose.Schema(
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

const ahaNewlyAdded = mongoose.model("newlyAdded", ahaNewlyAddedSchema);

module.exports = ahaNewlyAdded;
