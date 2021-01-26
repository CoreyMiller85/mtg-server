const express = require("express");
const router = express.Router();
const collection = require("../models/collection");

router.get("/", async (req, res) => {
  const data = collection.find();
  res.send(data);
});

router.post("/", async (req, res) => {
  const cardId = req.body.id;
  const cardData = collection.find({
    id: req.body.id,
  });
  if (cardData) {
  res.send("is in database");
  } else {
    res.send("is not in database");
  }
 =
});

module.exports = router;
