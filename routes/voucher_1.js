var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('voucher_1', { title: 'Create Voucher Step-1' });
});

module.exports = router;
