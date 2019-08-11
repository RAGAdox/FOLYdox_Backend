require("dotenv").config();

var cloudinary = require("cloudinary").v2;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const CLOUDINARY_URL =
  "cloudinary://" +
  process.env.API_KEY +
  ":" +
  process.env.API_SECRET +
  "@" +
  process.env.CLOUD_NAME;
function upload() {
  cloudinary.uploader.upload("x.png", function(error, result) {
    console.log(result, error);
  });
}
app.get("/", (req, res) => {
  res.send("Server started");
});
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
