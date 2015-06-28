var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// a get request for users/views (because /user is the relative root in this file)
router.get('/views', function(req, res, next) {
  res.send('user view');
});

module.exports = router;
