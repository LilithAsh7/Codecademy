const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./server/minions');
const ideasRouter = require('./server/ideas');
const meetingsRouter = require('./server/meetings');

app.use('/api/minions', minionsRouter);
app.use('/api/ideas', ideasRouter);
app.use('/api/meetings', meetingsRouter);

module.exports = apiRouter;