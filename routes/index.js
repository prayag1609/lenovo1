var express = require('express');
var router = express.Router();

/* GET home page. */
var usecon = require("../controller/usercon")
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index',usecon.view);

// router.get

module.exports = router;
