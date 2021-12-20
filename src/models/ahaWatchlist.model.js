const mongoose = require("mongoose");

const ahaWatchlist = new mongoose.Schema(
  {
    id: [{ type: mongoose.Schema.Types.ObjectId, ref: "ahaMostWatched", required: true} ]
  },
  { versionKey: false }
);

const Watchlist = mongoose.model("watchlist", ahaWatchlist);

module.exports = Watchlist;
