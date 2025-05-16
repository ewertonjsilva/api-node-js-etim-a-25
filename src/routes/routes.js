const express = require('express'); 
const router = express.Router(); 

const RotasEwerton = require('./routes-ewerton'); 

router.use('/', RotasEwerton);

module.exports = router;

