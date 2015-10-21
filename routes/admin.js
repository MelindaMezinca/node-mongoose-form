var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var posts = mongoose.model('posts', posts);

/* GET form. */
router.get('/', function(req, res) {
  posts.find(function(err, posts){
    console.log(posts)
    res.render(
      'admin',
      {posts: posts}
    );
  });
});


/* POST form. */
router.post('/', function(req, res) {
  new posts({title : req.body.title, description: req.body.description, category: req.body.category})
  .save(function(err, comment) {
    console.log(comment)
    res.redirect('admin');
  });
});


module.exports = router;