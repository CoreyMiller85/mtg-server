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
    console.log("is in database");
  } else {
    console.log("is not in database");
  }
  res.send(data);
});

module.exports = router;
