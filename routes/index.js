var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing Page' });
});
router.get('/resume', function(req, res, next) {
  let options = {
    root: './',
    dotfiles: 'allow',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('public/TestResume.pdf', options);
});
router.get('/about', function(req, res) {
  res.render('about', { title: 'about' });
});

module.exports = router;
