var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '<h1>Express</h1>',
                        ,users:[{username:'zxx'},
                                {username:'tank'},
                                {username:'mark'}]
            });
});

module.exports = router;
