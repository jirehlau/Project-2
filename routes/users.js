var router = require('express').Router();
var userCtrl = require('../controllers/user');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('respond with a resource');
// });

router.get('/', userCtrl.index);

router.get('/loggedin',userCtrl.loggedIn);

router.get('/restaurantprofile',userCtrl.restaurantProfile)

router.get('/addrestaurant',userCtrl.addRestaurants)

router.post('/addedrestaurant', userCtrl.addedRestaurant)

router.get ('/forBusinesses',userCtrl.forBusinesses)

router.get('/myrestaurants',userCtrl.myRestaurants)

router.get('/sushione',userCtrl.sushiOne)

router.post('/facts', isLoggedIn, userCtrl.addFact);

router.delete('/facts/:id', userCtrl.delFact);

// GUYBEAN SECTION CONTAINING THE ABOUT US PAGE, CONTACT US PAGE, AND TEAMS PAGE

router.get ('/aboutus',userCtrl.aboutUs)
router.get('/contactus',userCtrl.contactUs)
router.get('/team',userCtrl.team)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');0
}

module.exports = router;
