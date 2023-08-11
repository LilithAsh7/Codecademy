const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions.js');
const ideasRouter = require('./ideas.js');
const meetingsRouter = require('./meetings.js');

apiRouter.use('/api/minions', minionsRouter);
apiRouter.use('/api/ideas', ideasRouter);
apiRouter.use('/api/meetings', meetingsRouter);

module.exports = apiRouter;