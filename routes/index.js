var express = require('express');
var router = express.Router();

/***Client's Page***/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ShopName' });
});

/*GET catalog*/
router.get('/catalogue', function(req, res, next) {
  res.render('catalogue', { title: 'Catalogue' });
});

/*GET basket*/
router.get('/basket', function(req, res, next) {
  res.render('basket', { title: 'Basket' });
});

/***Admin Page***/
/*GET login*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' , name_is_correct: true, password_is_correct: true});
});

/*POST admin_page*/
router.post('/admin_page', function(req, res){
  let login = req.body.name;
  let password = req.body.password;

  if (login == 'paula' && password == '123') {
    res.render('admin_page', {title: login, name_is_correct: true, password_is_correct: true});
  }
});





/*POST product_admin*/ //POST and GET in the same place
/*router.post('/catalogue', function(req, res, next){
  let image = req.body.image;
  let description = req.body.description;
  let price = req.body.price;

  if (image != null && description !=null && price != null) {
    res.render('catalog', {valid_image: image, valid_description: description, valid_price: price});
  }
});*/
/*GET product_admin*/

module.exports = router;
