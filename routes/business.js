var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res) {
  res.send('My business page');
});

module.exports = router;