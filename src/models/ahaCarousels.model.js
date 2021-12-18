const mongoose = require("mongoose");

const ahaCarouselsSchema = new mongoose.Schema(
  {
    image: { type: String },
    link: { type: String },
  },
  { versionKey: false }
);

const AhaCarousels = mongoose.model("ahacarousels", ahaCarouselsSchema);

module.exports = AhaCarousels;
