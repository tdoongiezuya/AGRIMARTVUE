const express = require('express');
const router = express.Router();
const _ = require('../helpers/jwtHelper')
const authController = require('../controllers/authController');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/userInfo/:user_info_id', authController.getuserInfo);
module.exports = router;