const mongoose = require("mongoose");

const drinkOneSchema = mongoose.Schema({
  name: String,
  price: Number,
  amount: Number,
  coffeinMG: Number,
  size: Number,
  text: String,
});

const drinkOne = mongoose.model("drinkOne", drinkOneSchema);

module.exports = drinkOne;
