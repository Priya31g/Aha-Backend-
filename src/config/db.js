const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://ahaTeam:${process.env.CLOUDKEY}@cluster0.vjrxb.mongodb.net/Aha?retryWrites=true&w=majority`
  );
};

module.exports = connect;
