const express = require("express");
let router = express.Router();
router.get("/", (req, res) => {
  res.send("auth module");
});
module.exports = router;
