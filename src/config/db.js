const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://ahaTeam:ahaTeam6@cluster0.vjrxb.mongodb.net/Aha?retryWrites=true&w=majority`
  );
};

module.exports = connect;
