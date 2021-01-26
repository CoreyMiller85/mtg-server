const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const fs = require("fs");
const card = require("./models/card");
const app = express();
const cardsRoute = require("./routes/card-route");
const bodyParser = require("body-parser");
const collection = require("./routes/collection-route");
const PORT = process.env.PORT || 3002;
app.use(cors());

// let jsonData = JSON.parse(fs.readFileSync("./oracle-cards.json", "utf-8"));

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fr7qc.mongodb.net/MTG?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB Connected without Errors");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/cards", cardsRoute);
app.use("/api/collection", collection);

// app.post("/importcards", async (req, res) => {
//   try {
//     const data = await card.insertMany(jsonData);
//     console.log("Data Inserted");
//     res.status(200).json({
//       status: "files added",
//     });
//   } catch (err) {
//     console.log(err);
//     res.send("failed");
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
