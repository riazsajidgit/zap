var express = require('express');
var router = express.Router();
var sequel = require('../modules/sequelize');

/* this page is getting List of Saved Vouchers (in DataBase). */
router.get('/', function(req, res, next) {
  sequel.query("SELECT * FROM `vouchers`", { type: sequel.QueryTypes.SELECT})
      .then(function(vouchers) {
        res.render('voucher_2', { title: 'Create Voucher Step-2', vlist:vouchers });
      })
});

module.exports = router;