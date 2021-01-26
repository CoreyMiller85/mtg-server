const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  cardName: String,
  cardId: String,
  numberOwned: { type: Number, default: 0 },
  rarity: String,
  set: String,
  cost: String,
  price: String,
});

module.exports = mongoose.model("Collection", cardSchema);
