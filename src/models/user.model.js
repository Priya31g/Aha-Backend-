const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    address_1: { type: String, required: true },
    address_2: { type: String },
    zip: { type: Number, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hash = bcryptjs.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  const match = bcryptjs.compareSync(password, this.password);
  return match;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
