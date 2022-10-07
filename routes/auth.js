const {Router} = require('express');
const router = Router();
const { googleAuth } = require('../controllers/auth');

// route: auth/google
router.post('/google', googleAuth);

module.exports = router;
