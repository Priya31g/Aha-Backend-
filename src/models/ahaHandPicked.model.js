const mongoose = require("mongoose");

const ahaHandPickedSchema = new mongoose.Schema(
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

const AhaHandPicked = mongoose.model("handpicked", ahaHandPickedSchema);

module.exports = AhaHandPicked;
