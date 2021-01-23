const express = require("express");
const router = express.Router();
const cards = require("../models/card");

// router.get("/", async (req, res) => {
//   try {
//     console.log("connected to site");
//     const data = await cards.find({
//       name: { $regex: "llanowar", $options: "i" },
//     });
//     res.send(data);
//   } catch (err) {
//     res.send(err);
//   }
// });

router.get("/", async (req, res) => {
  const qName = req.query.name;
  const regName = new RegExp(qName);
  console.log(regName);
  try {
    const data = await cards.find({
      name: { $regex: qName, $options: "i" },
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
