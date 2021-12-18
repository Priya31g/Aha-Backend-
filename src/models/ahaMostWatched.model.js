const mongoose = require("mongoose");

const ahaMostWatchedSchema = new mongoose.Schema(
  {
    imageurl: { type: String },
    genre: { type: Array },
    imdbid: { type: String },
    title: { type: String },
    imdbrating: { type: Number },
    released: { type: Number },
    synopsis: { type: String },
    type: { type: String },
    categories: { type: String },
    premium: { type: String },
    title: { type: String },
    metaData: { type: String },
    description: { type: String },
    main_bg: { type: String },
    tags: { type: String },
    play: { type: String },
    tile_name: { type: String },
    cast: [{ name: { type: String }, pic: { type: String } }],
    similar: [
      {
        imageurl: { type: String },
        genre: { type: Array },
        imdbid: { type: String },
        title: { type: String },
        imdbrating: { type: Number },
        released: { type: Number },
        type: { type: String },
        synopsis: { type: String },
      },
    ],
    episodes: [
      {
        banner_img: { type: String },
        ep_title: { type: String },
        duration: { type: String },
        description: { type: String },
      },
    ],
  },
  { versionKey: false }
);

const ahaMostWatched = mongoose.model("mostwatched", ahaMostWatchedSchema);

module.exports = ahaMostWatched;
