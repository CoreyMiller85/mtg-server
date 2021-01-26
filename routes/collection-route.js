const express = require("express");
const router = express.Router();
const collection = require("../models/collection");

router.get("/", async (req, res) => {
  const data = collection.find();
  res.send(data);
});

router.post("/", async (req, res) => {
  const cardId = req.body.id;
  await collection.find(
    {
      id: cardId,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result.length === 0) {
          collection.create({
            id: cardId,
            numberOwned: 1,
          });
        } else {
          const numOwned = result[0].numberOwned;
          collection.updateOne(
            { id: cardId },
            { numberOwned: numOwned + 1 },
            (err, result) => {
              if (err) {
                res.send(err);
              }
              res.send(result);
            }
          );
        }
      }
    }
  );
});

module.exports = router;
