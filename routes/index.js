const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);
router.get('/back',homeController.back);
router.get('/testinguh',homeController.testing);
router.use('/users', require('./users'));
router.use('/playground',require('./playground'));
router.get('/check',homeController.check);


module.exports = router;