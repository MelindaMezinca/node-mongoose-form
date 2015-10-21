var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var posts = new Schema({
      title: String,
      description: String,
      category: String
    }, {
      collection: 'posts'
    });
mongoose.model('posts', posts);

mongoose.connect('mongodb://localhost/MyDatabase');