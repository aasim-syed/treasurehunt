const express = require("express");
const router = express.Router();
const passport = require('passport');

const playgroundController = require('../controllers/playground_controller');

router.get('/wait',passport.checkAuthentication ,playgroundController.wait);

router.get('/',passport.checkAuthentication ,playgroundController.start);

router.post('/check' ,playgroundController.check);
router.post('/fcheck' ,playgroundController.fcheck);

router.get('/try-next-level' ,playgroundController.unavail);



module.exports = router;
