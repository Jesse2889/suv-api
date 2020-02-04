const router = require('express').Router() 
const cars = require('../controllers/car') 
const users = require('../controllers/auth')
//const secureRoute = require('../lib/secureRoute')



router.route('/cars') 
  .get(cars.index) 
  .post(cars.create)

router.route('/cars/:id')
  .get(cars.show)

router.route('/register')
  .post(users.register)

router.route('/login') 
  .post(users.login)

  
module.exports = router 