const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  id: String,

  numberOwned: { type: Number, default: 0 },
});

module.exports = mongoose.model("Collection", collectionSchema);
