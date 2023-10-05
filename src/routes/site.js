const express = require('express');
const router = express.Router();

const  siteController = require('../app/controllers/SiteController.js');
router.use('/register', siteController.register);
router.use('/login', siteController.login);
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;