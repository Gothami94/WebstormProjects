var express = require('express');
var router = express.Router();

/* GET about page */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'My Site',
        name: 'Gothami'

    });
});

module.exports = router;
