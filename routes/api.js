'use strict';
const express = require('express');
let router = express.Router();

// get to api/samurais

router.use('/photos', require('./photos'))
router.use('/albums', require('./albums'))

module.exports = router;
