const express = require('express'); 
const router = express.Router(); 

import RotasEwerton from './routes-ewerton'; 

router.use('/', RotasEwerton);

module.exports = router;

