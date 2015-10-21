var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res) {
  res.send('My photography page');
});

module.exports = router;