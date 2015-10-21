var express = require('express');
var router = express.Router();

/* GET form. */
router.get('/', function(req, res) {
  posts.find(function(err, posts){
    console.log(posts)
    res.render(
      'developer.html',
      {posts: posts}
    );
  });
});

module.exports = router;