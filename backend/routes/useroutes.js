const express = require('express');
const {protect} = require("../middleware/authMiddleware")
const {registerUser, loginUser, resetPassword,getData} = require("../Controllers/userController")

const router = express.Router()

router.post('/register', registerUser);
router.post('/',loginUser);

router.get('/dashboard',getData)


module.exports = router