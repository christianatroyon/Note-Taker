// MODULES
const fs = require("fs");
const router = require("express").Router();

// GET Route for html
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


module.exports = router;