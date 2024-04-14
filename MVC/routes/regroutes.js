const express = require('express');
const router = express.Router();

const { register } = require('../controllers/controllers');

router.post('/register', (req, res) => {
    register(req, res);
});

module.exports = router;