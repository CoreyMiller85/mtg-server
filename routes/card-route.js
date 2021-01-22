const express = require("express");
const router = express.Router();
const cards = require("../models/card");

router.get("/", async (req, res) => {
  try {
    console.log("connected to site");
    const data = await cards.find({
      name: { $regex: "llanowar", $options: "i" },
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    console.log("connected to site");
    const data = await cards.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
