var express = require('express');
var router = express.Router();

var app     = express();
//var bodyParser = require("body-parser")

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));*/

router.get('/', function(req, res, next) {
  res.render('voucher_3', { title: 'Create Voucher Step-3' });
});

app.post('/print', function(request, response){
  console.log(request.body);
});

/* GET home page. */

module.exports = router;
