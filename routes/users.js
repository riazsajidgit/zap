var express = require('express');
var router = express.Router();
var sequel = require('../modules/sequelize');
/* GET users listing. */
router.get('/', function(req, res, next) {

  sequel.query("SELECT * FROM `users`", { type: sequel.QueryTypes.SELECT})
      .then(function(users) {
        res.render('userlist', { title: 'Users List', ulist:users });
      })
});

module.exports = router;
