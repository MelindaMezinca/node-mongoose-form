var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res) {
  res.send('My design page');
});

module.exports = router;