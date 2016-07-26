var express = require('express');
var router = express.Router();
var sequel = require('../modules/sequelize');

var app     = express();
var bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/*router.get('/', function(req, res, next) {
  res.render('voucher_3', { title: 'Create Voucher Step-3' });
});*/

/* Code to convert Amount to Words */
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
  if ((num = num.toString()).length > 9) return 'overflow';
  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return; var str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])  : '';
  str += 'only';
  return str;
}
/* Code to convert Amount to Words */


router.post('/', function(req, res, next) {
  //var formData = res.body;
  //console.log(req.body);
  // Do stuff

  sequel.query("SELECT * FROM `vouchers` WHERE id = :id",{ replacements: { id: [req.body.select_voucher] }, type: sequel.QueryTypes.SELECT})
      .then(function(vouchers) {
        res.render('voucher_3', { title: 'Create Voucher Step-3', vouchers:vouchers, total:inWords(vouchers[0]["debit"]) });
        //console.log(vouchers);
      })


  //return false;
});



/* GET home page. */

module.exports = router;
