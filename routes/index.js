var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login/resgister', { title: 'Login System' });
});

router.get('/',(req,res)=>{
  res.render('home/main')
})

module.exports = router;
