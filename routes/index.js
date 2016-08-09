var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Delete1', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Search1', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Update1', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
