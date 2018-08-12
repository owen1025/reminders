'use strict';

const express = require('express');
const router = express.Router();

const topicRouter = require('./topic');

router.use('/topic', topicRouter);

module.exports = router;
